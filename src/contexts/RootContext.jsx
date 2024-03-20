import React from "react"
import PropTypes from "prop-types";
import { retrive } from "../libs/storage";

const RootContext = React.createContext();

const initialState = {
    name: '',
    email: '',
    id: '',
    address: '',
    accessToken: '',
    refreshToken: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return {
                name: action.payload.data.name,
                email: action.payload.data.email,
                id: action.payload.data._id,
                address: action.payload.data.address,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}


export const RootProvider = ({ children }) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        const datas = retrive();
        if (datas) {
            dispatch({ type: 'SET', payload: datas });
        }
    }, []);

    const value = {
        state,
        dispatch,
    };

    return (
        <RootContext.Provider value={value}>
            {children}
        </RootContext.Provider>
    )
}
RootProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default RootContext;

