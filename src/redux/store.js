import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './reducers/contacts/filterSlice';
import { contactReducer } from './reducers/contacts/contactSlice';
import { authReducer } from './reducers/auth/authSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
