import React, { useEffect, useRef, useState } from 'react'
import {
  Text,
  TextInput as RNTextInput,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native'
import { colors } from '../../assets/styles/theme'

import styles from './TextInput.style'

type Props = React.ComponentProps<typeof RNTextInput> & {
  label: string
  errorText?: string | null,
  ref?: React.Ref<RNTextInput>
}

const TextInput = (props:Props) => {
  const {
    label,
    errorText,
    value,
    onBlur,
    onFocus,
    ...restOfProps
  } = props

  
  const [isFocused, setIsFocused] = useState(false)

  const inputRef = useRef<RNTextInput>(null)
  const focusAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {

    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start()

  }, [focusAnim, isFocused, value])

  let color = isFocused ? colors.PRIMARY_COLOR : '#B9C4CA'
  
  
  if (errorText) {
    color = colors.DANGER
  }

  return (
    <View style={styles.inputContainer}>
      <RNTextInput
        style={[
          styles.input,
          {
            borderColor: color,
          },
        ]}
        ref={inputRef}
        {...restOfProps}
        value={value}
        onBlur={(event) => {
          setIsFocused(false)
          onBlur?.(event)
        }}
        onFocus={(event) => {
          setIsFocused(true)
          onFocus?.(event)
        }}
      
      />
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          style={[
            styles.labelContainer,
            {
              transform: [
                {
                  scale: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.75],
                  }),
                },
                {
                  translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [24, -12],
                  }),
                },
                {
                  translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [16, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Text
            style={[
              styles.label,
              {
                color,
              },
            ]}
          >
            {label}
            {errorText ? '*' : ''}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  )
}


export default TextInput