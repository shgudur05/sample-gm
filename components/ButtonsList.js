import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const ButtonsList = props => {

    return (
       <View>
        <View style={{flexDirection: 'row'}}>
          <View style = {styles.buttonViewStyle}>
        <Button  title="Sign In"  
          borderWidth= '1' color= '#1DA27C'/>
        </View>
        </View>
        
        <View style={{flexDirection: 'row'}}>
          <View style = {styles.createButton}>
        <Button  title="Create An Account"  
          borderWidth= '1' color= '#1DA27C'/>
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
          fontWeight: 'bold'
        },
        
        createButton: {
          width: '100%', 
          padding: 12,
          paddingTop:10,
          marginTop: 15,
          borderRadius: 6,
          fontWeight: 'bold'
        },
      });
      
export default ButtonsList;