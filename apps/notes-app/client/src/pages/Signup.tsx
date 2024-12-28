import { object, ref, string } from 'yup'
import SignUpOrLogin from "../components/SignUpOrLogIn";
import path from '../routes/path';

const userProps = {
  firstname: "First Name",
  lastname: "Last Name",
  username: "Username",
  phoneNumber: "Mobile Number",
  email: "Email ID",
  password: "Password",
  confirmPassword: "Confirm Password",
}

const userSchema = object({
  firstname: string().required().min(3).max(150).trim(),
  lastname: string().required().min(3).max(150).trim(),
  username: string().required().min(3).max(150).trim(),
  phoneNumber: string().required().min(10).max(15).trim(),
  email: string().email().required().min(3).max(150).trim(),
  password: string().trim()
    .min(8, "You must enter at least 8 characters.")
    .max(100)
    .matches(/[0-9]/, "You must enter at least one number.")
    .matches(/[a-z]/, "You must enter at least one lowercase letter.")
    .matches(/[A-Z]/, "You must enter at least one uppercase letter.")
    .matches(/[#?!@$%^&*-]/, "You must enter at least one symbols.")
    .required(),
  confirmPassword: string().trim()
    .oneOf([ref('password')], "Passwords must match.")
    .required(),
})

const Signup = () => {

  return (
    <div className="w-full pt-8 flex flex-col justify-center items-center">
      <SignUpOrLogin
        title={"Sign Up"}
        url={'http://localhost:5000/api/user/sign-up'}
        userProps={userProps}
        userSchema={userSchema}
        switchPage={{ label: 'Log In', path: path.login }}
      ></SignUpOrLogin>
    </div>
  );
}

export default Signup;
