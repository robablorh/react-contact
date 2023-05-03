import React, { useState } from 'react'


export default function Contform(props) {
    const [formdata, setFormdata] = useState({
      name: '',
      phonenumber: '',
      location: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormdata({ ...formdata, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.addcontact(formdata);
      setFormdata({
        name: '',
        phonenumber: '',
        location: '',
      });
    };
  
    return (
      <div className='all'>
        <form onSubmit={handleSubmit}>
          <div className='one'>
            <label>Name</label>
            <input type='text' name='name' value={formdata.name} onChange={handleInputChange} />
          </div>
  
          <div className='two'>
            <label>Phone Number</label>
            <input type='number' name='phonenumber' value={formdata.phonenumber} onChange={handleInputChange} />
          </div>
  
          <div className='three'>
            <label>Location</label>
            <input type='text' name='location' value={formdata.location} onChange={handleInputChange} />
          </div>
  
          <div className='four'>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }