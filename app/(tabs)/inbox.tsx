import { View, Text, StyleSheet } from 'react-native'
import { LineGraph } from 'react-native-graph'
import React from 'react'

const Page = () => {
  const points: any = [
    {
      date: new Date('2024-02-01'),
      value: 10,
    },
    {
      date: new Date('2024-02-02'),
      value: 40,
    },
    {
      date: new Date('2024-02-03'),
      value: 35,
    },
  ]

  return (
    <View>
      <Text>Page</Text>
      <LineGraph
        points={points}
        animated={true}
        color='#4484B2'
        style={styles.graph}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  graph: {
    width: '100%',
    height: 200,
  },
})

export default Page
