import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/theme';

const styles = StyleSheet.create({
    container:{
        padding:5,
        borderRadius:6,
        marginBottom:5,

        backgroundColor:"#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        
        elevation: 1,
    },
    title:{
        fontWeight:"bold"  
      },
    subtitle:{
      fontWeight:"normal"  
    },
    arrow:{
        fontWeight:"bold",
        fontSize:24,
        color:colors.PRIMARY_COLOR,
        marginEnd:10
    }
    
});

export default styles;