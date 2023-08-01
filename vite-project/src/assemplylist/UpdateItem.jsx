import React, { useState } from 'react';

const UpdateItem = () => {

    const [newItem, setNewItem] = useState('');
    const [list, setList] = useState([]);

    const handleInput = (e) =>{
       setNewItem(e.target.value);
    }

    const addItem = () =>{
       if(newItem.trim()!=''){
        setList((prevList) => [...prevList, newItem] )
       }
      
       setNewItem('');
    };

    const deleteItem = (index) => {
        setList((prevList) => prevList.filter((_,i)=> i !== index));
   
    }
   
    return (
        <>
        <div>
            <h1>Item List</h1>
            <ul>

           
            {  
                list.map((items,index) => (
                    <li key= {index}>{items}
                    <br></br>
                    <button onClick = {()=> deleteItem(index)} >Delete item</button>
                    <br></br>
                    <br></br>
                    </li>
                  
                ))

               
            }
             </ul>

        </div>
       

        <input type='text' value = {newItem} onChange={handleInput}></input>
        <button onClick={addItem}> Add Items </button>
        
        </>
    )
}

export default UpdateItem;