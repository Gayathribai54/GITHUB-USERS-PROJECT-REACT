


import React, { useContext } from 'react'
import { UserContext } from '../contextHOOK/Context'
import { Link } from 'react-router-dom';

import "../styles/Users.css"
import UserPage from '../pages/Userpage';

const User = () => {
    const {users} = useContext(UserContext);
  return (
    <div className='container'>
        <div className='row'>
           {
            users.map((user,index)=>(
                <div key={index} className='col-md-4'>
                    <img src={user.avatar_url} className='card-img-top'></img>
                    <h1>{user.login}</h1>
                    <Link to={`/userpage/${user.login}`} className='details'>view details</Link>
                </div>
            ))
           }
        </div>
      
    </div>
  )
}

export default User
