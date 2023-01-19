import React, { PropsWithChildren } from 'react';
import { View, Text, Pressable, TouchableOpacity, ActivityIndicator } from 'react-native';
import { colors } from '../../assets/styles/theme';

import styles from './Button.style'

type ButtonType = "Primary" | "Outline" | "Outline danger" | string

type ButtonProps = React.ComponentProps<typeof TouchableOpacity> & {
  type: ButtonType,
  title: string,
  loading?:boolean 
};


const Button = (props: ButtonProps) =>{

  const { type, title, children, loading, ...restOfProps } = props


    let buttonStyle = {...styles.button}
    let labelStyle = {...styles.label }
    switch(type){
      case "Primary":
        buttonStyle = {...buttonStyle, ...styles.primary}
        labelStyle = {...labelStyle, } 
        break;
      case "Outline":
        buttonStyle = {...buttonStyle, ...styles.outline}
        labelStyle = {...labelStyle,  ...{color: colors.PRIMARY_COLOR}} 
        break;
      case "Outline danger":
          buttonStyle = {...buttonStyle, ...styles.outline}
          labelStyle = {...labelStyle,  ...{color: colors.DANGER}} 
          break;
    }

 
    return (
      
        <TouchableOpacity  {...restOfProps} disabled={loading || props.disabled}>
          <View style={buttonStyle}>
            {loading ? <ActivityIndicator color={colors.WHITE} />:<Text style={labelStyle}>{title}</Text>}

          </View>
        </TouchableOpacity>
    );
}

export default Button;