import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/phonebook-actions';

function ContactForm({ contacts, addToContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    submit({ name: name, number: number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className="inner_form">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleInputChange}
        />
        <button className="btn_form" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = state => ({
  contacts: state.contact,
});
const mapDispatchToProps = dispatch => ({
  addToContact: value => dispatch(actions.addToContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
