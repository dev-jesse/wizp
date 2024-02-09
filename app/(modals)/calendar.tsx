import Colors from '@/constants/Colors'
import { useOAuth } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import CalendarPicker from 'react-native-calendar-picker'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native'
import { defaultStyles } from '@/constants/Styles'
import { useState, createContext } from 'react'
import DailyCalendar from '../../components/DailyGraph'

const Page = () => {
  const today = new Date()
  const [startDate, setStartDate] = useState(today)

  return (
    <View style={styles.container}>
      <CalendarPicker
        onDateChange={(date: any) => setStartDate(date)}
        startFromMonday={true}
        maxDate={today}
        selectedDayColor={Colors.primary}
        selectedDayTextColor='#FFFFFF'
        back
        textStyle={{ fontFamily: 'mon' }}
      />

      <View style={{ marginTop: 26 }}>
        <Text style={{ fontFamily: 'mon-sb', fontSize: 16 }}>
          Date Selected: {startDate.toDateString()}
        </Text>
      </View>

      <DailyCalendar />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 26,
  },

  seperatorView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 30,
  },
  seperator: {
    fontFamily: 'mon-sb',
    color: Colors.grey,
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
})
