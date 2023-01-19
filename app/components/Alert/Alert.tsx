import React from 'react';
import { View, Text } from 'react-native';


import styles from './Alert.style'

type AlertType = "danger"

type AlertProps = {
  type: AlertType,
  title: string,
  message: string 
};

const AlertMessage = (props: AlertProps) =>{

  const { type, title, message } = props


    let alertContainerStyle = {...styles.container}
    let messageStyle = {...styles.messageStyle }
    let titleStyle = {...styles.titleStyle }

    switch(type){
      case "danger":
        alertContainerStyle = {...alertContainerStyle, ...styles.dangerContainer}
        messageStyle = {...messageStyle, ...styles.dangerText } 
        titleStyle = {...titleStyle, ...styles.dangerText } 
        break;
    }

 
    return (
     
        <View style={alertContainerStyle}>
          <Text style={titleStyle}>{title}</Text>
          <Text style={messageStyle}>{message}</Text>
        </View>
  
    );
}

export default AlertMessage;