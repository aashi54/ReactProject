import React, { useState } from 'react';

const data = {
  fruits: ["apple", "banana", "orange"],
  animals: ["cat", "blue", "elephant"],
  colors: ["red", "blue", "blue"]
};

const FilteredItems = ({ filteredData }) => {
  return (
    <div>
      {Object.keys(filteredData).map((key) => (
        <div key={key}>
          <h3>{key}</h3>
          <ul>
            {filteredData[key].map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const newFilteredData = {};

    for (const key in data) {
      const filteredValues = data[key].filter((value) =>
        value.toLowerCase().includes(searchText.toLowerCase())
      );
      if (filteredValues.length > 0) {
        newFilteredData[key] = filteredValues;
      }
    }

    setFilteredData(newFilteredData);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Enter your search text"
      />
      <button onClick={handleSearch}>Search</button>

      <FilteredItems filteredData={filteredData} />
    </div>
  );
};

export default SearchComponent;
