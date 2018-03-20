// @flow
import React from 'react'
import { Input, Button } from 'react-native-elements'
import { withFormik } from 'formik'
import { View } from 'react-native'

import { translateWithNamespace } from '../../i18n'

import styles, {
  stylesObj
} from './GoalCreation.form.style'

const translate = translateWithNamespace(
  'goalCreation.form'
)
const fields = ['title', 'start', 'current', 'end']
const InnerForm = ({
  values,
  setFieldValue,
  handleSubmit,
  isSubmitting
}) => (
  <View style={styles.container}>
    {fields.map(fieldName => (
      <Input
        key={fieldName}
        placeholder={translate(fieldName).toUpperCase()}
        onChangeText={text =>
          setFieldValue(fieldName, text)
        }
        value={values[fieldName]}
      />
    ))}
    <Button
      containerStyle={stylesObj.button}
      onPress={handleSubmit}
      disabled={isSubmitting}
      text={translate('submit')}
    />
  </View>
)

const CreateGoalForm = withFormik({
  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  }
})(InnerForm)

export default CreateGoalForm
