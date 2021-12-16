import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem('Contacts'));
    if (localState) {
      setContacts(localState);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const addToContact = data => {
    const newContact = { ...data, id: uuidv4() };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase(),
      )
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      setContacts(contacts => [...contacts, newContact]);
    }
  };

  const filterContact = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const getContacts = getVisibleContacts();

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addToContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} filterContact={filterContact} />
      <ContactList contacts={getContacts} onDeleteContact={deleteContact} />
    </div>
  );
}
