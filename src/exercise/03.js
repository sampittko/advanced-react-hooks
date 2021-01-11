import * as React from 'react'

const CountContext = React.createContext()

const CountProvider = props => {
  const [count, setCount] = React.useState(0)

  return (
    <CountContext.Provider value={[count, setCount]} {...props}>
      {props.children}
    </CountContext.Provider>
  )
}

const useCount = () => {
  const context = React.useContext(CountContext)

  if (!context) {
    throw new Error('useCount has to be used inside context provider')
  }

  return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
