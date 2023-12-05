import React from 'react';
// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
// import { StyledHeader, StyledLink } from './Layout.styled';
import { useAuth } from 'hook/useAuth';
import { logout } from '../../redux/reducers/auth/operations';
import { useDispatch } from 'react-redux';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ThemeToggler from '../ThemeToggler';

import {
  Flex,
  HStack,
  Spacer,
  Button,
  Tag,
  TagLabel,
  Avatar,
  AiOutlineUser,
} from '@chakra-ui/react';
import { Box, Stack, Grid, Wrap, AspectRatio } from '@chakra-ui/layout';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from '../../redux/selectors';

const AuthenticatedNav = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const hanldeClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <Tab>
        <Link to="contacts">Contacts</Link>
      </Tab>

      <Tag size="md" colorScheme="blue" borderRadius="full">
        <Avatar
          bg="blue.500"
          src="https://bit.ly/broken-link"
          size="md"
          ml={-2}
          mr={2}
        />
        <TagLabel>{user}</TagLabel>
      </Tag>

      <Button
        type="submit"
        bg="#2196f3"
        color="white"
        size="md"
        _hover={{ bg: 'darkblue' }}
        _active={{ bg: 'darkblue' }}
        onClick={hanldeClick}
      >
        Logout
      </Button>
    </>
  );
};
const UnAuthenticatedNav = () => (
  <>
    <Tab>
      <Link to="register">Register</Link>
    </Tab>
    <Tab>
      <Link to="login">Login</Link>
    </Tab>
  </>
);

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Tabs isLazy>
        <TabList gap="15">
          <Tab>
            <Link to="/">Home</Link>
          </Tab>

          {isLoggedIn ? <AuthenticatedNav /> : <UnAuthenticatedNav />}
        </TabList>

        <TabPanels>
          <Outlet />
        </TabPanels>
      </Tabs>
      <ThemeToggler />
      {/* <Suspense fallback={<Loader />}>
        // 
      </Suspense> */}
    </>
  );
};
