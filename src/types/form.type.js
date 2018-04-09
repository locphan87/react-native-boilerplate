// @flow
type FieldProps = {
  values: Object,
  errors: Object,
  touched: Object,
  setFieldValue: Function,
  setFieldTouched: Function
}
type FormProps = FieldProps & {
  handleSubmit: Function,
  isValid: boolean,
  isSubmitting: boolean
}

export type { FieldProps, FormProps }
