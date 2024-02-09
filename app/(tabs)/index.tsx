import SleepForecast from '@/components/SleepForecast'
import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import React from 'react'
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { BarChart } from 'react-native-gifted-charts'
import { useAuth } from '@clerk/clerk-expo'

const Page = () => {
  const { isSignedIn } = useAuth()
  const barData = [
    { value: 16, label: 'M' },
    { value: 12, label: 'T' },
    { value: 15, label: 'W' },
    { value: 17, label: 'T' },
    { value: 9, label: 'F' },
    { value: 13, label: 'S' },
    { value: 14, label: 'S' },
  ]

  if (!isSignedIn) {
    return (
      <SafeAreaView style={defaultStyles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Trends</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontFamily: 'mon' }}>
            To start using the application, please sign in or register.
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Trends</Text>
      </View>
      <View style={styles.dateRangeHolder}>
        {/* <TouchableOpacity>
          <Text style={styles.dateRangeText}>1D</Text>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Text style={[styles.dateRangeText, { color: Colors.primary }]}>
            1W
          </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled>
          <Text style={[styles.dateRangeText, { color: '#AAAFB4' }]}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled>
          <Text style={[styles.dateRangeText, { color: '#AAAFB4' }]}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled>
          <Text style={[styles.dateRangeText, { color: '#AAAFB4' }]}>1Y</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.dateRangeText}>ALL</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 24 }}>
        <Text
          style={{
            fontFamily: 'mon-sb',
            marginBottom: 12,
            fontSize: 16,
          }}
        >
          Hours Slept
        </Text>
        <BarChart
          yAxisTextStyle={{ fontFamily: 'mon-sb' }}
          xAxisLabelTextStyle={{ fontFamily: 'mon-sb' }}
          barWidth={32}
          noOfSections={3}
          maxValue={24}
          yAxisLabelSuffix={'h'}
          data={barData}
          spacing={1 * 16}
          frontColor={Colors.primary}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 24 }}>
        <Text
          style={{
            fontFamily: 'mon-sb',
            marginBottom: 12,
            fontSize: 16,
          }}
        >
          Bedtime Forecasting
        </Text>
        <SleepForecast />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  dateRangeHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  dateRangeText: {
    fontFamily: 'mon-sb',
    fontSize: 18,
  },
  header: {
    fontFamily: 'mon-b',
    fontSize: 24,
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    alignItems: 'center',
    gap: 14,
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  editRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
})

export default Page
