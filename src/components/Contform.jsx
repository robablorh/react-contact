
import React from 'react'
import { useState } from 'react';
import {v4 as uuid} from 'uuid'

const Contform = ({ getData }) => {
  const [data, setData] = useState({
    name: "",
    address: "",
    phone: "",
    id: uuid()
  });

  
  
  const handleChange = (e) =>{
    e.preventDefault()
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getData(data)
    e.target.reset()
  }
  
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contact Name</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Addres</label>
          <input type="text" name="address" onChange={handleChange} />
        </div>
        <div>
          <label>Phone </label>
          <input type="text" name="phone" onChange={handleChange} />
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contform
