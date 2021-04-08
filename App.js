import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import InputTextbox from './components/InputTextbox';
import ButtonsList from './components/ButtonsList';
import IconButtons from './components/IconButtons';

export default function App() {
  return (
    <View style={styles.container}>
    <View >
      <Image source={require('./assets/app-logo.png')} 
      style={{ width: 290, height: 290, alignSelf: 'center' }}/>
     <InputTextbox  />
     <ButtonsList  />
     <IconButtons />
     </View>
     </View>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
