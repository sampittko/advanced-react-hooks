import * as React from 'react'

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: action.step + state.count}
    case 'DECREMENT':
      return {count: state.count - action.step}
    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
}

function Counter({initialCount = 0, step = 2}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state

  const increment = () => dispatch({type: 'DECREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
