import { Link, useNavigate } from 'react-router-dom';
import { SelectTheme, ThemeDropdown } from 'yw-daisyui'
import path from '../routes/path';
import { useContextState, useUpdateContextState } from 'yw-hooks';
import AuthService from '../services/auth.service';
import useApiCall from '../hooks/useApiCall';
import { RingWithBg } from 'yw-icons'

const themes = ["emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset",]

const items1 = [
  { label: 'Home', path: path.home },
  { label: 'Notebooks', path: path.notebooks },
  { label: 'About', path: path.about },
]

const items2 = [
  { label: 'Sign Up', path: path.signup },
  { label: 'Log In', path: path.login },
]

const headerItems = (loggedIn: boolean) => !loggedIn ? [...items1, ...items2] : [...items1]

function Header() {
  const state = useContextState();
  const updateContext = useUpdateContextState()
  const navigate = useNavigate()
  const { loading, callApi } = useApiCall<object, null>()

  const logOut = async () => {
    try {
      await callApi(AuthService.logOut(), {});
      navigate('/login');
      updateContext('isLoggedIn', false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div id='app-header' className="w-full flex flex-row justify-around items-center">
      <ThemeDropdown themes={themes} />
      {
        headerItems(state?.isLoggedIn).map(({ label, path }) => (
          <Link to={path} key={path} className={`w-full hover:bg-secondary`}>{label}</Link>
        ))
      }
      {state?.isLoggedIn && (
        <button type='button' className='min-w-max relative flex flex-col justify-center items-center' onClick={() => { logOut() }}>
          <span>Log Out</span>
          {
            loading && (
              <div className='absolute'><RingWithBg /></div>
            )
          }
        </button>
      )}
      <SelectTheme themes={['dark', 'light', 'altDark', 'cupcake', 'darkAlt', "bumblebee", ...themes]} />
    </div>
  )
}

export default Header;
