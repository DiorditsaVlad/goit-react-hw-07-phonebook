import { connect } from 'react-redux';
import actions from './redux/phonebook/phonebook-actions';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

function App({
  contacts,
  inputValue,
  addToContact,
  deleteContact,
  filterContact,
}) {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const localState = JSON.parse(localStorage.getItem('Contacts'));
  //   if (localState) {
  //     setContacts(localState);
  //   } else {
  //     return;
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('Contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = contactId => {
  //   setContacts(contacts =>
  //     contacts.filter(contact => contact.id !== contactId),
  //   );
  // };

  const submit = data => {
    const newContact = { ...data, id: uuidv4() };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase(),
      )
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      addToContact(newContact);
    }
  };

  // const filterContact = e => {
  //   const { value } = e.currentTarget;
  //   setFilter(value);
  // };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={submit} />
      <h2>Contacts</h2>
      <Filter filter={inputValue} filterContact={filterContact} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
const mapStateToProps = state => ({
  contacts: state.contact,
  inputValue: state.inputValue,
});
const mapDispatchToProps = dispatch => ({
  addToContact: value => dispatch(actions.addToContact(value)),
  deleteContact: id => dispatch(actions.deleteContact(id)),
  filterContact: event =>
    dispatch(actions.filterContact(event.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
