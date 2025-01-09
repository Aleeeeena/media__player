import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { addvideoAPI, getvideos, updatecategoryAPI } from '../services/allAPI'





function Viewvdio({addvideoresponse,deletecatvideoresponse,setdeletefromcategory}) {



  const [allvideos,setallvideos]=useState([])
  const[deletevideoresponse,setdeletevideoresponse]=useState("")
  console.log(allvideos);
  

  useEffect(() => {
    getAllvideos()
  
  }, [addvideoresponse,deletevideoresponse,deletecatvideoresponse])

  
  const getAllvideos=async()=>{

try {
  
 const result=await getvideos()
 console.log(result);

 if (result.status>=200 && result.status<300) {
  setallvideos(result.data)
 }
 
} catch (err) {
  console.log(err);
  
}
 }



const dragover=(e)=>{
  e.preventDefault()
}




 
const vdiodropped= async(e)=>{

  const {catdetail,vdio} =JSON.parse(e.dataTransfer.getData("sharedata"))
  console.log(catdetail,vdio);
  
 const updatedcategory= catdetail.allvideos.filter(video=>
    
   video.id!=vdio.id

  )
 
  console.log(`updated details ${updatedcategory}`);

const{id,catdata}=catdetail
try {

  const result= await updatecategoryAPI(id,{id,catdata,allvideos:updatedcategory})
  if (result.status>=200 && result.status<300) {
    setdeletefromcategory(result.data)
   
  }
 
 
  
} 

catch (error) {
  console.log(error);
  
}
  



try {
  


  const res =await addvideoAPI(vdio)
  if (res.status>=200 && res.status <300) {
    getAllvideos()
  }
} catch (error) {
  console.log(error);
  
}
  














}







  return (
   <>
   <Row droppable={true}  onDragOver={(e)=>dragover(e)}   onDrop={(e)=>vdiodropped(e)}>
   
       {
         allvideos?.length>0?
        

         allvideos.map(video =>(
          <Col className='mb-3' lg={4} md={6} sm={12}>
        <Videocard  displaydata={video}  setdeletevideoresponse={setdeletevideoresponse}/>
       
       </Col>
         ))
       :
       <div className='text-danger fw-bold'>Nothing to display</div>
}


   </Row>
   
   
   </>
  )
}

export default Viewvdio