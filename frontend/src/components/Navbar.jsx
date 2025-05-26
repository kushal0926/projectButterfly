import React from 'react'

const Navbar = () => {
  return (
    <nav class="flex items-center justify-around">
    <h1 class="text-4xl font-bold">Butterfly</h1>
    <ul class="flex gap-1 text-3xl">
        <li>Home</li>
        <li>Collection</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </nav>
  )
}

export default Navbar