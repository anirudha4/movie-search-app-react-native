import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Movie from './Movie'
export default function MovieList({movies, setModalOpen, setMovie}) {
    return (
      <ScrollView style={styles.movies}>
       {movies.length > 0 &&  <FlatList 
          data = {movies}
          numColumns="2"
          renderItem = {({item}) => (
            <Movie item={item} setModalOpen={setModalOpen} setMovie={setMovie} />
          )}
          keyExtractor = {(item) => item.imdbID}
        />}
        {movies.length == 0 && <Text style={styles.message}>The movies you search for will be displayed here</Text>}
      </ScrollView>
    );  
}
const styles = StyleSheet.create({
  movies: {
    padding: 20,
    marginTop: 30,
    backgroundColor: '#f4f4f4',
    flex: 1,
    height: '100%' 
  },
  message:{
    padding: 10,
    backgroundColor: '#98e5fb',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'dodgerblue',
    borderRadius: 5,
    textAlign: 'center'
  }
})
  