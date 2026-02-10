import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import path from '../routes/path';
import AuthService from '../services/auth.service';
import useApiCall from '../hooks/useApiCall';
import { setLoggedIn } from '../store/slices/user';
import RoutedTabs from "../components/Tabs/RoutedTabs"
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import StyledSelect from '../components/StyledSelect/StyledSelect';
import IconButton from '@mui/material/IconButton';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import RouteBreadcrumbs from "../components/breadcrumbs/route-breadcrumbs"

const items1 = [
  { label: 'Home', url: path.home },
  { label: 'About', url: path.about },
]

const items2 = [
  { label: 'Sign Up', url: path.signup },
  { label: 'Log In', url: path.login },
]

const items3 = [
  { label: 'Home', url: path.home },
  { label: 'Ingredients', url: path.ingredients },
  { label: 'Products', url: path.products },
  { label: 'Inventory', url: path.inventory },
  { label: 'About', url: path.about },
]

const headerItems = (loggedIn: boolean) => !loggedIn ? [...items1, ...items2] : [...items3]

function Header() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate()
  const { loading, callApi } = useApiCall<object, null>()
  const [level1, setLevel1] = useState<string>(items3[0].url);
  const [level2, setLevel2] = useState<string>('');
  const [level3, setLevel3] = useState<string>('');

  useEffect(() => {
    
  }, []);

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
    <Stack id='app-header' direction='column' justifyContent='center' width="100%">
      <Stack direction='row' justifyContent='around' width="100%">
        <RoutedTabs id='app-header' tabs={headerItems(isLoggedIn)} nestedLevel={1} />
        {isLoggedIn && (
          <IconButton title="Log Out" loading={loading} onClick={() => { logOut() }}>
            <PowerSettingsNewIcon></PowerSettingsNewIcon>
          </IconButton>
        )}
      </Stack>
      <Stack direction='row' justifyContent='around' width="100%">
        <RouteBreadcrumbs />
      </Stack>
    </Stack>
  )
}

export default Header;
