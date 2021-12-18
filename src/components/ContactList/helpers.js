const getVisibleContacts = (contacts, inputValue) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase()),
  );
};
export default getVisibleContacts;
