import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/theme';

const styles = StyleSheet.create({
    container:{
        padding:10,
        borderRadius:6,
        marginBottom:10,
        borderWidth:0.2
    },
    titleStyle:{
        fontWeight:"bold"  
      },
    messageStyle:{
      fontWeight:"normal"  
    },
    dangerContainer: {
        backgroundColor: colors.DANGER_SOFT,
        borderColor: colors.DANGER,
    },
    dangerText:{
        color: colors.DANGER,
    }
    
});

export default styles;