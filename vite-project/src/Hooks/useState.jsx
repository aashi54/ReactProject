import react , {useState} from 'react';

const Hooks=()=>{
    const [inputValue, setInputValue] = useState('');

    const handleClick=()=>{
      console.log(inputValue)
    }

    return(
        <>
        <input value={inputValue} type='text' onChange={(e)=> setInputValue(e.target.value)}></input>
        <button onClick={handleClick} >Submit</button>
        </>
    )
}

export default Hooks;