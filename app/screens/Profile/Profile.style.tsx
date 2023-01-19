import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/theme';

const styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize:36,
        marginBottom:20
    },

    subtitle:{
        marginBottom:10
    },
    container:{
        padding:5
    },
    label:{
        color:colors.GRAY,
        marginBottom:5
    },
    info:{
        fontWeight: "600",
        marginBottom:5
    }
  
});

export default styles;