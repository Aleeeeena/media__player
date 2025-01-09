import React, { useState } from 'react'
import Addvdio from '../components/Addvdio'
import Viewvdio from '../components/Viewvdio'
import Category from '../components/Category'
import { Row } from 'react-bootstrap'



function Home() {
  const[addvideoresponse,setvideoresponse]=useState("")
  const[deletecatvideoresponse,setdeletecatvideoresponse]=useState("")
  const[deletefromcategory,setdeletefromcategory]=useState("")
  
  return (
    <>
    <div className='d-flex justify-content-between m-5'>
   <div><Addvdio setvideoresponse={setvideoresponse} /></div>
   <div><a className='text-decoration-none ' href="./history"><h4 style={{color:'lightblue'}}>Watch History</h4></a></div>


    </div>

    <div className='d-flex justify-content-between m-5'>



    <div><Viewvdio setdeletefromcategory={setdeletefromcategory}  deletecatvideoresponse={deletecatvideoresponse} addvideoresponse={addvideoresponse} /></div>
    <div><Category setdeletecatvideoresponse={setdeletecatvideoresponse} deletefromcategory={deletefromcategory} /></div>
    </div>


    </>
  )
}

export default Home