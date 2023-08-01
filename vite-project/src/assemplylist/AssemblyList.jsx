import React , {useState} from 'react';

const AssemblyList = ({stages}) =>{

    const [step, setStep] = useState({
        idea: [],
        development : [],
        testing : [],
        deployment :[]
    })


    const [newItem, setNewItem] = useState('');

    const changeText = (e) =>{
        setNewItem(e.target.value);
    }

    const addToIdea = () => {
        if(newItem.trim() != ''){
            setStep((prevStep) => {
                const copyItem = prevStep.idea.slice();
                copyItem.unshift(newItem);
                return {...prevStep, idea : copyItem}
               });
        }
       setNewItem('');
    }

    const shiftItem = (field ,item ) => {
      setStep((prevStep => {
        const currFieldIndex = stages.indexOf(field);

        if(currFieldIndex === stages.length-1){
            const newFieldItems = prevStep[field].filter((i) => i!= item);
            return {...prevStep, [field] : newFieldItems};
        } 

        else{
            const nextField =  stages[currFieldIndex+1];
            const copyItem = prevStep[nextField].slice();
            copyItem.unshift(item);
            return {
                ...prevStep,
                [field] : prevStep[field].filter((i) => i!=item),
                [nextField] : copyItem
            };

        }
      }))
    }

    return (
        <>
       
        <div>
         {
            stages.map((items) => (
                <div key={items}>
                <h2>{items}</h2>
                <ul> {
                    
                    step[items].map((item,index) => (
                        <li key= {index} onClick = {()=> shiftItem(items,item)}> {item} </li>
                       
                    
                    ))
                    
                    }


                </ul>
                </div>
            ))
         }

        </div>



        
        <input type='text' value = {newItem} onChange={changeText}></input>
        <button onClick = {addToIdea}>Add to Idea</button>
        </>
    )
}

export default AssemblyList;
