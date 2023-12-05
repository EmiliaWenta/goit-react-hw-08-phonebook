import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/auth/operations';
import { Button } from '@chakra-ui/react';
import ContactList from '../ContactList/ContactList';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';

export default function Contacts() {
  return (
    <>
      <Form />
      <Filter />
      <ContactList />
    </>
  );
}
