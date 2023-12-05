import React from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/reducers/contacts/operations';

import { Heading } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';

import { ArrowForwardIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Stack,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from '@chakra-ui/react';

export default function Form() {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Box>
      <Flex
        flexDirection="column"
        justify="flex-start"
        align="center"
        gap="15px"
        padding="15px"
      >
        <Heading as="h1" size="lg" color="#2196f3">
          Phonebook
        </Heading>
        <Card
          variant="outline"
          borderColor="#d8dee4"
          w="400px"
          size="lg"
          borderRadius={8}
          boxShadow="lg"
        >
          <CardBody gap="10px">
            <form onSubmit={handleSubmit}>
              <Stack spacing="4">
                <FormControl isRequired>
                  <FormLabel size="md">Name</FormLabel>

                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <ArrowForwardIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      name="name"
                      placeholder="Enter Name"
                      type="text"
                      bg="white"
                      borderColor="#d8dee4"
                      size="md"
                      borderRadius="6px"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel size="md">Number</FormLabel>

                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <PhoneIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      name="number"
                      placeholder="Enter phone number"
                      type="tel"
                      bg="white"
                      borderColor="#d8dee4"
                      size="md"
                      borderRadius="6px"
                    />
                  </InputGroup>
                </FormControl>

                <Button
                  type="submit"
                  bg="#2196f3"
                  color="white"
                  size="sm"
                  _hover={{ bg: 'darkblue' }}
                  _active={{ bg: 'darkblue' }}
                >
                  Add contact
                </Button>
              </Stack>
            </form>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}
