import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PieChart as RNPieChart } from 'react-native-svg-charts';

const styles = StyleSheet.create({
  chart: {
    marginTop: 30,
    marginBottom: 30,
    height: 240,
  },
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 100,
  },
});

const PieChart = ({ children, data }) => (
  <View>
    <View style={styles.content}>{children}</View>
    <RNPieChart
      data={data.map(({ fill, value }, i) => ({
        value,
        arc: { padAngle: 0 },
        key: i,
        svg: { fill },
      }))}
      innerRadius="100%"
      outerRadius="78%"
      style={styles.chart}
    />
  </View>
);

PieChart.defaultProps = {
  data: [],
};

export default PieChart;
