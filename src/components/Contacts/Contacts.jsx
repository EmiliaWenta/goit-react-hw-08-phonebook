import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/auth/operations';
import { Button } from '@chakra-ui/react';
import ContactList from '../ContactList/ContactList';

export default function Contacts() {
  return (
    <>
      <ContactList />
      <div>Contacts</div>
    </>
  );
}
