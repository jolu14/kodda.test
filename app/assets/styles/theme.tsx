/**
 * Global style definitions and variables
 * 
 *  @class API
 */



import React from 'react';

import { StyleSheet } from 'react-native';


const colors = {
    // Basic colors
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
        backgroundColor: colors.WHITE
    }
  
});

export {theme, colors};