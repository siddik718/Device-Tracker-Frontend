import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import RootContext from '../../contexts/RootContext';
import { clear, retrive } from "../../libs/storage";

const Logout = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(RootContext);

    if (confirm('Are You Sure?')) {
        const endpoint = import.meta.env.VITE_SERVER + "auth/logout";
        const logger = async () => {
            try {
                await axios.post(endpoint, null, {
                    headers: {
                        Authorization: `Bearer ${retrive().accessToken}`,
                    }
                });
                clear();
                dispatch({ type: 'RESET' });
                navigate('/');
            } catch (error) {
                alert(error.response.data.message);
            }
        }
        logger();
    } else {
        navigate('/');
    }
}

export default Logout;