import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import ContactListItem from './ContactListItem/ContactListItem';
import { selectFilterValue, selectContacts } from '../../redux/selectors';

import { Heading } from '@chakra-ui/react';

import css from './ContactList.module.css';

export default function ContactList() {
  const { contacts } = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  const contactListItem = contacts
    .filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase()))
    .map(item => (
      <ContactListItem
        id={item.id}
        name={item.name}
        phone={item.phone}
        key={item.id}
      />
    ));

  return (
    <>
      <Heading as="h2" size="md" color="#2196f3">
        Contacts
      </Heading>
      <ul className={css.contactList}>{contactListItem}</ul>
    </>
  );
}
