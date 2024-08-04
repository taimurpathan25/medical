import './App.css';
import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Pages Importing
import Home from "./Pages/Home/Index";
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Services/Services'
import BlogDetails from './Pages/blog-details/BlogDetails'
import PageNotFound from './Pages/page-not-found/PageNotFound'

import ProButton from './Components/common-components/pro-button/ProButton';
import Loader from './Components/base-components/Loader/Loader';

function App() {
  return (
    <>
    <Loader/>
    <ProButton/>
   <BrowserRouter>
   <Routes>
    
    <Route path='*' element={<PageNotFound/>}/>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/services' element={<Services/>}/>
    <Route exact path='/blog-details' element={<BlogDetails/>}/>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
