import  { useState } from 'react';
import axios from 'axios';
import "./Registration.css"
const url = "http://localhost:5000/userData";
export const Registration = () => {
    
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        isSeller: false
    });
    const createPost = async (userData) => {
      try {
          await axios.post(url, userData);
          alert("User added successfully!");
      } catch (error) {
          if (error.response && error.response.status === 400 && error.response.data.error === 'Username or email already exists') {
              alert("Username or email already exists");
          } else {
              console.log(error);
              alert("An error occurred while adding the user, try different username or email");
          }
      }
  };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRadioChange = (e) => {
        setFormData({
            ...formData,
            isSeller: e.target.value === 'true'
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(formData)
        console.log(formData);
        // You can add your form submission logic here
    };

    return (
        <div className='form-div'>
          <form className="registration-form" onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Are you a seller?
                <br />
                <input
                    type="radio"
                    name="isSeller"
                    value="true"
                    checked={formData.isSeller === true}
                    onChange={handleRadioChange}
                /> Yes
                <br />
                <input
                    type="radio"
                    name="isSeller"
                    value="false"
                    checked={formData.isSeller === false}
                    onChange={handleRadioChange}
                /> No
            </label>
            <br />
            <button className='registration-button' type="submit">Submit</button>
            
        </form>
        </div>
    );
};


