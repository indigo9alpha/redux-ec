import React from 'react'
import {signOut} from '../reducks/users/operations'
import {getUserId, getUserName} from '../reducks/users/selectors.js'
import {useSelector, useDispatch} from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const uid = getUserId(selector)
  const username = getUserName(selector)
  
  return(
    <div> 
    <h2>HOME</h2>
    <p>{uid}</p>
      <p>{username}</p>
      <button onClick={() => dispatch(signOut())}>sign out</button>
    </div>
  )
}

export default Home