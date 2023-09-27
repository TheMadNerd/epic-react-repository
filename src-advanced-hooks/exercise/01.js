// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  return {...state, ...(typeof action === 'function' ? action(state) : action)}
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function ConsoleGreeting(props) {
  const greet = React.useCallback(
    greeting => console.log(`${greeting} ${props.name}`),
    [props.name],
  )

  React.useEffect(() => {
    const helloGreeting = 'Hello'
    greet(helloGreeting)
  }, [greet])
  return <div>check the console</div>
}

function App() {
  return <Counter />
  return <ConsoleGreeting />
}

export default App
