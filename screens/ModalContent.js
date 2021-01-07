import React from 'react'
import {View, Text, ScrollView, StyleSheet, Button, Image} from 'react-native'

export default function ModalContent ({movie, setModalOpen, setMovie}) {
    return (
        <>
            {movie && <ScrollView style={styles.mainModal}>
              <Button title="CLOSE" onPress={() => {
                setModalOpen(false)
                setMovie()
              }} />
              {console.log(movie)}
              <View style={styles.imageContainer}>
                <Image 
                  style={styles.images}
                  source={{
                      uri: movie.Poster
                  }}
                />
              </View>
              <Text style={styles.movieName}>{movie.Title}</Text>
              <View style={styles.detatils}>
                <Text style={styles.topic}>
                  Directed By - 
                </Text>
                <Text style={styles.value}>
                  {' '+ movie.Director}
                </Text>
              </View>

              <View style={styles.detatils}>
                <Text style={styles.topic}>
                  Actors - 
                </Text>
                <Text style={styles.value}>
                  {' '+ movie.Actors}
                </Text>
              </View>

              <View style={styles.detatils}>
                <Text style={styles.topic}>
                  Language - 
                </Text>
                <Text style={styles.value}>
                  {' '+ movie.Language}
                </Text>
              </View>

              <View style={styles.detatils}>
                <Text style={styles.topic}>
                  imdb Rating
                </Text>
                <Text style={styles.value}>
                  {' '+ movie.imdbRating}
                </Text>
              </View>

              <View style={styles.detatils}>
                <Text style={styles.topic}>
                  Writers -  
                </Text>
                <Text style={styles.value}>
                  {' '+ movie.Writer}
                </Text>
              </View>

              <View style={styles.detatils}>
                <Text style={styles.topic}>
                  Plot - 
                </Text>
                <Text style={styles.value}>
                  {' '+ movie.Plot}
                </Text>
              </View>

              <View style={styles.detatils}>
                <Text style={styles.topic}>
                  Box-Office - 
                </Text>
                <Text style={styles.value}>
                  {' '+ movie.BoxOffice}
                </Text>
              </View>
            </ScrollView>}
            {!movie && <Text>Loading</Text>}
        </>
    )
}
const styles = StyleSheet.create({
    mainModal:{
        flex: 1,
    },
    images:{
        height: 300,
        resizeMode: 'contain'
    },
    detatils:{
        width: 340,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row'
    },
    topic:{
        fontWeight: 'bold',
        color: '#333'
    },
    value: {
        flex: 1,
        fontWeight: 'bold',
        color: '#444'
    },
    movieName:{
        padding: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'dodgerblue'
    }
})
