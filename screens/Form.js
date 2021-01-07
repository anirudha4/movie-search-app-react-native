import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Touchable } from 'react-native';

export default function Form({ fetchMovies}) {
  const [value, onChangeText] = React.useState('')
  TouchableOpacity.defaultProps = { activeOpacity: 0.5 };
  return (
          <View style={styles.form}>
            <TextInput placeholder="Search Movie" style={styles.textField} onChangeText={text => onChangeText(text)} value={value} />
            <TouchableOpacity
              style={styles.buttonSubmit}
              onPress={() => fetchMovies(value)}
            >
              <Text style={{color:'white'}}>Search Movie</Text>
            </TouchableOpacity>
          </View>
  );
}

const styles = StyleSheet.create({
  
  form: {
    marginTop: 40,
    alignItems: 'center'
  },
  textField: {
    padding: 12,
    borderColor: '#f1f1f1',
    borderRadius: 5,
    borderWidth: 2,
    width: 300  
  },
  buttonSubmit:{ 
    marginTop: 10,
    padding: 13,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
  }
});
