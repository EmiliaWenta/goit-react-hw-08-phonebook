export const selectContacts = state => state.contact;
export const selectFilterValue = state => state.filter;
export const selectIsLoading = state => state.contact.isLoading;

export const selectisLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;
export const selectLoaderAuth = state => state.auth.isLoading;
export const selectLoaderContacts = state => state.contact.isLoading;

// if (error) {
//   Notify.failure(`${error}`);
//   return <h1>Something went wrong, please try reloading page...</h1>;
// }  const isLoadingContacts = useSelector(selectLoaderContacts);
//   const isLoadingAuth = useSelector(selectLoaderAuth);

// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { selectLoaderAuth, selectLoaderContacts } from 'redux/selectors';

// import Loader from '../Loader/Loader';

/* {isLoadingContacts && <Loader />} */
