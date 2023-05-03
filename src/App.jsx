import { useState } from 'react'
import Contacts from './components/Contacts'
import Contform from './components/Contform';


function App() {
  const [contacts, setContacts] = useState([
    {
       name : ' Roberta Ablorh',
       phonenumber : '0249222031' , 
       location : 'Spintex'
    },
   
  ])
     
  function addcontact(newcontact) {
    setContacts([...contacts, newcontact]);
  }

     return(
         <div>
         <h1>KINDLY FILL THE FORM BELOW </h1>
         
         <Contform  addcontact={addcontact} />

         <hr/>
      
          <h1>DATA COLLECTED</h1>


         <Contacts contacts={contacts}/>
         </div>
     ) 
    
      }
    
 

export default App
