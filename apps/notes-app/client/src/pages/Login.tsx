import { object, string } from 'yup'
import SignUpOrLogin from "../components/SignUpOrLogIn";
import path from '../routes/path';

const userProps = {
  username: "Email ID or Username or Mobile Number",
  password: "Password",
}

const userSchema = object({
  username: string().required(),
  password: string().required(),
})

const Login = () => {

  return (
    <div className="w-full pt-8 flex flex-col justify-center items-center">
      <SignUpOrLogin
        title={"Log In"}
        url={'http://localhost:5000/api/user/log-in'}
        userProps={userProps}
        userSchema={userSchema}
        switchPage={{ label: 'Sign Up', path: path.signup }}
      ></SignUpOrLogin>
    </div>
  );
}

export default Login;
