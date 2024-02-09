import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { BarChart } from 'react-native-gifted-charts'
import Colors from '@/constants/Colors'
const Page = ({ date }) => {
  const data = [
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
      label: '00:00',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 0,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 0,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 0,
      frontColor: '#006DFF',
    },
    {
      value: 0,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 0,
      frontColor: '#006DFF',
    },
    {
      value: 0,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 0,
      frontColor: '#006DFF',
    },
    {
      value: 0,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 0,
      frontColor: '#006DFF',
    },
    {
      value: 0,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 0,
      frontColor: '#006DFF',
    },
    {
      value: 0,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 0,
      frontColor: '#006DFF',
    },
    {
      value: 0,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 0,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 0,
      frontColor: '#006DFF',
    },
    {
      value: 0,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 0,
      frontColor: '#006DFF',
    },
    {
      value: 0,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
    {
      value: 1,
      frontColor: Colors.primary,
      spacing: 1,
    },
    {
      value: 1,
      frontColor: '#006DFF',
    },
  ]

  const today = new Date()
  const demoDate = new Date(today)
  demoDate.setDate(demoDate.getDate() - 27)

  if (date.getDate() !== demoDate.getDate()) {
    return (
      <View>
        <Text>No data logged</Text>
      </View>
    )
  }

  return (
    <View
      style={{
        marginTop: 30,
        borderRadius: 20,
      }}
    >
      <View style={styles.legendContainer}>
        <View style={styles.legendLabelContainer}>
          <View
            style={[styles.legendBox, { backgroundColor: Colors.primary }]}
          ></View>
          <Text style={styles.legendText}>Actual</Text>
        </View>
        <View style={styles.legendLabelContainer}>
          <View
            style={[styles.legendBox, { backgroundColor: '#006DFF' }]}
          ></View>
          <Text style={styles.legendText}>Predicted</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <BarChart
          data={data}
          barWidth={3.1}
          yAxisTextStyle={{ fontFamily: 'mon-sb' }}
          horizontalRulesStyle={{ fontFamily: 'mon-sb' }}
          initialSpacing={10}
          spacing={5}
          maxValue={1}
          noOfSections={1}
          yAxisLabelTexts={['Awake', 'Asleep']}
          yAxisLabelWidth={50}
          dashWidth={0}
          disableScroll
          labelWidth={40}
          xAxisLabelTextStyle={{ textAlign: 'left' }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  legendContainer: { paddingBottom: 16, flexDirection: 'row', gap: 30 },
  legendLabelContainer: { flexDirection: 'row', gap: 8 },
  legendBox: { backgroundColor: Colors.primary, width: 15, height: 15 },
  legendText: { fontFamily: 'mon' },
})

export default Page
