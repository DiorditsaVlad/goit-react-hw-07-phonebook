import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/phonebook-actions';
const Filter = ({ inputValue, filterContact }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        onChange={filterContact}
        value={inputValue}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const mapStateToProps = state => ({
  inputValue: state.inputValue,
});

const mapDispatchToProps = dispatch => ({
  filterContact: event =>
    dispatch(actions.filterContact(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
