import React from 'react'
import Footer from '../footerComponent/footer'

import '../../app/App'

const Layout = ({children, type}) => {
  return (
    <div className="app">
      <div className={`head head--${type}`}/>
      <div className="layout">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout