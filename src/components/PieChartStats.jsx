import React from 'react';
import { Text, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';

import { formatNumber } from '../utils/helpers';

const styles = EStyleSheet.create({
  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellLabel: {
    fontSize: wp(4),
  },
  cellValue: {
    marginBottom: hp(0.8),
    fontSize: wp(5),
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
