import React from 'react'
import Contactt from './Contactt'
import {Row, Col} from 'react-bootstrap'

const Contacts = ({ contacts, editDeata, deletData }) => {
  return (
    <div>
      <Row>
        {contacts.map((contact, index) => {
          return (
            <Col key={index}>
              <Contactt
                contact={contact}
                editDeata={editDeata}
                deletData={deletData}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Contacts
