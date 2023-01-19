/**
 * Static class to handle de internal storage on teh device.
 * The information stored is not encrypted, so it can not be sensitive information
 * 
 *  @class Storage
 */


import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


class Storage{
    static getStoredAuthData= async (callback=(data: {token:string, id:number} | null)=>{}) => {
        try {
            const authDataJson = await AsyncStorage.getItem("authData");
            const authData = JSON.parse(authDataJson!);

            callback(authData)
          } catch (error) {
            callback(null)
            console.log(error);
          }
    };
    
    static storeAuthData = async (data: {token:string, id:number} ) => {
        try {
          await AsyncStorage.setItem("authData", JSON.stringify(data));
        } catch (error) {
          console.log(error);
        }
    };


    static flushStorage = async () => {
        try {
          await AsyncStorage.clear();
        } catch (error) {
          console.log(error);
        }
    };

}

export default Storage;