import React from 'react'
import Home from './pages/Home'
import Landing from './pages/Landing'
import History from './pages/History'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { toast, ToastContainer } from 'react-toastify'







function App() {
  return (
    <>

<ToastContainer
position="top-right"
autoClose={5000}

theme="colored"

/>
   <Header />
    

   <Routes>

     <Route path='/' element={ <Landing />} />
     <Route path='/home' element={ <Home />} />
     <Route path='/history' element={ <History />} />
     
  

   </Routes>

   <Footer />
    
    </>
  )
}

export default App
 
