import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <NavLink to="/">Back to home</NavLink>
    </div>
  )
}

export default NotFound