import React, { useState } from "react";

const FilteredItems = ({ filteredData }) => {
  return (
    <div>
      {Object.keys(filteredData).map((key) => (
        <div key={key}>
          <h3>{key}</h3>
          <ul>
            {filteredData[key].map((value, index) => (
              <li key={`${key}-${index}`}>{value}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const AssemblyList = ({ stages }) => {
  const [step, setStep] = useState({
    idea: [],
    development: [],
    testing: [],
    deployment: [],
  });

  const [newItem, setNewItem] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState({});

  const changeText = (e) => {
    setNewItem(e.target.value);
  };

  const addToIdea = () => {
    if (newItem.trim() !== "") {
      setStep((prevStep) => {
        const copyItem = prevStep.idea.slice();
        copyItem.unshift(newItem);
        return { ...prevStep, idea: copyItem };
      });
      setNewItem("");
      setFilteredData({});
    }
  };

  const shiftItem = (field, item) => {
    setStep((prevStep) => {
      const currFieldIndex = stages.indexOf(field);

      if (currFieldIndex === stages.length - 1) {
        const newFieldItems = prevStep[field].filter((i) => i !== item);
        return { ...prevStep, [field]: newFieldItems };
      } else {
        const nextField = stages[currFieldIndex + 1];
        const copyCurrentFieldItems = prevStep[field].slice();
        const indexOfItem = copyCurrentFieldItems.indexOf(item);
        if (indexOfItem !== -1) {
          const itemToMove = copyCurrentFieldItems.splice(indexOfItem, 1)[0];
          return {
            ...prevStep,
            [field]: copyCurrentFieldItems,
            [nextField]: [itemToMove, ...prevStep[nextField]],
          };
        }
      }
    });
  };

  const handleSearch = () => {
    if (searchText.trim() === "") {
        setFilteredData({});
      } else {
        const newFilteredData = {};
    
        for (const key in step) {
          const filteredValues = step[key].filter(
            (value) => value.toLowerCase().includes(searchText.toLowerCase())
          );
          if (filteredValues.length > 0) {
            newFilteredData[key] = filteredValues;
          }
        }
    
        setFilteredData(newFilteredData);
      }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter your search text"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {Object.keys(filteredData).length > 0 ? (
          <FilteredItems filteredData={filteredData} />
        ) : (
          stages.map((items) => (
            <div key={items}>
              <h2>{items}</h2>
              <ul>
                {step[items].map((item, index) => (
                  <li key={index} onClick={() => shiftItem(items, item)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>

      <input type="text" value={newItem} onChange={changeText}></input>
      <button onClick={addToIdea}>Add to Idea</button>
    </>
  );
};

export default AssemblyList;
