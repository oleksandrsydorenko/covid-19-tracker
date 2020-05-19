import React from 'react';
import { format, parseISO } from 'date-fns';
import { StyleSheet, Text, View } from 'react-native';

import { Stripe } from '../components';
import { system } from '../utils/constants';

const styles = StyleSheet.create({
  cell: {
    marginRight: 20,
    marginBottom: 30,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cellValue: {
    marginRight: 5,
    fontSize: 18,
  },
  report: {
    marginTop: 30,
  },
  table: {
    marginRight: 10,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Report = ({ data, style, time }) => {
  const timeLabel = time
    ? `Updated: ${format(parseISO(time), system.DATE_TIME_FORMAT)}`
    : 'Last Updates';

  return (
    <View style={styles.report}>
      <Stripe label={timeLabel} />
      <View style={styles.table}>
        {data.map((column, i) => (
          <View key={i}>
            {column.map(({ color, label, value }, j) => (
              <View key={j} style={styles.cell}>
                <Text
                  style={{
                    ...styles.cellValue,
                    color,
                  }}
                >
                  {`+${value || 0} ${label}`}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

Report.defaultProps = {
  data: [],
};

export default Report;
