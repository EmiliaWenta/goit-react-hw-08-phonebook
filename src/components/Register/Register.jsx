import { useDispatch } from 'react-redux';
import { register } from '../../redux/reducers/auth/operations';

export default function Register() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );

    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter Your name..."
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
