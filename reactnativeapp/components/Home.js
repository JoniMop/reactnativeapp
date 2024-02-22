import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const Home = ({ navigation }) => {
  const[name, setName] = useState("")
  const[deptId, setDeptId] = useState("")

  const onChangeName = (nameInput)=>{
    setName(nameInput);
  }

  const onChangeDeptId = (deptIdInput)=>{
    setDeptId(deptIdInput);
  }

  const goToDashboard = ()=>{
        navigation.navigate('Dashboard', {
            name: name,
            deptId: deptId
        })
  }  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <TextInput
        value={name}
        onChangeText={onChangeName}
        placeholder='Enter name'
      />

       <TextInput
        value={deptId}
        onChangeText={onChangeDeptId}
        placeholder='Enter dept Id'
      />
      <Button title='Dashboard' onPress={goToDashboard} />
      <Button title='Movie' onPress={() => navigation.navigate("Movie")} />
    </View>
  )
}

export default Home