import { StyledContainer } from './App.styled';

import { useDispatch } from 'react-redux';
import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { Layout } from './Layout/Layout';
import Loader from '../components/Loader/Loader';
import { selectLoaderAuth } from 'redux/selectors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { currentUser } from '../redux/reducers/auth/operations';

const Home = lazy(() => import('../components/Home/Home'));
const Register = lazy(() => import('../components/Register/Register'));
const Login = lazy(() => import('../components/Login/Login'));
const Contacts = lazy(() => import('../components/Contacts/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const isLoadingAuth = useSelector(selectLoaderAuth);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  if (isLoadingAuth) {
    return <Loader />;
  }
  return (
    <>
      <StyledContainer>
        <Routes>
          <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
            <Route index element={<Home />} />

            <Route
              path="login"
              element={
                <ProtectedRoute
                  element={<Login />}
                  redirect="/goit-react-hw-08-phonebook/contacts"
                />
              }
            />
            <Route
              path="register"
              element={
                <ProtectedRoute
                  element={<Register />}
                  redirect="/goit-react-hw-08-phonebook/contacts"
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  element={<Contacts />}
                  redirect="/goit-react-hw-08-phonebook/login"
                />
              }
            />
            <Route />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </StyledContainer>
    </>
  );
}
