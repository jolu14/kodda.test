import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/theme';

const styles = StyleSheet.create({
    imageContainer:{
        flex:1,

    },
    image:{
        height:50,
        width:50,
        borderRadius:100,
        marginEnd:10,
        borderWidth:2,
        borderColor:colors.PRIMARY_COLOR

    },
    lg:{
        height:100,
        width:100,
    }
    
});

export default styles;