import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types'

const AlertState = (props) => {
  
  // initialise state
  const initialState = {
    alert : null }

  // initialise reducer
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // ACTIONS/METHODS
  // set alert function
  const setAlert = (msg, type) => {


    dispatch({
      type: SET_ALERT,
      payload : {msg:msg, type:type}
    })

    setTimeout(()=>{dispatch({type: REMOVE_ALERT})}, 1500)

  }
  

  // return provider for access to state & actions
  return(<AlertContext.Provider 
    value ={{
    alert : state.alert,
    setAlert
  }}
  >
    {props.children}
  </AlertContext.Provider>)

}

export default AlertState ;