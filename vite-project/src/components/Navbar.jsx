import react, {useState} from 'react'
import './Navbar.css'


const Navbar = ({onAddData})=>{


    const [showForm, setShowForm] = useState(false);
    const [showbtn1, setShowbtn1] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onAddData(formData);
    setShowForm(false); 
    setShowbtn1(true);
    setFormData({
      name: '',
      branch: '',
      email: '',
    });
  };

  const show=() =>{
    setShowForm(true);
    setShowbtn1(false);
  }

    return (
        <>
        <nav>
            
            <h1>College Data</h1>
            {showbtn1 && <button className='btn1' onClick = {show}>Create</button>}

            

            
            {showForm && (
        <div className='input-container'>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={formData.branch}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleInputChange}
          />
          <button className='btn1' onClick={handleSubmit}>Add</button>
          
        </div>
            )}

      
            

     
        </nav>
        </>
    )
}

export default Navbar;