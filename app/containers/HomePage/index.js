/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import styled from 'styled-components';
import L from 'leaflet';
import { Home } from 'lucide-react';

import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Stack, StackDivider, Box, Checkbox, Select } from '@chakra-ui/react'

// Styles
import styles from './HomePage.css';

// Data
import Wahllokale from './data/vorlaeufige-wahllokale-zur-europa-und-kommunalwahl-2024-in-der-landeshauptstadt0.geojson';
import WahlkreiseKW2019 from './data/wahlkreise-zur-kommunalwahl-2019-in-der-landeshauptstadt-potsdam-geodaten.geojson';
import WahlkreiseEW2019 from './data/wahlbezirke-zur-kommunal-und-europawahl-2019-in-der-landeshauptstadt-potsdam.geojson';
import StimmbezirkeBTW2021 from './data/wahlbezirke-zur-bundestagswahl-2021-in-der-landeshauptstadt-potsdam-geodaten.geojson';
import WahlergebnisseEW2019 from './data/ew2019.json';
import WahlergebnisseBTW2021 from './data/wahlergebnisse-zur-bundestagswahl-am-2692021-csv.json';

// Helper functions
const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const invlerp = (x, y, a) => clamp((a - x) / (y - x));
const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

const getPercentagesByWahlkreis = (ergebnisse, wahlkreise) => {
  if (!wahlkreise.compatibleErgebnisse.includes(ergebnisse.key)) return;

  const dataErgebnisse = typeof ergebnisse.data === 'function' ? ergebnisse.data() : ergebnisse.data;
  const dataWahlkreise = typeof wahlkreise.data === 'function' ? wahlkreise.data() : wahlkreise.data.features;

  let results = {};

  // Converts EW2019 Wahlkreise to KW2019 Wahlkreise, then gets the EW2019 Ergebnisse for those
  // Then it gets the percentage of votes for volt
  dataWahlkreise.forEach(({ properties: { wk_kw } }) => {
    // Get the corresponding EW2019 Wahlkreise
    let wahlkreise_ew = results[wk_kw] = WahlkreiseEW2019.features
      .filter(x => x.properties.wk_kw === wk_kw)
      .map(x => Number(x.properties.wbz));
    
    // Get the percentage of votes for Volt in those
    let wahlergebnisse = dataErgebnisse
      .filter(x => wahlkreise_ew.includes(x.nr))
      .map(x => x.volt_deutschland / x.wahler * 100);

    const sum = wahlergebnisse.reduce((a, b) => a + b, 0);
    const avg = (sum / wahlergebnisse.length) || 0;
    const total = dataErgebnisse[0].volt_deutschland / dataErgebnisse[0].wahler * 100;

    results[wk_kw] = avg;
  });

  return results;
};

// Render functions
/* Wahlkreise: Kommunalwahl 2019 */
const onEachFeatureWK2019 = (ergebnisse, wahlkreise, { properties }, layer) => {
  if (!wahlkreise.compatibleErgebnisse.includes(ergebnisse.key)) return;

  const percentage = getPercentagesByWahlkreis(ergebnisse, wahlkreise)[properties.wk_kw];
  layer.bindPopup(`<p>${properties.wk_bez}: ${percentage.toFixed(2)} %</p>`);
};

const featureToStyleKW2019 = ({ properties }, { key, data: originalData }) => {
  let wahlkreise_ew = WahlkreiseEW2019.features
    .filter(x => x.properties.wk_kw === properties.wk_kw)
    .map(x => Number(x.properties.wbz));

  let wahlergebnisse = WahlergebnisseEW2019.filter(x => {
    return wahlkreise_ew.includes(x.nr);
  }).map(x => {
    return (x.volt_deutschland / x.wahler) * 100;
  });

  const sum = wahlergebnisse.reduce((a, b) => a + b, 0);
  const avg = (sum / wahlergebnisse.length) || 0;
  const total = WahlergebnisseEW2019[0].volt_deutschland / WahlergebnisseEW2019[0].wahler * 100;
  
  return {
    color: `rgba(80, 35, 121, 0.9)`,
    weight: 1,
    fillOpacity: range(0, total, 0.1, 0.9, avg),
  };
}

const KW2019 = {
  title: 'Kommunalwahl 2019',
  style: featureToStyleKW2019,
  data: WahlkreiseKW2019,
  onEachFeature: onEachFeatureWK2019,
  compatibleErgebnisse: [
    'EW2019',
  ],
};

/* Wahlkreise: EW2019 */
const featureToStyleEW2019 = ({ properties }) => {
  const wahlergebnis = WahlergebnisseEW2019
    .find(x => x.nr === Number(properties.wbz));
  
  const percentage = (wahlergebnis.volt_deutschland / wahlergebnis.wahler) * 100;
  const total = WahlergebnisseEW2019[0].volt_deutschland / WahlergebnisseEW2019[0].wahler * 100;
  
  return {
    color: `rgba(80, 35, 121, 0.9)`,
    weight: 1,
    fillOpacity: range(0, total, 0, 0.9, percentage),
  };
}

const EW2019 = {
  title: 'Europawahl 2019',
  style: featureToStyleEW2019,
  data: WahlkreiseEW2019,
  compatibleErgebnisse: [
    'EW2019',
  ],
};

/* Bundestagswahl 2021 */
const normalizeDataBTW2021 = (data, key) => {
  return data.map(r => ({ ...r, volt_deutschland: r[key] }));
};

const featureToStyleBTW2021 = ({ properties }, { key, data: originalData }) => {
  if (!key === 'BTW2021') return;

  const data = typeof originalData === 'function' ? originalData() : originalData;

  const wahlergebnis = data.find(x => {
    // If not in Potsdam, return false.
    const gebietsnummer = String(x.gebietsnummer);
    if (!gebietsnummer.startsWith('120540000000')) return false;

    return gebietsnummer.endsWith(properties.wahlbezirk);
  });

  if (!wahlergebnis) return;

  const percentage = (wahlergebnis.volt_deutschland / wahlergebnis.waehler_gesamt_b) * 100;
  const total = (data[0].volt_deutschland / data[0].waehler_gesamt_b) * 100

  return {
    color: `rgba(80, 35, 121, 0.9)`,
    weight: 1,
    fillOpacity: range(0, total, 0.25, 0.9, percentage),
  };
};

const BTW2021 = {
  style: featureToStyleBTW2021,
  data: StimmbezirkeBTW2021,
  compatibleErgebnisse: [
    'BTW2021',
    'BTW2021Direct',
  ],
};

/* Wahllokale KW2024 */
const pointToLayer = ({ properties }, latlng) => {
  return L.marker(latlng, {
    icon: L.divIcon({
      className: styles.divIcon,
      iconSize: 12,
      html: renderToString(<Home size="12" />)
    })
  });
};

const onEachFeature = ({ properties }, layer) => {
  layer.bindPopup(`${properties.einrichtun} - ${properties.strassehnr}`);
};

/* Bundle them to select */
const datasetsWahlkreise = {
  KW2019,
  EW2019,
  BTW2021,
};

const datasetsErgebnisse = {
  EW2019: {
    key: 'EW2019',
    title: 'Europawahl 2019',
    data: WahlergebnisseEW2019,
  },
  BTW2021: {
    key: 'BTW2021',
    title: 'Bundestagswahl 2021',
    data: () => normalizeDataBTW2021(WahlergebnisseBTW2021, 'f19'),
  },
  BTW2021Direct: {
    key: 'BTW2021Direct',
    title: 'Bundestagswahl 2021 - Benjamin Körner',
    data: () => normalizeDataBTW2021(WahlergebnisseBTW2021, 'd19'),
  }
};

export default function HomePage() {
  const [isLoading, setLoading] = useState(true);
  const [showWahllokale, setShowWahllokale] = useState(true);
  const [selectedWahlkreise, setSelectedWahlkreise] = useState('KW2019');
  const [selectedErgebnisse, setSelectedErgebnisse] = useState('EW2019');

  const wahlkreise = datasetsWahlkreise[selectedWahlkreise];
  const ergebnisse = datasetsErgebnisse[selectedErgebnisse];

  useEffect(() => {
    if (!wahlkreise) return;
    if (!wahlkreise.compatibleErgebnisse.includes(selectedErgebnisse)) {
      setSelectedErgebnisse(wahlkreise.compatibleErgebnisse[0]);
    }
  }, [wahlkreise, ergebnisse, selectedErgebnisse, selectedWahlkreise]);

  return (
    <>
      <Card 
        pos='absolute'
        top='5'
        right='5'
        zIndex='10'
        maxW='sm'
        className={styles.filters}
      >
        <CardHeader>
          <Heading size="md">Settings</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs">
                Elements
              </Heading>
              <Checkbox 
                isChecked={showWahllokale}
                onChange={() => setShowWahllokale(!showWahllokale)}
              >
                Wahllokale
              </Checkbox>
            </Box>
            <Box>
              <Heading size="xs">
                Wahlkreise
              </Heading>
              <Select 
                placeholder='Select...'
                value={selectedWahlkreise}
                onChange={e => setSelectedWahlkreise(e.target.value)}
              >
                <option value='KW2019'>Kommunalwahl 2019</option>
                <option value='EW2019'>Europawahl 2019</option>
                <option value='BTW2021'>Bundestagswahl 2021</option>
              </Select>
            </Box>
            <Box>
              <Heading size="xs">
                Wahlergebnisse
              </Heading>
              <Select 
                placeholder='Select...'
                value={selectedErgebnisse}
                onChange={e => setSelectedErgebnisse(e.target.value)}
              >
                {wahlkreise?.compatibleErgebnisse ? 
                  wahlkreise.compatibleErgebnisse.map(key => {
                    const e = datasetsErgebnisse[key];
                    return <option value={e.key}>{e.title}</option>;
                })
                : (
                  <>
                    <option value='EW2019'>Europawahl 2019</option>
                    <option value='BTW2021'>Bundestagswahl 2021</option>
                  </>
                )}
              </Select>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <StyledMapContainer 
        center={[52.3906, 13.0645]} 
        zoom={13} 
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showWahllokale && <GeoJSON
          pointToLayer={pointToLayer}
          onEachFeature={onEachFeature}
          data={Wahllokale}
        />}
        {wahlkreise && <GeoJSON
          key={`dataset:${wahlkreise.key || selectedWahlkreise}-${ergebnisse?.key || selectedErgebnisse}`}
          {...wahlkreise}
          data={typeof wahlkreise.data === 'function' ? wahlkreise.data() : wahlkreise?.data}
          style={ergebnisse ? (feature) => wahlkreise.style(feature, ergebnisse) : null}
          onEachFeature={wahlkreise.onEachFeature ? (feature, layer) => wahlkreise.onEachFeature(ergebnisse ? ergebnisse : null, wahlkreise, feature, layer) : null}
        />}
      </StyledMapContainer>
    </>
  );
}

const StyledMapContainer = styled(MapContainer)`
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  width: 100%;
`;