
/*

Referring to DOM Elements:
Storing Previous Values:
Avoiding Re-renders:
Caching Expensive Computations:
Managing Uncontrolled Components:
*/

// import React, { useState, useEffect, useRef } from 'react';

// const MyComponent=()=> {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef();

//   useEffect(() => {
//     prevCountRef.current = count;
//   });

//   const prevCount = prevCountRef.current;
//   console.log("render")

//   return (
//     <div>
//       <p>Current count: {count}</p>
//       <p>Previous count: {prevCount}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default MyComponent;




// import react, {useEffect, useRef} from 'react'


// const Hooks = () => {

//    const inputValue = useRef(0)

//    const handleClick =()=> {
//     // console.log(inputValue.current.value)
          
//      inputValue.current.focus();
//    }


//     return (
//         <>
        
//          <input ref={inputValue} type = 'text'></input>
//          <button onClick={handleClick}>Sumbit</button>


//         </>
//     )
// }

// export default Hooks