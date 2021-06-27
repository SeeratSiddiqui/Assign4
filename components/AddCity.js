import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput,  TouchableOpacity } from 'react-native';

export default function AssetExample() {
  
  
  return (
    <View style={styles.container}>
    <Text style={styles.secondhead}> Country </Text>
      <TextInput
        style={styles.input}
       placeholder="Enter your Country"
      />
      <Text style={styles.secondhead}> City </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your city"
        keyboardType="string"
      />
       <TouchableOpacity
        style={styles.button}
        //onPress={onPress}
      >
        <Text  style={styles.head}>Add City</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footbutton}
        //onPress={onPress}
      >
        <Text  style={styles.head}>View City List</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginBottom: 120
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    alignItems: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200,
    color:"#008080",
    borderColor:"#008080", 
  },
   button: {
    alignItems: "center",
    backgroundColor: "#008080",
    padding: 10,
    width: 170
  },
  footbutton: {
    marginLeft: 15,
    marginTop: 100,
    alignItems: "center",
    backgroundColor: "#008080",
    padding: 10,
    width: "100%",
  },
  head: {
   color:"white",
   fontSize: 15
  },
  secondhead: {
   color:"#008080",
   fontSize: 15
  }
});
