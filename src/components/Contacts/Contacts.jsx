import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/auth/operations';
import { Button } from '@chakra-ui/react';
import ContactList from '../ContactList/ContactList';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import { fetchContacts } from '../../redux/reducers/contacts/operations';
import React, { useEffect } from 'react';

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
