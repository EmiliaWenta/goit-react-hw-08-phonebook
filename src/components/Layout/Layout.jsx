import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

import { useAuth } from 'hook/useAuth';
import { logout } from '../../redux/reducers/auth/operations';
import { useDispatch } from 'react-redux';

import ThemeToggler from '../ThemeToggler';
import { selectLoaderAuth } from 'redux/selectors';

import { Button, Tag, TagLabel, Avatar } from '@chakra-ui/react';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from '../../redux/selectors';
import { StyledLayout, StyledLink } from './Layout.styled';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const AuthenticatedNav = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const hanldeClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <StyledLink to="/">Home</StyledLink>

      <StyledLink to="contacts">Contacts</StyledLink>

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
        leftIcon={<ArrowForwardIcon />}
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
    <StyledLink to="/">Home</StyledLink>

    <StyledLink to="register">Register</StyledLink>

    <StyledLink to="login">Login</StyledLink>
  </>
);

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  const isLoadingAuth = useSelector(selectLoaderAuth);
  return (
    <>
      {isLoadingAuth && <Loader />}
      <StyledLayout>
        <nav>
          {isLoggedIn ? <AuthenticatedNav /> : <UnAuthenticatedNav />}
          <ThemeToggler />
        </nav>
      </StyledLayout>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
