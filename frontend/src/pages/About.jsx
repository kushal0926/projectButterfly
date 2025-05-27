import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <h1 class="text-9xl text-center">About</h1>
      </div>
  )
}

export default About