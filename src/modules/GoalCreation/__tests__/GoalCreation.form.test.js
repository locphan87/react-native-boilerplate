import { testSnapshots } from '../../../utils/test.util'
import { InnerForm, handleSubmit } from '../GoalCreation.form.js'

const props = {
  isValid: false,
  isSubmitting: false,
  handleSubmit: jest.fn()
}

describe('module GoalCreation form', () => {
  testSnapshots(InnerForm, [
    {
      props,
      description: 'basic render'
    },
    {
      props: {
        ...props,
        isValid: true
      },
      description: 'when form is valid'
    }
  ])

  describe('handleSubmit', () => {
    test('should call setSubmitting after submit', async () => {
      const bag = {
        props: {
          onSubmit: jest.fn()
        },
        setSubmitting: jest.fn()
      }
      await handleSubmit({ title: 'foo bar' }, bag)
      expect(bag.props.onSubmit).toBeCalledWith({ title: 'foo bar' })
      expect(bag.setSubmitting).toBeCalledWith(false)
    })
  })
})
