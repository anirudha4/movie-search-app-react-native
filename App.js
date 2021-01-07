import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Modal, Image, Button, ScrollView, } from 'react-native';
import Header from './screens/Header'
import MovieList from './screens/MovieList'
import Form from './screens/Form'
import ModalContent from './screens/ModalContent';
export default function App() {

  const [movies, setMovies] = React.useState([]);
  const [movie, setMovie] = React.useState()
  const [modalOpen, setModalOpen] = React.useState(false)
  const fetchMovies = async (value) => {
    const result = await fetch('https://www.omdbapi.com/?apikey=<API_KEY>&s='+value)
    const moviesTemp = await result.json()
    setMovies(moviesTemp.Search)
  }
  
  return (
    <SafeAreaView  style={styles.container}>
          <Header />
          <Form fetchMovies={fetchMovies} />
          <MovieList movies={movies} setModalOpen={setModalOpen} setMovie={setMovie} />
          <Modal visible={modalOpen}>
            <ModalContent movie={movie} setModalOpen={setModalOpen} setMovie={setMovie} />
          </Modal> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
