const singleSnapTest = (wrapper, description) => {
  test(description, () => {
    expect(wrapper).toMatchSnapshot()
  })
}
const snapTest = (wrapper, configs) => {
  describe('snapshots', () => {
    configs.forEach(config => {
      const { props, description } = config
      wrapper.setProps(props)
      singleSnapTest(wrapper, description)
    })
  })
}

export { snapTest, singleSnapTest }
