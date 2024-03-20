import { Navigate, Outlet } from "react-router-dom";
import { retrive } from '../libs/storage';
const PrivateRoute = () => {
    const isLoggedIn = retrive();
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />
}
export default PrivateRoute;