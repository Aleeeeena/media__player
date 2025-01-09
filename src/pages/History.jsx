import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletehistory, gethistory } from '../services/allAPI'





function History() {


 
 const[allhistory,setallhistory]=useState([])

  useEffect(() => {
    gethist()
  }, [])
  

 const gethist=async()=>{

 
  try {
    const result = await gethistory();
    const res = result.data; // Assuming result.data is an array
    console.log("Fetched data:", res);
   setallhistory(res); // Update state
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  




  
}



const deletehist=async(videoid)=>{


try {
  await deletehistory(videoid)
  setallhistory(previous=>previous.filter((item)=>item.id!=videoid))

} catch (error) {
  console.log(err);
  
}



}



  return (
   <>
   







   <div className='d-flex justify-content-between m-5'>

<div><h4>Watch History</h4></div>
<div><Link className='text-decoration-none' to={'/home'}> <h4>Back To <i class="fa-solid fa-house"></i></h4>  </Link></div>


   </div>


   <div>

 {allhistory?.length>0?
 <table style={{backgroundColor:'lightblue'}} className='text-white table '>
<tr >
  <th ><h6>#</h6></th>
  <th><h6>CapTion</h6></th>
  <th><h6>Url</h6></th>
  <th><h6>Date and Time</h6></th>
  <th><h6><i class="fa-solid fa-ellipsis-vertical"></i></h6></th>



</tr>




  <tbody>
{allhistory.map((a,index)=>(
  <tr className='text-black'>



<td>{index+1}</td>
<td>{a.caption}</td>
<td><a className=' text-white  ' href={a.youtubeurl}>{a.youtubeurl}</a></td>
<td>{a.time}</td>
<td><button  onClick={() => deletehist(a.id)} style={{backgroundColor:'black',border:'lightblue'}} ><i  className="fa-solid fa-trash  text-danger "></i></button></td>
</tr>
))}







</tbody>




  </table>
:
  <p className='text-danger'>No videos watched yet</p>

 }

   </div>
   
   
   </>
  )
}

export default History