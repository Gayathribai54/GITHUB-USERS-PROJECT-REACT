
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context/Context.jsx'
//import pages
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Userpage from './pages/Userpage.jsx'


const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.github.com/users');
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);


  async function searchUsers(username) {
    try {
      const { data } = await axios.get(`https://api.github.com/search/users?q=${username}`)
      setUsers(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  const getUser = async (username) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}`)
      return (data)
    } catch (error) {
      console.log(error)
    }
  }

  //getUser('priyagoud246')

  return (
    <>
      <Navbar />
      <UserContext.Provider value={{ users, searchUsers, getUser }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/userpage/:username' element={<Userpage />} />
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App