import React from 'react';
// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Loader from '../Loader/Loader';

import { StyledHeader, StyledLink } from './Layout.styled';
import { useAuth } from 'hook/useAuth';

const AuthenticatedNav = () => (
  <>
    <StyledLink to="contacts">Contacts</StyledLink>
    <button>LogOut</button>
  </>
);
const UnAuthenticatedNav = () => (
  <>
    <StyledLink to="register">Register</StyledLink>
    <StyledLink to="login">Login</StyledLink>
  </>
);

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
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
