import React from 'react'

export default function Contacts(props) {
    return (
        <div>
          {props.contacts.map((contact, index) => (
            <div key={index}>
              <p>Name: {contact.name}</p>
              <p>Email: {contact.phonenumber}</p>
              <p>Gen: {contact.location}</p>
            </div>
          ))}
        </div>
      );
}
