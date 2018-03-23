// @flow
type Delay = (ms?: number) => Promise<any>
type Match = any => Object => any

const insertIf = (condition: boolean, ...elements: any[]) =>
  condition ? elements : []

// used it to simulate
// loading and updating state
const delay: Delay = (ms = 1000) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })

// use _ as a branch for the default case
const match: Match = value => cases => {
  const hasKey = key => String(value) === key
  const matchingCase = Object.keys(cases).find(hasKey) || '_'
  const result = cases[matchingCase]

  // FIXME should return a match error
  if (!result) return null

  return result
}

export { insertIf, delay, match }
