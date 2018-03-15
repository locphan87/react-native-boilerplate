const insertIf = (condition, ...elements) =>
  condition ? elements : []

// used it to simulate
// loading and updating state
const delay = (ms = 1000) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })

export { insertIf, delay }
