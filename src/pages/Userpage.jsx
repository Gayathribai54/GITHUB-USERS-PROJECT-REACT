

import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { UserContext } from '../contextHOOK/Context';


const UserPage = () => {
  const { username } = useParams();
  const [userDetail, setUserDetail] = useState(null);
  const {getUser} = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(username)
      setUserDetail(data)
    }
    fetchUser()
  }, [username, getUser])

  if (!userDetail) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading user details...</p>
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src={userDetail.avatar_url}
        alt={userDetail.login}
        style={{ width: '150px', borderRadius: '50%' }}
      />
      <h2>{userDetail.login}</h2>
      <p>{userDetail.hireable ? "open to work" : "not available"}</p>
      <p>Followers: {userDetail.followers}</p>
      <p>Following: {userDetail.following}</p>
      <p>Public Repos: {userDetail.public_repos}</p>
      {
        userDetail.company &&
        <p><strong>company:</strong>{userDetail.company}</p>
      }
      <a
        href={userDetail.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark"
      >
        View on GitHub
      </a>
    </div>
  )
}

export default UserPage