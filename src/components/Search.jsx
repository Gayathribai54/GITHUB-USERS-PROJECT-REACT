import React from 'react'
import { useState } from 'react'
import "../styles/search.css"
import { useContext } from 'react'
import { UserContext } from '../context/Context'
const Search = () => {

     const {users,searchUsers}= useContext(UserContext);
     const [username,setUsername]= useState("")

    function handleSubmit(e){
      e.preventDefault();
      searchUsers(username)
    }
    
  return (
    <div className='search-container'>
      <form className='search-form' onSubmit={handleSubmit}>
        <input type='text' value={username} onChange={e => setUsername(e.target.value)}></input>
        <button className='btn btn-dark'>Search</button>
      </form>
    </div>
  )
}

export default Search
