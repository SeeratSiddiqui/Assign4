import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput,  TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({ title }) => (
  <View style={styles.scrollItem}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
 const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
export default function Places() {
  
  return (
    
   <ScrollView style={styles.scrollview}>
   <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your city"
        keyboardType="string"
      />
       <TouchableOpacity
        style={styles.button}
        //onPress={onPress}
      >
        <Text  style={styles.head}>Add Places</Text>
      </TouchableOpacity>
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
   
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
    width: 200
  },
     scrollItem:{
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#008080',
    width: "90%",
    height: 50,
    padding: 10,
    margin: 10,
    borderRadius: 30,
    alignSelf: "center"
  },
  scrollviewText:{
    fontSize: 25,
    color: "white",
  },
  scrollview:{
    width: "100%",
    height: "100%",
  },
  title:{
    color: "white",
    fontSize: 15
  },
   button: {
    alignItems: "center",
    backgroundColor: "#008080",
    padding: 10,
    width: 170,
    marginLeft: 80
  },
  input: {
    alignItems: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200,
    color:"#008080",
    borderColor:"#008080", 
     marginLeft: 65,
     marginTop: 150
  },
  logo: {
    height: 128,
    width: 128,
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
