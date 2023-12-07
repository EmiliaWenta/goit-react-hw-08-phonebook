import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { fetchContacts } from '../../redux/reducers/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Form />
      <Filter />
      <ContactList />
    </>
  );
}
