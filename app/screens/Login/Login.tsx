/**
 * Login screen, it is the landing page for the application
 */

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Image, View, Text, Alert } from 'react-native';
import { RootStackParamList } from '../../../App';


import {theme} from '../../assets/styles/theme';
import Button from '../../components/Button/Button';
import AlertMessage from '../../components/Alert/Alert';

import TextInput from '../../components/TextInput/TextInput';
import { useUser } from '../../contexts/UserContext';

import styles from './Login.style'
import Storage from '../../utils/Storage';
import API from '../../utils/API';

const LOGO =  require("../../assets/imgs/logo.png");

type LoginDataType = {
  username:string, 
  password:string,
  token:string, 
} 

const  Login = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const userContext =  useUser()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [loginData, setLoginData] = useState<LoginDataType>({username:"", password:"", token:""})


    // First step when the app is loaded, verify if there is a token of authentication
    useEffect(()=>{
      setLoading(true)
      Storage.getStoredAuthData((data)=>{
        if (data){
         
          API.tokenValidation(
            {
              token: data.token,
              id: data.id
            },
            (result:any)=>{
              userContext.dispatch({type:"success login", value: result})
              navigation.navigate("Home")
              setLoading(false)
            },
            (result:any)=>{
              setLoading(false)
            }
          )
        }else{
          setLoading(false)
        }

      })

      

    },[])

    // Call the login function
    const login = () =>{
      setError(null)
      setLoading(true)
      API.login(
        loginData,
        (result:any)=>{
        
          Storage.storeAuthData({id: result.id, token: result.token})
          userContext.dispatch({type:"success login", value: result})
          navigation.navigate("Home")
          setLoading(false)
        },
        (result:any)=>{
          setError(result)
          
          setLoading(false)
        }
      )
    }

 
    return (
      <View style={theme.container}>
         <View style={styles.logoContainer}>
            <Image
                style={styles.logo}
                source={LOGO}
              />
          </View>

          {<View style={{...theme.container}}>
           
            <TextInput onChangeText={(username)=>setLoginData({...loginData, username })} value={loginData.username} label='Email'/>
            <TextInput  onChangeText={(password)=>setLoginData({...loginData, password })}  value={loginData.password} label='Password' secureTextEntry={true}/>

            {error ? <AlertMessage type="danger" title='Oops...' message={error}/>:null}

            <Button loading={loading} onPress={login} type="Primary" title='Login' />

            <Button type="Outline" title='Forgot your password?' />
          </View>}

      </View>
    );
}
``
export default Login;