// @flow
import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { withFormik } from 'formik'

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
    <Button onPress={handleSubmit} disabled={isSubmitting} title="Submit" />
  </View>
)

const CreateGoalForm = withFormik({
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values)
  }
})(InnerForm)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

export default CreateGoalForm
