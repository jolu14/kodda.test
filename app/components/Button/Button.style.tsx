import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/theme';

const styles = StyleSheet.create({
    button:{
        padding:14,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:8,
        marginBottom:10,
    },
    primary: {
        backgroundColor: colors.PRIMARY_COLOR,
    },
    outline: {
        backgroundColor: "transparent"
    },
    label: {
        color:colors.WHITE,
        fontWeight:"bold",
        fontSize:16
    }
    
});

export default styles;