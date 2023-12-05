import React from 'react';
import { useDispatch } from 'react-redux';

import { filterContact } from '../../redux/reducers/contacts/filterSlice';

import { Box, Flex, Heading, Input } from '@chakra-ui/react';
import css from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const value = e.target.value;
    dispatch(filterContact(value));
  };

  return (
    <Box>
      <Flex flexDirection="column" gap="10px" justify="center" align="center">
        <Heading as="h3" size="md" color="#2196f3">
          Find contacts by name
        </Heading>
        <Input
          type="text"
          name="nametofilter"
          bg="white"
          borderColor="#d8dee4"
          size="md"
          borderRadius="6px"
          width="50%"
          onChange={handleFilter}
        />
      </Flex>
    </Box>
  );
}
