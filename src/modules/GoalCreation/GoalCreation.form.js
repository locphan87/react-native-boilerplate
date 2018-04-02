// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { withFormik } from 'formik'

import { translateWithNamespace, keyWithNameSpace } from '../../i18n'
import { RULES, validator } from '../Form'

import styles, { stylesObj } from './GoalCreation.form.style'

const translate = translateWithNamespace('goalCreation.form')
const keys = keyWithNameSpace('goalCreation.form')
const fields = ['title', 'start', 'current', 'end']
const errorMessages = {
  title: {
    required: keys('errors.title.required'),
    minLength: keys('errors.title.minLength')
  },
  start: {
    required: keys('errors.start.required')
  }
}
const InnerForm = ({
  values,
  errors,
  setFieldValue,
  handleSubmit,
  touched,
  isValid,
  setFieldTouched,
  isSubmitting
}) => (
  <View style={styles.container}>
    {fields.map(fieldName => (
      <View key={fieldName}>
        <Input
          placeholder={translate(fieldName).toUpperCase()}
          onChangeText={text => setFieldValue(fieldName, text)}
          value={values[fieldName]}
          onBlur={() => setFieldTouched(fieldName)}
        />
        {touched[fieldName] &&
          errors[fieldName] && <Text>{errors[fieldName]}</Text>}
      </View>
    ))}
    <Button
      containerStyle={[stylesObj.button, !isValid && stylesObj.disabled]}
      onPress={handleSubmit}
      disabled={!isValid || isSubmitting}
      text={translate('submit')}
    />
  </View>
)

const CreateGoalForm = withFormik({
  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },
  validate: validator({
    title: [
      RULES.required(errorMessages.title.required),
      RULES.minLength(errorMessages.title.minLength, 6)
    ],
    start: [RULES.required(errorMessages.start.required)]
  })
})(InnerForm)

export default CreateGoalForm
