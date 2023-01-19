import React from 'react';
import { View, Text, Image } from 'react-native';


import styles from './Avatar.style'



type AvatarProps = {
  size: "sm" | "md" | "lg",
  image: string 
};

const Avatar = (props: AvatarProps) =>{

    const { size, image } = props
    
    let imageStyle = styles.image

    switch(size){
      case "lg":
        imageStyle = {...imageStyle, ...styles.lg}

      break
    }
 
    return (
     
      <View style={styles.imageContainer}>
      <Image
          style={imageStyle}
          source={{uri:image}}
        />
    </View>

  
    );
}

export default Avatar;