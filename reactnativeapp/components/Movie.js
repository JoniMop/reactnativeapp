import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Movie = () => {
    const[searchText, setSearchText] = useState("")
    const onSearchMovie = (textInput) => {
        setSearchText(textInput)
    }
    const findMovies = () => {
        console.log(searchText)
    }
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Movie</Text>
      <TextInput 
        value={searchText}
        onChangeText={onSearchMovie}
        placeholder="Enter movie name"
      />
      <Button title='Find movies' onPress={findMovies} />
    </View>
  )
}

export default Movie