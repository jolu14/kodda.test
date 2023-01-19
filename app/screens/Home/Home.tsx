/**
 * Home screen, authentication required
 */

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import {theme} from '../../assets/styles/theme';
import Button from '../../components/Button/Button';
import { useUser } from '../../contexts/UserContext';
import styles from './Home.style'
import Storage from '../../utils/Storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import API from '../../utils/API';
import { useRadomUsers } from '../../contexts/RandomUsersContext';
import { FlatList } from 'react-native';
import UserCard from '../../components/UserCard/UserCard';
import Avatar from '../../components/Avatar/Avatar';

function Home(){
  const userContext =  useUser()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const randomUserContext = useRadomUsers()

  useEffect(()=>{
    randomize()
  },[])
  
  const logout = () =>{
    Storage.flushStorage()
    navigation.popToTop()
  }

  const randomize = () =>{
    API.getRandomUsersAPI(10,(response)=>{
     
      randomUserContext.dispatch({type:"set users", value: response.results})
    })
  }

  return (
    <View style={theme.container}>
      <View>
        <View style={theme.row}>
          <View style={theme.container}></View>
          <Button onPress={logout} title='Logout' type='Outline danger'/>
        </View>
        <View style={theme.row}>
          <Avatar size="lg"  image={userContext.state.user.image} />
          <View style={theme.container}></View>

        </View>
        <Text style={styles.title}>Hello, {userContext.state.user.firstName}</Text>
      

  

      </View>
      <View style={styles.listConatiner}>
        <Text style={styles.subtitle}>Your friends ({randomUserContext.state.users.length})</Text>
        <FlatList
          data={randomUserContext.state.users}
          renderItem={({ item }) => (
            <UserCard image={item.picture.thumbnail} email={item.email} name={`${item.name.first} ${item.name.last} `} userID={item.id} />
          )}
          keyExtractor={item => item.email}
        />

      </View>
      <Button onPress={randomize} title='Randomize' type='Primary'/>

    </View>
  );
}

export default Home;