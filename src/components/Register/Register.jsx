import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { ArrowForwardIcon, AtSignIcon, LockIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Stack,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from '@chakra-ui/react';

import { selectAuth } from '../../redux/selectors';
import { register } from '../../redux/reducers/auth/operations';

export default function Register() {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();

  const { error } = useSelector(selectAuth);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (error !== null) {
      return Notify.failure(
        `We're sorry, yor personal data are invalid. Please check and try again. ${error}`
      );
    }

    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    form.reset();
  };

  return (
    <Box>
      <Flex paddingTop="25px" justify="center" align="flex-start">
        <Card
          bg="#f6f8fa"
          variant="outline"
          borderColor="#d8dee4"
          w="400px"
          size="lg"
          borderRadius={8}
          boxShadow="lg"
        >
          <CardBody>
            <form onSubmit={handleSubmit}>
              <Stack spacing="4">
                <FormControl isRequired>
                  <FormLabel
                    size="md"
                    color={colorMode === 'dark' ? 'black' : 'black'}
                  >
                    Name
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <ArrowForwardIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      name="name"
                      placeholder="Enter Your Name"
                      type="text"
                      bg="white"
                      borderColor="#d8dee4"
                      size="md"
                      borderRadius="6px"
                      color={colorMode === 'dark' ? 'black' : 'black'}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    size="md"
                    color={colorMode === 'dark' ? 'black' : 'black'}
                  >
                    Email
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <AtSignIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      color={colorMode === 'dark' ? 'black' : 'black'}
                      name="email"
                      placeholder="Enter Your Email"
                      type="email"
                      bg="white"
                      borderColor="#d8dee4"
                      size="md"
                      borderRadius="6px"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    size="md"
                    color={colorMode === 'dark' ? 'black' : 'black'}
                  >
                    Password
                  </FormLabel>

                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <LockIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      type="password"
                      bg="white"
                      borderColor="#d8dee4"
                      size="md"
                      borderRadius="6px"
                      name="password"
                      minLength="8"
                      placeholder="Enter Your password"
                      color={colorMode === 'dark' ? 'black' : 'black'}
                    />
                  </InputGroup>
                </FormControl>

                <Button
                  type="submit"
                  bg="#2da44e"
                  color="white"
                  size="sm"
                  _hover={{ bg: '#2c974b' }}
                  _active={{ bg: '#298e46' }}
                >
                  Reggister
                </Button>
              </Stack>
            </form>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}
