import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={whole_layout.container}>
      <TextInput
        placeholder="Write your item"
        placeholderTextColor="gray"
        style={whole_layout.input_filed}
      />
      
      <Button
        title="ADD Item"
        color='green'
      />

    </View>
  );
}

const whole_layout = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#fff',
    paddingTop:40,
    paddingLeft:10,
    paddingRight:10
  },input_filed: {
    backgroundColor: '#dee',
    borderColor: 'black',
    width:'70%',
    borderWidth:2,
    textAlign:"center",
    margin:5,
    paddingTop:10,
    paddingBottom:10,
    fontSize:16
  },
});