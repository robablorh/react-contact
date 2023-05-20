import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Edit from "./Editcontact";

const Contactt = ({ contact, editDeata, deletData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [deletedCont, setDeletedCont] = useState(contact);

  const handleDelete = () => {
    deletData(deletedCont.id);
  };

  return (
    <div>
      <Card style={{ width: "13rem" }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Contact Details
          </Card.Subtitle>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Title>{contact.address}</Card.Title>
          <Card.Title>{contact.phone} </Card.Title>
          <Button variant="primary" size="sm" onClick={handleShow}>
            Edit
          </Button>
          &nbsp;
          <Button size="sm" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Editcontact
            contact={contact}
            editDeata={editDeata}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Contactt;
