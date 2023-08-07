/*

 fetch("url").then((res)=>{
    return res.json();
 }).then((data)=>{
    console.log(data)
 }).catch((error)=>{
    console.log("can't fatch data")
 })


 fetch is a built-in web API in modern browsers that provides an easy way to make network requests,
  typically for fetching resources like data from a server. 
 It returns a Promise that resolves to the Response object representing the response to the request.



*/

import react, { useEffect, useState } from 'react';

const Api = ()=>{

    const [data, setData] = useState(null)

    useEffect(()=>{
      
       async function dataFetch(){
        try{
            const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            const res = await data.json();
            setData(res);

        } catch(error){ 
            console.log("error",error)

        }
        
       }
       dataFetch();
    },[])


    return(
        <>
         <h2>{data?.title}</h2>
         <p>{data?.body}</p>
        </>
    )
}

export default Api;