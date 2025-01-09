import React, { useState } from 'react'
import { Button, FloatingLabel, Modal,Form, ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addvideoAPI } from '../services/allAPI';





function Addvdio({setvideoresponse}) {

  const[videoDetails,setvideoDetails]=useState({caption:"",imageurl:"",youtubeurl:""})
  console.log(videoDetails);
  

const [show, setShow] = useState(false);
const[isinvalid,setisinvalid]=useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const getembed=(link)=>{
    if (link.includes("v=")) {
      const embed=link.split("v=")[1].slice(0,11)
      // console.log(embed);
      
      setvideoDetails({...videoDetails, youtubeurl:`https://www.youtube.com/embed/${embed}`})
    }
else{
  setvideoDetails({...videoDetails,youtubeurl:''})
  setisinvalid(true)
}


   }



const handleupload=async()=>{

const {caption,imageurl,youtubeurl}=videoDetails
if (caption && imageurl && youtubeurl) {


try {
 const result=await addvideoAPI(videoDetails)
 console.log(result);
if (result.status>=200 && result.status<300) {
  setvideoresponse(result.data)
  toast.success(`${result.data.caption} added to you collection`)
  handleClose()
}
else{
  toast.error(`$result.response.data`)
}
 
 
} catch (err) {
 console.log(err);
  console.log("errroor");
  
  
}




  console.log("api call");
  
}
else{
 
  toast.error("Please enter the form completely")
}



}



  return (
    <>
    <h4 style={{color:'lightblue'}}>Upload New Video <span><button onClick={handleShow}  className=' btn btn-primary rounded-circle'>+</button></span></h4>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        please fill the following details

       <div className='text-white'>

       <FloatingLabel
        controlId="floatingInput"
        label="Caption"
        className="mb-3"
      >
        <Form.Control onChange={e=>setvideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Caption" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="youtube url">
        <Form.Control onChange={e=>getembed(e.target.value)} type="url" placeholder="url" />
         
          {isinvalid &&
          <div>
            <h6 className='text-danger' >invalid url</h6>
          </div>}
      </FloatingLabel>

      <br />
      
      <FloatingLabel controlId="floatingPassword" label="image url">
        <Form.Control onChange={e=>setvideoDetails({...videoDetails,imageurl:e.target.value})} type="url" placeholder="image url" />
      </FloatingLabel>

    
       

       </div>

         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleupload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addvdio