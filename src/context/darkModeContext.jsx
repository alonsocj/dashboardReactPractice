import { createContext, useReducer } from 'react'
import DarkModeReducer from './darkModeReducer'
import PropTypes from 'prop-types'

const INITIAL_STATE = {
  darkMode: false
}
export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({ children }) => {
  DarkModeContextProvider.propTypes = {
    children: PropTypes.any.isRequired
  }
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE)

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  )
}
