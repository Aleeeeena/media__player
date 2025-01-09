import axios from "axios"
const commonAPI=async(http,url,reqbody)=>{
    const reqconfig={


        method:http,
        url,
        data:reqbody
    }
  return await  axios(reqconfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonAPI