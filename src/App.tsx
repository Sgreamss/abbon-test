
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './i18n'

import Home from './pages/Home'
import ContactList from './pages/ContactList'
import ContactForm from './pages/ContactForm'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contactList' element={<ContactList />}/>
        <Route path='/contactForm' element={<ContactForm />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
