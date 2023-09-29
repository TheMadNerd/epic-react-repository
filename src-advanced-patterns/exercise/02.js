// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'
import {cloneElement} from 'react'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, {on, toggle})
  })
}

// 🐨 Flesh out each of these components

// Accepts `on` and `children` props and returns `children` if `on` is true
function ToggleOn({on, children}) {
  return on ? children : null
}

// Accepts `on` and `children` props and returns `children` if `on` is false
function ToggleOff({on, children}) {
  return on ? null : children
}

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
function ToggleButton({on, toggle}) {
  return <Switch on={on} onClick={toggle} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}
export default App

/*
eslint
  no-unused-vars: "off",
*/
