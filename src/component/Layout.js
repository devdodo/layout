import React from 'react'
import Header from './component/Header'
import SideNav from './component/SideNav'
import MainContent from './component/MainContent'
import Footer from './component/Footer'


const Layout = () => {
  return (
    <div className='body'>
        <Header />
        <div className='mid-section'>
            <SideNav />
            <MainContent />
        </div>
        <Footer />
    </div>
  )
}

export default Layout