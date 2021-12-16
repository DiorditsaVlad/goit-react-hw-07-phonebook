import { createAction } from '@reduxjs/toolkit';

const addToContact = createAction('contact/Submit');

const deleteContact = createAction('contact/Delete');

const filterContact = createAction('contact/inputChange');

const actions = { addToContact, deleteContact, filterContact };
export default actions;
