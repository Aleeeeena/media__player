import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'

import { deletevideo, savehistoryAPI } from '../services/allAPI'



function Videocard({displaydata,setdeletevideoresponse,insidecategory}) {
  const[show,setShow]=useState(false)
  const handleClose = () => setShow(false);
 
  const handleShow =async () => {
    setShow(true);
    const{caption,youtubeurl}=displaydata
    const obj = new Date()
    const time=obj.toLocaleString()
    const history={
      caption,
      youtubeurl,
      time
    }

  try {
    
   const result=await savehistoryAPI(history)
   console.log(result);
   

  } catch (err) {
    console.log(err);
    
  }
   
   
  
  }
  const handledelete=async(videoid)=>{

    try {
     const result= await deletevideo(videoid)
     console.log(result);
     setdeletevideoresponse(result.data)
     
    } catch (err) {
      console.log(err);
      
    }
  }


const videodragstart=(e,videoid)=>{

  
  console.log(`${videoid}draageedd`);
  e.dataTransfer.setData("videoid",videoid)


  
}



  return (
   <>
   <div>
   <Card draggable={true}  onDragStart={(e)=>videodragstart(e,displaydata?.id)} style={{ width: '18rem',marginRight:'10rem' }}>
      <Card.Img onClick={handleShow} variant="top" src={displaydata?.imageurl} height={'250px'}/>
      <Card.Body>
        <Card.Title>{
        displaydata?.caption}</Card.Title>
        
        {
          
         !insidecategory &&
          <Button onClick={()=>handledelete(displaydata.id)} variant="danger"><i class="fa-solid fa-trash"></i></Button>
          }
      </Card.Body>
    </Card>

    <Modal  size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displaydata?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe  width="100%" height="315" src={`${displaydata?.youtubeurl}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   



   </div>
   
   
   
   
   </>
  )
}

export default Videocard