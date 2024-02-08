import { View, Text, StyleSheet } from 'react-native'
import { BarChart, LineChart } from 'react-native-gifted-charts'
import Colors from '@/constants/Colors'
const SleepForecast = () => {
  const data1 = [
    { value: 55, label: 'M' },
    { value: 23, label: 'T' },
    { value: 50, label: 'W' },
    { value: 40, label: 'T' },
    { value: 18, label: 'F' },
    { value: 38, label: 'S' },
    { value: 32, label: 'S' },
  ]
  const data2 = [
    { value: 50, label: 'M' },
    { value: 10, label: 'T' },
    { value: 45, label: 'W' },
    { value: 30, label: 'T' },
    { value: 45, label: 'F' },
    { value: 18, label: 'S' },
    { value: 18, label: 'S' },
  ]
  return (
    <View>
      <View style={styles.legendContainer}>
        <View style={styles.legendLabelContainer}>
          <View
            style={[styles.legendBox, { backgroundColor: Colors.primary }]}
          ></View>
          <Text style={styles.legendText}>Actual Time</Text>
        </View>
        <View style={styles.legendLabelContainer}>
          <View
            style={[styles.legendBox, { backgroundColor: Colors.secondary }]}
          ></View>
          <Text style={styles.legendText}>Actual Time</Text>
        </View>
      </View>
      <LineChart
        areaChart
        curved
        noOfSections={4}
        data={data1}
        data2={data2}
        yAxisLabelTexts={['20:00', '21:00', '22:00', '23:00', '24:00']}
        yAxisLabelWidth={50}
        showVerticalLines
        spacing={47}
        xAxisLabelTextStyle={{ fontFamily: 'mon-sb' }}
        yAxisTextStyle={{ fontFamily: 'mon-sb' }}
        color1={Colors.primary}
        color2={Colors.secondary}
        textColor1='green'
        hideDataPoints
        dataPointsColor1={Colors.primary}
        dataPointsColor2={Colors.secondary}
        startFillColor1={Colors.primary}
        startFillColor2={Colors.secondary}
        startOpacity={0.8}
        endOpacity={0.3}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  legendContainer: { paddingBottom: 16, flexDirection: 'row', gap: 30 },
  legendLabelContainer: { flexDirection: 'row', gap: 8 },
  legendBox: { backgroundColor: Colors.primary, width: 15, height: 15 },
  legendText: {},
})

export default SleepForecast
