import React from 'react'
import "../styles/About.css"
const About = () => {
  return (
    <div className='box'>
      <p>GitHub is a platform where developers store, share, and collaborate on code.
        It uses a system called Git, which helps track changes in your code (version control).</p>
        <p>
          When you create a project in GitHub, it’s called a repository (repo) — like a folder that holds all your files and tracks all updates.
        </p>
        <ul>
          You can:
          <li>✅ Save your code online (like cloud storage for developers)</li>
          <li>✅ Collaborate with others on the same project</li>
          <li>✅ See previous versions of your code</li>
          <li>✅ Share your portfolio or projects with the world</li>
        </ul>
        <a href='https://skills.github.com/'>know more</a>
    </div>
  )
}

export default About
