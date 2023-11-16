import React, { useState } from 'react';
import './MyForm.css';

const MyForm= () => {
  
  const [formData, setFormData] = useState({
    Name: '',
    breed: '',
    gen: '',
    des: '',
    tel: '',
    loc: '',
    pin: '',
    file:'',
  });

  
  const [formErrors, setFormErrors] = useState({
    Name: '',
    breed: '',
    gen: '',
    des: '',
    tel: '',
    loc: '',
    pin: '',
    file:'',
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors.');
    }
  };

  
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    
    if (formData.Name.trim() === '') {
      newErrors.Name = '*Name is required*';
      isValid = false;
    } else {
      newErrors.Name = '';
    }

    
    if (formData.breed.trim() === '') {
      newErrors.breed = '*Breed is required*';
      isValid = false;
    } else {
      newErrors.breed = '';
    }

    if (formData.des.trim() === '') {
      newErrors.des= '*Description is required*';
      isValid = false;
    } else {
      newErrors.des = '';
    }

    const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
    if (!phoneRegex.test(formData.tel)) {
      newErrors.tel = '*Invalid telephone number*';
      isValid = false;
    } else {
      newErrors.tel = '';
    }

    if (formData.loc.trim() === '') {
      newErrors.loc = '*Location is required*';
      isValid = false;
    } else {
      newErrors.loc = '';
    }

    if (formData.breed.trim() === '') {
      newErrors.pin = '*pincode is required*';
      isValid = false;
    } else {
      newErrors.pin = '';
    }

    if (!formData.file) {
      newErrors.file = '*File is required*';
      isValid = false;
    } else {
      newErrors.file = '';
    }
   
    setFormErrors(newErrors);
    return isValid;
  };

  return (
    <div class="container">
    <div><h1>Lost Pet Details </h1></div>
    <div class="form-outer">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Name">Pet Name:</label>
        <input
          type="text"
          id="Name"
          name="Name"
          value={formData.Name}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.Name}</span>
      </div>

      <div>
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.breed}</span>
      </div>

      <div>
              <label htmlFor="gen">Gender:</label>
              <select
                id="gen" 
                name="gen"
                value={formData.gen}
                onChange={handleInputChange}
                required
              >
                <option value="Select">
                  --Select--
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <span className="error">{formErrors.gen}</span>
            </div>

         <div>
          <label htmlFor="des">Description:</label>
          <textarea
          id="des"
          name="des"
          value={formData.des}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.des}</span>
      </div>

      <div>
        <label htmlFor="loc">Last seen Location:</label>
        <textarea
          id="loc"
          name="loc"
          value={formData.loc}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.loc}</span>
      </div>

      <div>
          <label htmlFor="tel">Contact Information 'phone number':</label>
          <input
          type="text"
          id="tel"
          name="tel"
          value={formData.tel}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.tel}</span>
      </div>

      <div>
        <label htmlFor="pin">Pincode:</label>
        <input
          type="text"
          id="pin"
          name="pin"
          value={formData.pin}
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.pin}</span>
      </div>

      <div>
        <label htmlFor="file">File:</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleInputChange}
        />
        <span className="error">{formErrors.file}</span>
      </div>

      <button type="submit">Submit </button>
    </form>
    </div>
    </div>
  );
};

export default MyForm;
