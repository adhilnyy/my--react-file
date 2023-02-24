import React from 'react'
import Logged from './Logged'
import NotLogged from './NotLogged'

const Main = ({isloggedin}) => {
  return (
    <div>

    {isloggedin ? <Logged /> : <NotLogged />}
   

    </div>
  )
}

export default Main