import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { formatNumber } from '../utils/helpers';

const styles = StyleSheet.create({
  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellLabel: {
    fontSize: 20,
  },
  cellValue: {
    marginBottom: 6,
    fontSize: 24,
  },
  stats: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const PieChartStats = ({ cells }) => (
  <View style={styles.stats}>
    {cells.map(({ color, label, value }, i) => (
      <View key={i} style={styles.cell}>
        <Text
          style={{
            ...styles.cellValue,
            color,
          }}
        >
          {formatNumber(value)}
        </Text>
        <Text
          style={{
            ...styles.cellLabel,
            color,
          }}
        >
          {label}
        </Text>
      </View>
    ))}
  </View>
);

PieChartStats.defaultProps = {
  cells: [],
};

export default PieChartStats;
