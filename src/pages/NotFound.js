import React from 'react'
import { NavLink } from 'react-router-dom'

import Layout from '../components/layout/layout'

const NotFound = () => {
  return (
    <Layout>
      <h2>Page not found</h2>
      <NavLink to="/">Back to home</NavLink>
    </Layout>
  )
}

export default NotFound