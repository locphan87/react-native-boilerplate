// @flow
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { withFormik } from 'formik'

import { translateWithNamespace, keyWithNameSpace } from '../../i18n'
import { FormUtils, RULES, validator, TextInput } from '../Form'
import type { FormProps } from '../../types'

import styles, { stylesObj } from './GoalCreation.form.style'

const translate = translateWithNamespace('goalCreation.form')
const keys = keyWithNameSpace('goalCreation.form')
const fields = ['title', 'start', 'current', 'end']
const { required, minLength } = RULES
const errorMessages = {
  title: {
    required: keys('errors.title.required'),
    minLength: keys('errors.title.minLength')
  },
  start: {
    required: keys('errors.start.required')
  }
}
const validate = validator({
  title: [
    required(errorMessages.title.required),
    minLength(errorMessages.title.minLength, 6)
  ],
  start: [required(errorMessages.start.required)]
})

const InnerForm = (props: FormProps) => {
  const { handleSubmit, isValid, isSubmitting } = props
  const fieldProps = FormUtils.getFieldProps(props)
  const disabled = !isValid || isSubmitting

  return (
    <View style={styles.container}>
      {fields.map(fieldName => (
        <TextInput
          key={fieldName}
          name={fieldName}
          placeholder={translate(fieldName).toUpperCase()}
          fieldProps={fieldProps}
        />
      ))}
      <Button
        containerStyle={[stylesObj.button, disabled && stylesObj.disabled]}
        onPress={handleSubmit}
        disabled={disabled}
        title={translate('submit')}
      />
    </View>
  )
}

type HandleSubmitFn = (values: Object, bag: Object) => any
const handleSubmit: HandleSubmitFn = async (
  values,
  { props, setSubmitting }
) => {
  await props.onSubmit(values)
  setSubmitting(false)
}
const CreateGoalForm = withFormik({
  displayName: 'CreateGoalForm',
  handleSubmit,
  validate
})(InnerForm)

export { InnerForm, handleSubmit }
export default CreateGoalForm
