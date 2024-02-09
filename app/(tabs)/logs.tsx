import Colors from '@/constants/Colors'
import moment from 'moment'
import { defaultStyles } from '@/constants/Styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Link } from 'expo-router'
import CalendarPicker from 'react-native-calendar-picker'
import { useState } from 'react'
import DailyCalendar from '../../components/DailyGraph'
import { useAuth } from '@clerk/clerk-expo'

const Page = () => {
  const today = new Date()
  const [startDate, setStartDate] = useState(today)
  const { isSignedIn } = useAuth()
  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Logs</Text>
      </View>
      {/* <View style={styles.calendarButton}>
        <Text style={styles.calendarButtonText}>{moment().format('LL')}</Text>
        <MaterialCommunityIcons
          name='calendar-cursor'
          size={24}
          color='white'
        />
      </View> */}

      {!isSignedIn ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ fontFamily: 'mon' }}>
            To start using the application, please sign in or register.
          </Text>
        </View>
      ) : (
        <View style={{ paddingHorizontal: 26 }}>
          <CalendarPicker
            onDateChange={(date: Date) => setStartDate(date)}
            startFromMonday={true}
            maxDate={today}
            selectedDayColor={Colors.primary}
            selectedDayTextColor='#FFFFFF'
            textStyle={{ fontFamily: 'mon' }}
          />

          <View style={{ marginTop: 26 }}>
            <Text style={{ fontFamily: 'mon-sb', fontSize: 16 }}>
              Date Selected: {startDate.toDateString()}
            </Text>
          </View>

          <DailyCalendar date={startDate} />
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logContainer: {
    padding: 24,
    marginTop: 40,
  },
  logText: {
    fontSize: 16,
    fontFamily: 'mon',
  },
  calendarButtonText: {
    fontFamily: 'mon-sb',
    fontSize: 18,
    color: '#fff',
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.primary,
    height: 50,
    borderRadius: 50,
    width: 250,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  header: {
    fontFamily: 'mon-b',
    fontSize: 24,
  },
})

export default Page
