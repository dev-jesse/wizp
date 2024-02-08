import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='search' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='whishlists'
        options={{
          tabBarLabel: 'Wishlists',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='heart-outline' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='trends'
        options={{
          headerShown: false,
          tabBarLabel: 'Trends',
          tabBarIcon: ({ size, color }) => (
            <Entypo name='area-graph' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='logs'
        options={{
          tabBarLabel: 'Logs',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name='date-range' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: 'Profile',

          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='person-circle-outline' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default Layout
