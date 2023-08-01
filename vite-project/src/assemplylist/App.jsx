import React, { useState } from 'react';
import AssemblyList from './assemplylist/AssemblyList';

const App = () => {
  // const [stages,seStages] = useState(['idea', 'development', 'testing', 'deployment']);
  const stages = ['idea', 'development', 'testing', 'deployment'];

  return (
    <div>
      <AssemblyList stages={stages}/>
    </div>
  );
};

export default App;
