import React from 'react'
import Header from "./Components/common-components/Header/Header";
import Footer from './Components/common-components/Footer/Footer'
import ProButton from './Components/common-components/pro-button/ProButton';

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    
    {children}
    <Footer/>
    </>
  )
}

export default Layout