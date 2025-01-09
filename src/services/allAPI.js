import commonAPI from "./commonAPI";
import server_url from "./server_url";


//api call for upload video
export const addvideoAPI=async(reqbody)=>{

  return await  commonAPI("POST",`${server_url}/allvideos`,reqbody)
}

//api call for get videos


export const getvideos= async()=>{
  return await   commonAPI("GET",`${server_url}/allvideos`,"")

}
//api call for delete videocard
export const deletevideo= async(videoid)=>{
  return await   commonAPI("DELETE",`${server_url}/allvideos/${videoid}`,{} )
}

//api call for save watch history
export const savehistoryAPI=async(historydetails)=>{

  return await  commonAPI("POST",`${server_url}/history`,historydetails)
}

//api call for getting histroy
export const gethistory= async()=>{
  return await   commonAPI("GET",`${server_url}/history`,"")

}

//api call for delete history


export const deletehistory= async(videoid)=>{
  return await   commonAPI("DELETE",`${server_url}/history/${videoid}`,{} )
}



//api call for adding categroy

export const addcategoryAPI=async(category)=>{

  return await  commonAPI("POST",`${server_url}/category`,category)
}
//api call for fetching category

export const fetchcategoryAPI= async()=>{
  return await   commonAPI("GET",`${server_url}/category`,"")

}

//api for deleting category
export const deletecategoryAPI= async(videoid)=>{
  return await   commonAPI("DELETE",`${server_url}/category/${videoid}`,{} )
}

//api call for getting the details of the vdio which is dragged 

export const fetchdraggedvdiodetailAPI= async(videoid)=>{
  return await   commonAPI("GET",`${server_url}/allvideos/${videoid}`,"")

}




//api call for updating category

export const updatecategoryAPI= async(catid,categorydetails)=>{
  return await   commonAPI("PUT",`${server_url}/category/${catid}`,categorydetails)

}

