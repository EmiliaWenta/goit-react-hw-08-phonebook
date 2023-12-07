import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/reducers/contacts/operations';

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
  Button,
  Card,
  CardBody,
  Text,
} from '@chakra-ui/react';
import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem key={id.toString()} width="450px" align="flex-start">
      <Card>
        <CardBody>
          <Flex gap="10px" justifyContent="space-between" alignItems="center">
            <ListIcon as={PhoneIcon} color="blue.500" />
            {name}: {number}
            <Button
              leftIcon={<DeleteIcon />}
              colorScheme="teal"
              variant="solid"
              type="button"
              bg="#2196f3"
              color="white"
              size="sm"
              _hover={{ bg: 'darkblue' }}
              _active={{ bg: 'darkblue' }}
              onClick={() => {
                handleRemove(id);
              }}
            >
              Delete
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
