import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  
  const goToDashboard = ()=>{
        navigation.navigate('Dashboard')
  }  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button title='Dashboard' onPress={goToDashboard} />
    </View>
  )
}

export default Home