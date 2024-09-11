//import { useEffect, useState } from "react";
import FrontLayout from "../layouts/FrontLayout"
//import contactsList from '../contacts.json';

// interface Contact {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

 function ContactList() {
//   const [contacts,setContacts] = useState<Contact[]>([]);

//   useEffect( ()=>{
//     setContacts(contacts);
//   });

  return (
    <FrontLayout>
        <div>
            <h1 className="text-4xl font-bold text-center">Contact List</h1>
        </div>
    </FrontLayout>
  )
}

export default ContactList