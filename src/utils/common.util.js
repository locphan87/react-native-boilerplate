const insertIf = (condition, ...elements) =>
  condition ? elements : []
const delay = (ms = 1000) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })

export { insertIf, delay }
