import React from 'react';
// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Loader from '../Loader/Loader';

import { StyledHeader, StyledLink } from './Layout.styled';
import { useAuth } from 'hook/useAuth';
import { logout } from '../../redux/reducers/auth/operations';
import { useDispatch } from 'react-redux';

const AuthenticatedNav = () => {
  const dispatch = useDispatch();
  const hanldeClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <StyledLink to="contacts">Contacts</StyledLink>
      <button onClick={hanldeClick}>Logout</button>
    </>
  );
};
const UnAuthenticatedNav = () => (
  <>
    <StyledLink to="register">Register</StyledLink>
    <StyledLink to="login">Login</StyledLink>
  </>
);

export const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <StyledHeader>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          {isLoggedIn ? <AuthenticatedNav /> : <UnAuthenticatedNav />}
        </nav>
      </StyledHeader>
      <Outlet />
      {/* <Suspense fallback={<Loader />}>
        // 
      </Suspense> */}
    </>
  );
};
