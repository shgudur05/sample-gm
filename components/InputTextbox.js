import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const InputTextbox = props => {
    return (
       <View>
        <View style={{flexDirection: 'row'}}>
        <TextInput 
        placeholder="User Name" 
        name= "username"
        placeholderTextColor = "#808080"
        style={styles.inputText}
        />
       
       </View>
       <View style={{flexDirection: 'row'}}>
        <TextInput 
        placeholder="Password" 
        secureTextEntry={true}
        name= "Password"
        placeholderTextColor = "#808080"
        style={styles.inputText2}
        />
       
       </View>
       
       </View>
     
    );
    }
    const styles = StyleSheet.create({
        inputText: {
          width: '98%',
          padding: 12,
          textAlign: 'center',
          borderWidth: 1,
          color: '#808080',
          margin: 5,
          marginBottom: 0,
          backgroundColor: '#222222',
          fontWeight: 'bold',
          borderTopLeftRadius: 6, borderTopRightRadius: 6
        },
        inputText2: {
            width: '98%',
            height: 50,
            padding: 12,
            textAlign: 'center',
            margin: 5,
             color: '#808080',
            borderWidth: 1,
            backgroundColor: '#222222',
            fontWeight: 'bold',
            borderBottomLeftRadius: 6, borderBottomRightRadius: 6
          }
      });
export default InputTextbox;