import { useSelector } from 'react-redux';
import { selectisLoggedIn, selectUser } from 'redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  const user = useSelector(selectUser);

  return { isLoggedIn, user };
};
