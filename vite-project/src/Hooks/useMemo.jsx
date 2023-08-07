/*

useMemo is a React hook that is used to optimize the performance of functional components by memoizing
 the result of a computation. It is primarily used to prevent unnecessary recalculations of expensive 
 operations that don't need to be re-executed every time a component renders.


 Use useEffect when you need to manage side effects, perform actions after rendering, or set up and 
 clean up resources. It's not primarily about optimizing calculations or rendering.
Use useMemo when you want to optimize expensive calculations by memoizing the result and 
reusing it across renders, thus preventing unnecessary recalculations.


 */

 import React, { useState, useMemo } from 'react';

function CalculationExample() {
  const [numberA, setNumberA] = useState(5);
  const [numberB, setNumberB] = useState(10);

  // Calculate the sum of numberA and numberB using useMemo
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numberA + numberB;
  }, [numberA, numberB]);



  return (
    <div>
      <h1>Calculation Example</h1>
      <div>
        <label>Number A:</label>
        <input
          type="number"
          value={numberA}
          onChange={(e) => setNumberA(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Number B:</label>
        <input
          type="number"
          value={numberB}
          onChange={(e) => setNumberB(parseInt(e.target.value))}
        />
      </div>
      <div>
        <p>Sum of {numberA} and {numberB}: {sum}</p>
      </div>
      <button>Click</button>
    </div>
  );
}

export default CalculationExample;
