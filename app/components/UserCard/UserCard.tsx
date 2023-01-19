import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../assets/styles/theme';
import Avatar from '../Avatar/Avatar';


import styles from './UserCard.style'


type UserCardProps =  React.ComponentProps<typeof TouchableOpacity> & {
  email: string,
  name: string,
  image: string,
  userID: string 
};

const UserCard = (props: UserCardProps) =>{

  const { image, name, email, userID, ...restOfProps } = props

 
    return (
      <TouchableOpacity {...restOfProps}>
        <View style={{...theme.row, ...theme.alignCenter, ...styles.container}}>
          <View><Avatar size="sm" image={image} /></View>
          <View style={theme.flex1}>
            <Text style={styles.title}>{name}</Text>
            <Text>{email}</Text>
          </View>
          <View>
          <Text style={styles.arrow}>{"→"}</Text>
          </View>
        </View>
        </TouchableOpacity>
    );
}

export default UserCard;