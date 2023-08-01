import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onAddData, tableData }) => {
  const [showForm, setShowForm] = useState(false);
  const [showbtn1, setShowbtn1] = useState(true);
  const [formData, setFormData] = useState({

    
    name: '',
    branch: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
   
    // setErrors((prevErrors) => ({
    //   ...prevErrors,
    //   [name]: '',
    // }));
  
  };

  const handleSubmit = () => {
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required.';
    }
    if (!formData.branch.trim()) {
      validationErrors.branch = 'Branch is required.';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required.';
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = 'Invalid email format.';
    } else if (tableData.some((item) => item.email === formData.email)) {
      validationErrors.email = 'Email already exists';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAddData(formData);
    setShowForm(false);
    setShowbtn1(true);
    setFormData({
      name: '',
      branch: '',
      email: '',
    });
    setErrors({});
  };

  const show = () => {
    setShowForm(true);
    setShowbtn1(false);
  };

  
  const isValidEmail = (email) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <nav>
        <h1>College Data</h1>
        {showbtn1 && <button className="btn1" onClick={show}>Create</button>}

        {showForm && (
          <div className="input-container">
             <div className='try'> 
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
           
            {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            <div className='try'> 
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              value={formData.branch}
              onChange={handleInputChange}
            />
            {errors.branch && <div className="error-message">{errors.branch}</div>}
            </div>
            <div className='try'> 
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <button className="btn1" onClick={handleSubmit}>Add</button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
