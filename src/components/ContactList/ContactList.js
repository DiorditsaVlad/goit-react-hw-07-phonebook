import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/phonebook/phonebook-operations';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';

const ContactList = ({ contacts, handleClick, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <ul className="contact_list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contact_list_item">
          <p className="contact_name">
            {name}: {number}
          </p>
          <button
            className="contact_btn"
            type="button"
            onClick={() => handleClick(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  handleClick: id => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
  handleClick: PropTypes.func.isRequired,
  fetchContacts: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
