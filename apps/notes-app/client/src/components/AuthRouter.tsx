import { useEffect, useState } from "react"
import AuthService from "../services/auth.service";
import { PageLoader } from "yw-icons";
import { Navigate, useNavigate } from 'react-router-dom';
import { useContextState, useUpdateContextState } from 'yw-hooks';
import path from "../routes/path";

export default function AuthRouter({ children }) {
  const { isLoggedIn } = useContextState();
  const updateContext = useUpdateContextState();
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
        updateContext('isLoggedIn', true);
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
