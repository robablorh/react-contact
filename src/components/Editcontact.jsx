import React from 'react'
import { useState } from 'react';


const Editcontact = ({contact, editDeata , handleClose}) => {

  const [editedData, setEditedData] = useState(contact);
  
  const handleChange = (e) => {
    e.preventDefault()
    setEditedData({ ...editedData, [e.target.name]:e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, address, phone, id } = editedData;
    const newContact = { name, address, phone, id };
    editDeata(id, newContact);
    handleClose()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Contact Name</label> <br />
          <input type="text" name="name" value={editedData.name}  onChange={handleChange}/>
        </div>
        <br />
        <div>
          <label>Addres</label> <br />
          <input type="text" name="address" value={editedData.address} onChange={handleChange}/>
        </div>
        <br />
        <div>
          <label>Phone </label> <br />
          <input type="text" name="phone" value={editedData.phone} onChange={handleChange}/>
        </div>
        <br />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Editcontact
