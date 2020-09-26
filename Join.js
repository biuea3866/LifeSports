import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

var gender =[
  {label: "Male\u0020\u0020\u0020", value: 0},
  {label: "Female", value: 1},
];

export default function App(){

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>Sign Up</Text>

      <TextInput style={styles.input} 
      placeholder='Email'
      />

      <TextInput style={styles.input}
      secureTextEntry={true}
      placeholder='Password'/>

      <TextInput style={styles.input}
      secureTextEntry={true}
      placeholder='PasswordConfirm'/>

      <TextInput style={styles.input} 
      placeholder='Name'/>

      <TextInput style={styles.input} 
      placeholder='Birthday'/>
      
      <RadioForm
        radio_props={gender}
        onPress={(vlaue) => {}}
        buttonSize={15}
        formHorizontal={true}
      />

      <TextInput style={styles.input} 
      placeholder='Address'/>

      <TextInput style={styles.input} 
      placeholder='PhoneNumber'/>

      <Button title='Join'/>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 250,
  },
});
