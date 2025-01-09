import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Modal,Form } from 'react-bootstrap';
import { addcategoryAPI, deletecategoryAPI, deletevideo, fetchcategoryAPI, fetchdraggedvdiodetailAPI, updatecategoryAPI } from '../services/allAPI';
import { toast } from 'react-toastify';
import Videocard from './Videocard';








function Category({setdeletecatvideoresponse,deletefromcategory}) {

  const[catdata,setcatdata]=useState("")
  const[allcategory,setallcategory]=useState("")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
  
    categoryfunc()
  }, [deletefromcategory])
  

 const handlecategory=async()=>{

  console.log(catdata);
 

 if (catdata) {
  
  try {

    const result=await addcategoryAPI({catdata,allvideos:[]})
    console.log(result);
    toast.success(`${catdata} added successfully`)
    
    handleClose()
    categoryfunc()
    
  } catch (error) {
    console.log(err);
    
  }




 }
 else{
  toast.warning("Enter the Category name")
  
 }




 }


const categoryfunc=async()=>{


  try {
  
    const res=await fetchcategoryAPI()
    //console.log(res);
    setallcategory(res.data)
    console.log(allcategory);
    console.log("bb");
    
    

    
    
     } catch (error) {
      console.log("error");
      
     }

}
const deletecat=async(id)=>{


await deletecategoryAPI(id)
categoryfunc()


}


const videodropped=async(e,catid)=>{
  console.log(`droppd in catid ${catid}`);
  const videoid=e.dataTransfer.getData("videoid")
  console.log(`videocame from ${videoid}`);

  try {

   const {data}= await fetchdraggedvdiodetailAPI(videoid)
   console.log(data);
   const selectedcategory = allcategory?.find((a)=>a.id==catid)
   console.log(selectedcategory);
    selectedcategory.allvideos.push(data)
   
    console.log(selectedcategory);

    await updatecategoryAPI(catid,selectedcategory)
    categoryfunc()


   

    const result = await deletevideo(videoid)
   
    setdeletecatvideoresponse(result.data)
   
  } catch (error) {
    console.log(error);
    
  }
  
  
}







const dragovercategory=(e)=>{
  e.preventDefault()

}

const catdragstart=(e,catdetail,vdio)=>{

const sharedata={catdetail,vdio}
e.dataTransfer.setData("sharedata",JSON.stringify(sharedata))



}



  return (
 <>
<h4 style={{color:'lightblue'}}>All Category <span><button onClick={handleShow} className=' btn btn-primary rounded-circle'>+</button></span></h4>
 


 {
   allcategory?.length>0?
   
  allcategory.map(cat=>(

   <div  onDragOver={(e)=>dragovercategory(e)} droppable={true} onDrop={(e)=>videodropped(e,cat.id)} style={{width:'500px'}} className='border rounded border-3 p-3 my-5 info '>



   <div className='d-flex justify-content-between'>
 <h5 style={{color:'white'}}>{cat.catdata}</h5>
 
  <Button onClick={()=>deletecat(cat.id)}  variant="danger"><i class="fa-solid fa-trash"></i></Button>
 
 
 
 </div>


 {
   
   cat?.allvideos.length>0 &&
   
   
   <div className='row'>

   
     
     
     {
       cat?.allvideos?.map((vdio)=>(


<div draggable={true} onDragStart={(e)=>catdragstart(e,cat,vdio)} className='col-lg-6' >
     <Videocard  insidecategory={true} displaydata={vdio} />
     </div>


       ))
     }
 

     </div>
     
     
     }
 
  </div>






  ))
:

 <div className='text-danger'>no category added yet</div>




}




<Modal
 show={show}
 onHide={handleClose}
 backdrop="static"
 keyboard={false}
>
 <Modal.Header closeButton>
   <Modal.Title>Add Category</Modal.Title>
 </Modal.Header>
 <Modal.Body>
   <FloatingLabel controlId="floatingCategoryName" label="Category Name">
     <Form.Control
      onChange={e=>setcatdata(e.target.value)}
       type="text"
       placeholder="Enter category name"

     />
   </FloatingLabel>
 </Modal.Body>
 <Modal.Footer>
   <Button variant="secondary" onClick={handleClose}>
     Close
   </Button>
   <Button onClick={handlecategory} variant="primary" >
     Add
   </Button>
 </Modal.Footer>
</Modal>



 
 </>
  )
}

export default Category