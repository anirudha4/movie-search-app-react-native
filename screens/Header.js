import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
      <View style={styles.header}>
          <Text style={styles.logo}>MovieSearch</Text>
          <Text onPress={() => console.log('PRESSED')} style={styles.link}>About</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
      header: {
          paddingHorizontal: 30,
          paddingTop: 40,
          paddingBottom:20,
          backgroundColor: '#f4f4f4',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
      },
      logo: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'dodgerblue'
      },
      link: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#555'
    }
  });
  