import { createContext, useContext, useEffect, ReactNode, useReducer } from 'react';


interface Contact{
    id: string
    firstName: string;
    lastName: string;
    age: number;
}
interface ContactContextProps {
    contacts: Contact[];
    addContact: (contact: Contact) => void;
    deleteContact: (id: string) => void;
}

const ContactsContext = createContext<ContactContextProps | undefined>(undefined);

const contactReducer = (state : Contact[], action: any)=>{
    switch(action.type){
        case "FETCH_CONTACT":
         return action.payload
        case "ADD_CONTACT":
         return [...state,action.payload];
        case "DELETE_CONTACT":
         return state.filter(state => state.id !== action.payload);
        default:
         return state;
    }
}

export const contactsProvider=({ children }: { children: ReactNode })=> {
    const [contacts, dispatch] = useReducer(contactReducer, []);

    const fetchContact = async () => {
        try {
          const response = await fetch('/contacts.json'); // Fetch from JSON or API
          if (!response.ok) {
            throw new Error('Failed to fetch contacts');
          }
          const data: Contact[] = await response.json();
          dispatch({ type: 'FETCH_CONTACT', payload: data });
        } catch (error) {
          console.error('Error fetching contacts:', error);
        }
      };
    
    const addContact = (contact: Contact) => {
        dispatch({ type: "ADD_CONTACT", payload: contact });
    };
    
    const deleteContact = (id: string) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    };

    useEffect(()=>{
        fetchContact();
    },[]);


    return (
    <ContactsContext.Provider value={{ contacts, addContact, deleteContact }}>
        { children }
    </ContactsContext.Provider>
    )
}


export const useContacts = () => {
    const context = useContext(ContactsContext);
    if (!context) {
      throw new Error('useContacts must be used within a contactsProvider');
    }
    return context;
  };