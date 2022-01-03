import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from '../../redux/phonebook/phonebook-selectors';
import { addContact } from '../../redux/phonebook/phonebook-operations';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  ///////////////////
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();
  ///////////////////
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const nameInContact = name.toLowerCase().trim();
    const isInContact = contacts.find(
      cont => cont.name.toLowerCase().trim() === nameInContact,
    );
    if (isInContact) {
      alert(`${name} is already in contact`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className="inner_form">
      <form className="form" onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />

        <button className="btn_form" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
