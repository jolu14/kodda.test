import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/theme';

const styles = StyleSheet.create({
    inputContainer:{
      marginBottom:15
    },
    input: {
      padding: 20,
      borderWidth: 1,
      borderRadius: 8,
      fontSize: 16,
   
    },
    labelContainer: {
      position: 'absolute',
      paddingHorizontal: 8,
      backgroundColor: colors.WHITE,
    },
    label: {
     
      fontSize: 18,
    },
    error: {
      marginTop: 4,
      marginLeft: 12,
      fontSize: 12,
      color: '#B00020'
    },
  })

  export default styles;