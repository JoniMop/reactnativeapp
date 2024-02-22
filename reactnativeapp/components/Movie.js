import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Movie = () => {
    const [searchText, setSearchText] = useState("")
    const [movieList, setMovieList] = useState([])
    const onSearchMovie = (textInput) => {
        setSearchText(textInput)
    }
    const findMovies = async () => {
        console.log(searchText)
        let respObj = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d72fbfd0&s=${searchText}`)
        let movieObj = await respObj.json()
        console.log(movieObj.Search)
        setMovieList(movieObj.Search)
        setSearchText('')
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