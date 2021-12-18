import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getVisibleContacts from './helpers';
import actions from '../../redux/phonebook/phonebook-actions';
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className="contact_list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contact_list_item">
          <p className="contact_name">
            {name}: {number}
          </p>
          <button className="contact_btn" onClick={() => deleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state.contact, state.inputValue),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
