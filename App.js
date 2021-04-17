import React from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { logoutSquawkUser } from './actions/userActions'
import Header from './components/Header/Header'
import Body from './components/Body/Body'

function App(){
  const dispatch = useDispatch();
  window.onunload = function () {
    dispatch(logoutSquawkUser());
}
  return (
    <>
      <Header/>
      <div  className="container-fluid content">
        <Body />
      </div>
    </>
  )
}
export default App;