import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';


const IconButtons = props => {
 
return (
    <View>
        <View style={{flexDirection: 'row'}}>
            <View style = {styles.buttonViewStyle}>
            <Icon.Button name="facebook"  style={{ padding: 10}}>Sign In with Facebook</Icon.Button>
            </View>
            
        </View>
        
   </View>

);
}

const styles = StyleSheet.create({

    buttonViewStyle: {
      width: '100%', 
      padding: 8,
      borderRadius: 6,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });
      
export default IconButtons;