import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import { PageLoader } from "yw-icons";
import AuthService from "../services/auth.service";
import { setLoggedIn } from "../store/slices/user";
import path from "../routes/path";

export default function AuthRouter({ children }) {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const navigate = useNavigate()

  const verifyToken = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await AuthService.authenticateToken()
      const data = await res.data;
      console.log(data);
      if (data.success && !isLoggedIn) {
        dispatch(setLoggedIn(true))
      }
    } catch (error) {
      setError(true);
      console.log(error)
      AuthService.logOut()({}).then(() => {
        navigate(path.login)
      })
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    verifyToken()
    return () => {
      setLoading(false);
      setError(false);
    };
  }, []);

  return loading ? <PageLoader /> : error ? <Navigate to='/login' /> : children
}
