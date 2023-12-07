import {
  CheckIcon,
  EditIcon,
  SearchIcon,
  DeleteIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        alignItems="center"
        variant="outline"
        padding="20px"
      >
        <CheckIcon />

        <Stack>
          <CardBody>
            <Heading size="md">
              Introducing "PhoneBookSave" – Your Ultimate Contact App!
            </Heading>

            <Text py="2">
              Tired of losing track of important contacts? Meet PhoneBookSave,
              the innovative app designed to revolutionize how you organize your
              contacts effortlessly.
            </Text>
          </CardBody>
        </Stack>
      </Card>
      <SimpleGrid
        spacing={4}
        paddingTop="15px"
        justify="center"
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        <Card>
          <CardHeader>
            <Heading size="md"> Intuitive Interface:</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Streamlined design for seamless navigation and user-friendly
              experience.
            </Text>
          </CardBody>
          <CardFooter justifyContent="center">
            <EditIcon />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Quick Search:</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Find any contact in seconds with our powerful search feature. No
              more scrolling endlessly.
            </Text>
          </CardBody>
          <CardFooter justifyContent="center">
            <SearchIcon />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Easy Deletion: </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Need to declutter your contacts? PhoneBookSave makes it a breeze
              to remove unwanted entries. Just a one taps, and you're done!
            </Text>
          </CardBody>
          <CardFooter justifyContent="center">
            <DeleteIcon />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">24/7 Accessibility: </Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Whether you're at work, home, or on the go, ConnectSave is at your
              fingertips. Access your contacts anytime, anywhere our app is
              designed to keep you connected on your terms.
            </Text>
          </CardBody>
          <CardFooter justifyContent="center">
            <PhoneIcon />
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
}
