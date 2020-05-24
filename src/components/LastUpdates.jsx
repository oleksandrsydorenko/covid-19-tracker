import React from 'react';
import { Text, View } from 'react-native';
import { format, parseISO } from 'date-fns';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Stripe } from '../components';
import { system } from '../utils/constants';

const styles = EStyleSheet.create({
  cell: {
    marginRight: wp(5),
    marginLeft: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  cellLabel: {
    fontSize: wp(3.8),
  },
  cellValue: {
    marginRight: wp(1.5),
    fontSize: wp(4.3),
  },
  column: {
    justifyContent: 'space-evenly',
  },
  report: {
    flexGrow: 1,
  },
  table: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const LastUpdates = ({ stats, time }) => {
  const statsPrepared = [
    [stats.total, stats.recovered],
    [stats.active, stats.deaths],
  ];
  const timeLabel = time
    ? `Last Updates: ${format(parseISO(time), system.DATE_TIME_FORMAT)}`
    : 'Last Updates';

  return (
    <View style={styles.report}>
      <Stripe label={timeLabel} />
      <View style={styles.table}>
        {statsPrepared.map((column, i) => (
          <View key={i} style={styles.column}>
            {column.map(({ color, label, value }, j) => (
              <View key={j} style={styles.cell}>
                <Text
                  style={{
                    ...styles.cellValue,
                    color,
                  }}
                >
                  {`+${value || 0}`}
                </Text>
                <Text
                  style={{
                    ...styles.cellLabel,
                    color,
                  }}
                >
                  {' '}
                  {label}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default LastUpdates;
