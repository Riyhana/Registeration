import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
}
 from 'react-native'

export default function RegisterForm() {
  return (
    <View style={styles.regform}>
      <Text style={styles.header}>Register</Text>
      <TextInput style={ styles.input} placeholder="Full name" autoFocus/>
      <TextInput style={ styles.input} placeholder=" Email"/>
      <TextInput style={ styles.input} placeholder=" Password" secureTextEntry={true}/>
      <TextInput style={ styles.input} placeholder=" Phone" keyboardType="numeric"/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
    paddingLeft: 40,
    paddingRight:40
  },
  header: {
      borderBottomColor:'#199187',
      borderBottomWidth: 1,
      fontSize: 20,
      paddingBottom: 10,
      marginBottom:10
  },
  input: {
    borderColor:'#199187',
    borderWidth: 1,
    padding: 10,
    marginBottom:10
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#199187',
    padding: 10
  },
  text:{
    color: '#fff',
    fontWeight: 'bold'
  }
});
