import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

import { StyledHeader, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </nav>
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
