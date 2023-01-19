/**
 * Profile screen, authentication required
 */

import React from 'react';
import { View, Text } from 'react-native';
import {theme} from '../../assets/styles/theme';
import Button from '../../components/Button/Button';

import styles from './Profile.style'

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

import { useRadomUsers } from '../../contexts/RandomUsersContext';

import Avatar from '../../components/Avatar/Avatar';
import Card from '../../components/Card/Card';

function Profile(){

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const randomUserContext = useRadomUsers()

  const route = useRoute<RouteProp<{params:{id:string}}>>()

  const user = randomUserContext.state.dict[route.params.id]

  return (
    <View style={theme.container}>

      <View >
        
           <View style={theme.row}>
         
          <Button onPress={navigation.goBack} title={`←(${randomUserContext.state.users.length}) Back`} type='Outline'/>
          <View style={theme.container}></View>
          
         </View>

      </View>

      <View>

           <View style={theme.alignCenter}>
            
            <Avatar size="lg"  image={user.picture.large} />
          </View>
          </View>

          <View style={theme.mt10}>
          <View style={theme.alignCenter}>
          <Text style={styles.title}>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</Text>
          </View>
       
            <Text  style={styles.label}>Contact info</Text>
            <Card>


          

              <View style={theme.row}>
      
                <Text style={styles.label}>Phone: </Text>
                  <Text style={styles.info}>{user.phone}</Text>
                </View>

                <View style={theme.row}>
      
      <Text style={styles.label}>Cell: </Text>
        <Text style={styles.info}>{user.cell}</Text>
      </View>

      <View style={theme.row}>
      
      <Text style={styles.label}>Email: </Text>
        <Text style={styles.info}>{user.email}</Text>
    </View>


            </Card>



            <Text  style={styles.label}>Personal info</Text>
            <Card>


              <View style={theme.row}>
      
              <Text style={styles.label}>Gender: </Text>
              <Text style={styles.info}>{user.gender}</Text>
              </View>


              <View style={theme.row}>
      
              <Text style={styles.label}>Age: </Text>
              <Text style={styles.info}>{user.dob.age}</Text>
              </View>

            </Card>

            <Text  style={styles.label}>Address info</Text>
            <Card>


              <View style={theme.row}>
      
              <Text style={styles.label}>Address: </Text>
              <Text style={styles.info}>{`${user.location.street.number} ${user.location.street.name}` }</Text>
              </View>
              <View style={theme.row}>
      
      <Text style={styles.label}>Postcode: </Text>
      <Text style={styles.info}>{user.location.postcode }</Text>
      </View>

              <View style={theme.row}>
      
              <Text style={styles.label}>City: </Text>
              <Text style={styles.info}>{user.location.city}</Text>
              </View>

              <View style={theme.row}>
      
      <Text style={styles.label}>State: </Text>
      <Text style={styles.info}>{user.location.state}</Text>
      </View>


      <View style={theme.row}>
      
      <Text style={styles.label}>Country: </Text>
      <Text style={styles.info}>{user.location.country}</Text>
      </View>


            </Card>




      </View>
 

    </View>
  );
}

export default Profile;