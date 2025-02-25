import { Link, useNavigate } from 'react-router-dom';
import path from '../routes/path';
import AuthService from '../services/auth.service';
import useApiCall from '../hooks/useApiCall';
import { RingWithBg } from 'yw-icons'
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../store/slices/user';

const items1 = [
  { label: 'Home', path: path.home },
  { label: 'About', path: path.about },
]

const items2 = [
  { label: 'Sign Up', path: path.signup },
  { label: 'Log In', path: path.login },
]

const items3 = [
  { label: 'Home', path: path.home },
  { label: 'Ingredients', path: path.ingredients },
  { label: 'Products', path: path.products },
  { label: 'Inventory', path: path.inventory },
  { label: 'About', path: path.about },
]

const headerItems = (loggedIn: boolean) => !loggedIn ? [...items1, ...items2] : [...items3]

function Header() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate()
  const { loading, callApi } = useApiCall<object, null>()

  const logOut = async () => {
    try {
      await callApi(AuthService.logOut(), {});
      navigate('/login');
      dispatch(setLoggedIn(false))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div id='app-header' className="w-full flex flex-row justify-around items-center">
      {
        headerItems(isLoggedIn).map(({ label, path }) => (
          <Link to={path} key={path} className={`w-full hover:bg-secondary`}>{label}</Link>
        ))
      }
      {isLoggedIn && (
        <button type='button' className='min-w-max relative flex flex-col justify-center items-center' onClick={() => { logOut() }}>
          <span>Log Out</span>
          {
            loading && (
              <div className='absolute'><RingWithBg /></div>
            )
          }
        </button>
      )}
    </div>
  )
}

export default Header;
