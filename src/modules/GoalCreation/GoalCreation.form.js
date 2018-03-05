// @flow
import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { withFormik } from 'formik'

import styles from './GoalCreation.form.style'

const InnerForm = ({
  values,
  // errors,
  setFieldValue,
  handleSubmit,
  isSubmitting
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.button}
      onChangeText={text => setFieldValue('title', text)}
      value={values.title}
    />
    <TextInput
      style={styles.button}
      onChangeText={text => setFieldValue('start', text)}
      value={values.start}
    />
    <TextInput
      style={styles.button}
      onChangeText={text => setFieldValue('current', text)}
      value={values.current}
    />
    <TextInput
      style={styles.button}
      onChangeText={text => setFieldValue('end', text)}
      value={values.end}
    />
    <Button
      onPress={handleSubmit}
      disabled={isSubmitting}
      title="Submit"
    />
  </View>
)

const CreateGoalForm = withFormik({
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values)
  }
})(InnerForm)

export default CreateGoalForm
