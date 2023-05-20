import Contform from "./components/Contform";
import Contacts from "./components/Contacts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";


function App() {
  const [contact, setContact] = useState({
         users:  []
      })
      
      const getData = (gdata) =>{
        setContact({users:[...contact.users, gdata]})
      }

      const editDeata = (id, updatedData) => {
        setContact({
          users: contact.users.map((cont) => {
              return cont.id === id ? updatedData : cont
          })
        })
      }

      const deletData = (id) => {
        setContact({
          users: contact.users.filter((cont) =>  cont.id !== id)
        })
      }


      
  return (
    <Container>
      <Row>
        <Col md="3">
         <Contform  getData={getData}    />
          
        </Col>
        <Col>
          <Contacts
            contacts={contact.users}
            editDeata={editDeata}
            deletData={deletData}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
