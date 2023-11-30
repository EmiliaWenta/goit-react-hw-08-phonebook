import React from 'react';
// import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Routes, Route } from 'react-router-dom';

// import Form from './Form/Form';
// import Filter from './Filter/Filter';
// import Loader from './Loader/Loader';
// // import ContactList from './ContactList/ContactList';
// import { selectContacts } from '../redux/selectors';
// import { fetchContacts } from '../redux/operations';
import { Layout } from './Layout/Layout';
import Register from './Register/Register';
import Login from './Login/Login';
import Contacts from './Contacts/Contacts';
import Home from '../Pages/Home';

import { StyledContainer } from './App.styled';

// const Home = lazy(() => import('../pages/Home'));

export function App() {
  // const { isLoading, error } = useSelector(selectContacts);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // if (error) {
  //   Notify.failure(`${error}`);
  //   return <h1>Something went wrong, please try reloading page...</h1>;
  // }

  return (
    <StyledContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
          <Route />
        </Route>

        {/* <Form />
        <Filter />
        <ContactList /> */}
        {/* {isLoading && <Loader />} */}
      </Routes>
    </StyledContainer>
  );
}
