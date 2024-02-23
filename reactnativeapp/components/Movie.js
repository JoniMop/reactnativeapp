import { View, Text, TextInput, Button, FlatList, Image } from 'react-native'
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
      {movieList.length > 0 && <View>
        <Text>Found Matching Movies</Text>
        <FlatList 
            data={movieList}
            renderItem={({item}) => {
                return (
                    <View>    
                        <Image style={{width: 200, height: 150, margin: 15}} source={{uri:item.Poster}} />
                        <Text>{item.Title}</Text>
                        <Text>{item.Year}</Text>
                    </View>
                )
            }}
        />
      </View>}
    </View>
  )
}

export default Movie