import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/auth/operations';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export default function Login() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      login({
        email,
        password,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="text"
          name="email"
          placeholder="Enter Your email"
          title="email must contain @"
          required
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          placeholder="Enter Your passsword"
          minLength="8"
          required
        />
      </label>
      <label>
        <button type="submit">Login</button>
      </label>
    </form>
  );
}
