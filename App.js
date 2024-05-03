import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={40} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 50</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 51</Text>
          <Text style={styles.highLow}>Low: 40</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  }, 
  container: {
    flex: 1,
    alignItems: 'center'
  },
  temp: {
    fontSize: 40,
    color: 'black'
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  description: {
    fontSize: 40
  },
  message: {
    fontSize: 30
  }
})

export default App