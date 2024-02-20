import { View, Text, Button } from 'react-native'
import React from 'react'

const Dashboard = ({ navigation }) => {
  
    const goToHome = ()=>{
          navigation.navigate('Home')
    }  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Dashboard</Text>
      <Button title='Home' onPress={goToHome} />
    </View>
  )
}

export default Dashboard