import React, { useState, useEffect } from 'react';
import './Table.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Table = ({ data , onDeleteData }) => {
  const [tableData, setTableData] = useState([]);
  // const [deletedItems, setDeletedItems] = useState([]);
  const [editableRowIndex, setEditableRowIndex] = useState(null);
  const [editedData, setEditedData] = useState(data);

  // useEffect(() => {
  //   const filteredData = data.filter(item => !deletedItems.includes(item));
  //   setTableData(filteredData);
  // }, [data, deletedItems]);

  // const deleteItem = (index) => {
  //   setDeletedItems(prevDeletedItems => [...prevDeletedItems, tableData[index]]);
  //   setTableData((prevData) => {
  //     const newData = [...prevData];
  //     newData.splice(index, 1);
  //     return newData;
  //   });
  //   setEditedData({}); 
  //   setEditableRowIndex(null); 
  // };

  const [deldata, setDeldata] = useState('');

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const deleteItem = (index) => {
    setTableData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
    onDeleteData(index);
   
    // setEditedData({}); 
    // setEditableRowIndex(null); 
  };

  const handleEditClick = (index) => {
    if (editableRowIndex === null) {
      setEditedData(tableData[index]);
      setEditableRowIndex(index);
    } else if (editableRowIndex === index) {
      setTableData((prevData) =>
        prevData.map((item, idx) => (idx === index ? { ...item, ...editedData } : item))
      );
      setEditedData({});
      setEditableRowIndex(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevEditedData) => ({
      ...prevEditedData,
      [name]: value,
    }));
    setTableData((prevData) =>
      prevData.map((item, idx) => (idx === editableRowIndex ? { ...editedData, [name]: value } : item))
    );
  };


  return (
    <>
      <div className='table-info'>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Email id</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editableRowIndex === index ? (
                    <input
                      type="text"
                      name="name"
                      value={editedData.name || item.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td>
                  {editableRowIndex === index ? (
                    <input
                      type="text"
                      name="branch"
                      value={editedData.branch || item.branch}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.branch
                  )}
                </td>
                <td>
                  {editableRowIndex === index ? (
                    <input
                      type="text"
                      name="email"
                      value={editedData.email || item.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    item.email
                  )}
                </td>
                <td>
                  <div className='operations'>
                    {editableRowIndex === index ? (
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="edit-icon"
                        title="Save"
                        onClick={() => handleEditClick(index)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="edit-icon"
                        title="Edit"
                        onClick={() => handleEditClick(index)}
                      />
                    )}
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      className="delete-icon"
                      title="Delete"
                      onClick={() => deleteItem(index)}
                    />
                    {<FontAwesomeIcon icon={faArrowUp} className="move-up-icon" title="Move Up" />}
                    {<FontAwesomeIcon icon={faArrowDown} className="move-down-icon" title="Move Down" />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
