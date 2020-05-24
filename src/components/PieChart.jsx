import React from 'react';
import { View } from 'react-native';
import { PieChart as RNPieChart } from 'react-native-svg-charts';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  chart: {
    marginTop: hp(2),
    marginBottom: hp(2),
    height: hp(35),
  },
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
      innerRadius="80%"
      outerRadius="64%"
      style={styles.chart}
    />
  </View>
);

PieChart.defaultProps = {
  data: [],
};

export default PieChart;
