import { View, Text, Button } from 'react-native'
import React from 'react'

const Dashboard = ({ route, navigation }) => {
    const { name, deptId } = route.params;
  
    const goToHome = ()=>{
          navigation.navigate('Home')
    }  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Dashboard</Text>
      <Text>{name} - {deptId}</Text>
      <Button title='Home' onPress={goToHome} />
    </View>
  )
}

export default Dashboard