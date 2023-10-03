// Production performance monitoring
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'
import reportProfile from '../report-profile'

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return (
    <div>
      {/*
      🐨 Wrap this div in a React.Profiler component
      give it the ID of "counter" and pass reportProfile
      to the onRender prop.
      */}
      <React.Profiler id="counter" onRender={reportProfile}>
        <div>
          Profiled counter
          <Counter />
        </div>
        <div>
          Unprofiled counter
          <Counter />
        </div>
      </React.Profiler>
    </div>
  )
}

export default App
