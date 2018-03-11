const snapTest = (wrapper, configs) => {
  configs.forEach(config => {
    const { props, description } = config
    test(description, () => {
      wrapper.setProps(props)
      expect(wrapper).toMatchSnapshot()
    })
  })
}

export { snapTest }
