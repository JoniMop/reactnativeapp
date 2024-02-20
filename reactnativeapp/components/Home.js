import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Home = ({ navigation }) => {
  const[name, setName] = useState("John Doe")
  const[deptId, setDeptId] = useState("345")

  const goToDashboard = ()=>{
        navigation.navigate('Dashboard', {
            name: name,
            deptId: deptId
        })
  }  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button title='Dashboard' onPress={goToDashboard} />
    </View>
  )
}

export default Home