import React, {useState, useEffect} from 'react';

const Datafetcher = () =>{
  const [data, setData] = useState([]);

  useEffect(()=>{

    
      const fetched = async () => {
     try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
    
        setData(data);

    } catch(error){
      console.error('eroor...', error);
    } 
    }

    fetched();


  },[])

  return (
    <>
    <h1>Fetched data</h1>
    <div>

    </div>
    <ul>
      {data.map((item)=>(
        <>
        <h3>{item.id}</h3>
        <li>{item.title}</li>
        </>
      ))}
    </ul>
    </>
  )
}

export default Datafetcher;