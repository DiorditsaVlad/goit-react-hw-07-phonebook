import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const contactReducer = createReducer([], {
  [actions.addToContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const inputValueReducer = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  contact: contactReducer,
  inputValue: inputValueReducer,
});
