import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CountryPicker, PieChart, PieChartStats, Stripe } from '../components';

const styles = StyleSheet.create({
  stats: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

const GlobalStats = ({ country, countries, fetchStats, stats }) => (
  <>
    <Stripe label="COVID-19 Tracker" />
    <View style={styles.stats}>
      <PieChartStats cells={[stats.total, stats.active]} />
      <PieChart
        data={[
          {
            fill: stats.deaths.color,
            value: stats.deaths.value,
          },
          {
            fill: stats.recovered.color,
            value: stats.recovered.value,
          },
          {
            fill: stats.active.color,
            value: stats.active.value,
          },
        ]}
      >
        <CountryPicker
          country={country}
          countries={countries.data}
          fetchStats={fetchStats}
        />
      </PieChart>
      <PieChartStats cells={[stats.recovered, stats.deaths]} />
    </View>
  </>
);

export default GlobalStats;
