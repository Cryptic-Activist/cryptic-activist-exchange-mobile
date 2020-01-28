import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Navbar = (props) => {
  const onBackHandle = () => {
    console.log('back buttom pressed')
  }

  const onForwardHandle = () => {
    console.log('forward buttom pressed')
  }


  return (
    <View style={styles.navbar}>
      <View style={styles.view}>
        <Text style={styles.button} onPress={onBackHandle} >
          {'<'}
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.title} onPress={onBackHandle} >
          Cryptic Activist
        </Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.button} onPress={onBackHandle} >
          {'>'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    padding: 15,
    backgroundColor: '#ffcd2b',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: "#000",
    fontSize: 24,
  },
  button: {
    color: '#000',
    fontSize: 24,
  }
})


export default Navbar