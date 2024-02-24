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
        placeholder='Enter your name'
      />

       <TextInput
        value={deptId}
        onChangeText={onChangeDeptId}
        placeholder='Enter your dept Id'
      />
      <View style={{paddingBottom: 20, paddingTop: 20}}>
       <Button title='Dashboard' onPress={goToDashboard} />
      </View>
      <View>
       <Button title='Movie' onPress={() => navigation.navigate("Movie")} />
      </View>
    </View>
  )
}

export default Home