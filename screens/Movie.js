import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image,View } from 'react-native';
export default function Movie ({item, setModalOpen, setMovie}) {
    const image = item.Poster
    const handlePress = async (title) => {
        const result = await fetch('https://www.omdbapi.com/?apikey=<API_KEY>&t='+title)
        const moviesTemp = await result.json()
        setMovie(moviesTemp)
    }
    return (
        <TouchableOpacity onPress={() => {
            setModalOpen(true)
            handlePress(item.Title)
        }} style={styles.movieContainer}>
            <Image 
                style={styles.images}
                source={{
                    uri: image
                }}
            />
            <View style={styles.bottom}>
                <Text style={styles.title}>{item.Title}</Text>
                <Text style={styles.year}>{item.Year}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    movieContainer: {
        backgroundColor: '#fff',
        borderRadius: 7,
        margin: 10,
        padding: 10,
        flex: 1,
        height: 300,
    },
    images:{
        flex: 10,
        resizeMode: 'cover',
        marginBottom: 10,
        borderRadius: 7        
    },
    title:{
        fontSize: 12,
        color: '#555'
    },
    year:{ 
        fontSize: 10,
        color: '#888'
    },
    bottom:{
        flex:2,
        justifyContent: 'flex-start'
    }
})
  