import React, { useState } from 'react';

const AssemblyList = ({ stages }) => {
  const [step, setStep] = useState({
    idea: [],
    development: [],
    testing: [],
    deployment: []
  });

  const [newItem, setNewItem] = useState('');
  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [filteredField, setFilteredField] = useState('');

  const handleAddItem = (field, item) => {
    setStep((prevStep) => {
      const currentFieldIndex = stages.indexOf(field);
      if (currentFieldIndex === stages.length - 1) {
        const newFieldItems = prevStep[field].filter((i) => i !== item);
        return { ...prevStep, [field]: newFieldItems };
      } else {
        const nextField = stages[currentFieldIndex + 1];
        return {
          ...prevStep,
          [field]: prevStep[field].filter((i) => i !== item),
          [nextField]: [...prevStep[nextField], item]
        };
      }
    });
  };

  const handleAddToIdea = () => {
    if (newItem.trim() !== '') {
      setStep((prevStep) => ({
        ...prevStep,
        idea: [...prevStep.idea, newItem]
      }));
      setNewItem('');
    }
  };

  const handleSearch = () => {
    if (searchText.trim() === '') {
      setFilteredItems([]);
      setFilteredField('');
    } else {
      const allItems = Object.values(step).flat();
      const filteredItems = allItems.filter(
        (item) => item.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredItems(filteredItems);
      const allField = Object.keys(step);
      const filteredField = allField.filter(
        (item) => item.toLowerCase().includes(searchText)
      )
      setFilteredField(
        stages.find((field) => step[field].some((item) => item.toLowerCase() === searchText.toLowerCase()))
      );
    }
  };

  return (
    <div>
      {stages.map((stage) => (
        <div key={stage}>
          <h3>{stage}</h3>
          <ul>
            {filteredField === stage
              ? filteredItems.map((item, index) => (
                  <li key={index} onClick={() => handleAddItem(stage, item)}>
                    {item}
                  </li>
                ))
              : step[stage].map((item, index) => (
                  <li key={index} onClick={() => handleAddItem(stage, item)}>
                    {item}
                  </li>
                ))}
          </ul>
        </div>
      ))}
      <div>
        <input
          type="text"
          placeholder="Enter item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddToIdea}>Add to Idea</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search items"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default AssemblyList;
