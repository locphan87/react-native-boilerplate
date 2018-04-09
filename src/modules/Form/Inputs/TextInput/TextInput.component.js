// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { Input } from 'react-native-elements'

import type { FieldProps } from '../../../../types'

import styles from './TextInput.component.style'

type Props = {
  name: string,
  placeholder: string,
  fieldProps: FieldProps
}

const TextInput = ({
  name,
  placeholder,
  fieldProps: { values, touched, errors, setFieldValue, setFieldTouched },
  ...rest
}: Props) => (
  <View style={styles.container}>
    <Input
      placeholder={placeholder}
      onChangeText={text => setFieldValue(name, text)}
      value={values[name]}
      onBlur={() => setFieldTouched(name)}
      {...rest}
    />
    {touched[name] && errors[name] && <Text>{errors[name]}</Text>}
  </View>
)

export default TextInput
