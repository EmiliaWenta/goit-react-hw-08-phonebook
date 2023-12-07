import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import ContactListItem from './ContactListItem/ContactListItem';
import { selectFilterValue, selectContacts } from '../../redux/selectors';

import {
  Box,
  Flex,
  Heading,
  Input,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
} from '@chakra-ui/react';

export default function ContactList() {
  const { contacts } = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  const contactsValue = contacts.length;

  const contactListItem = contacts
    .filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase()))
    .map(item => (
      <ContactListItem
        id={item.id}
        name={item.name}
        number={item.number}
        key={item.id}
      />
    ));

  return (
    <>
      <Box>
        <Flex
          flexDirection="column"
          gap="10px"
          justify="center"
          align="center"
          paddingTop="30px"
        >
          <Heading as="h2" size="md" color="#2196f3">
            Your contacts:
          </Heading>
          {contactsValue === 0 && <Text>You don't saved contacts yet.</Text>}
          <List spacing={3}>{contactListItem}</List>
        </Flex>
      </Box>
    </>
  );
}
