/**
 * Global style definitions and variables
 * 
 *  @class API
 */



import React from 'react';

import { StyleSheet } from 'react-native';


const colors = {
    // Basic colors
    GRAY: "rgb(122, 125, 127)",
    WHITE: "rgb(241, 246, 253)",

    // Themed colors
    PRIMARY_COLOR: "rgb(143, 0, 204)",
    DANGER:"#B00020",

    // Themed soft colors
    DANGER_SOFT: "#FCD5DC"
}


const theme = StyleSheet.create({
    container:{
        flex: 1,
        padding:10,
        marginTop:30,
        backgroundColor: colors.WHITE
    },
    row:{
        flexDirection:"row"
    },
    flex1:{
        flex:1
    },
    flex2:{
        flex:2
    },
    alignCenter:{
        alignItems:"center",
        justifyContent:"center"
    },
    bgPrimary:{
        backgroundColor:colors.PRIMARY_COLOR
    },
    mt10:{
        marginTop:120
    }
  
});

export {theme, colors};