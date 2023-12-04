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

import { Flex, HStack, Spacer, Button } from '@chakra-ui/react';
import { Box, Stack, Grid, Wrap, AspectRatio } from '@chakra-ui/layout';

const AuthenticatedNav = () => {
  const dispatch = useDispatch();
  const hanldeClick = () => {
    dispatch(logout());
  };

  return (
    <Tab>
      <Link to="contacts">Contacts</Link>

      {/* <button onClick={hanldeClick}>Logout</button> */}
    </Tab>
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
        <TabList>
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
