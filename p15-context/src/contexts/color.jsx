import {createContext, useState} from "react"

const ColorContext = createContext({
  state: {color: 'rose', subcolor: 'violet'},
  actions: {
    setColor:() => {},
    setSubcolor:() => {}
  }
})

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('rose')
  const [subcolor, setSubcolor] = useState('violet')

  const value= {
    state: { color, subcolor },
    actions: { setColor, setSubcolor }
  }

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  )
}

const ColorConsumer = ColorContext.Consumer

export default ColorContext

export { ColorProvider, ColorConsumer }
