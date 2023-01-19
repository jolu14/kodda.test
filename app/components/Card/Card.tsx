import React, { Children } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../assets/styles/theme';
import Avatar from '../Avatar/Avatar';


import styles from './Card.style'


type CardProps =  React.PropsWithChildren

const Card = (props: CardProps) =>{

  const { children, ...restOfProps} = props

 
    return (
   
        <View {...restOfProps} style={{ ...theme.alignCenter, ...styles.container}}>
            {children}
        </View>
       
    );
}

export default Card;