import React from "react";
import PropTypes from 'prop-types';

const DepartmentContext = React.createContext();

const DepartmentProvider = ({ children }) => {
    const [departments, setDepartments] = React.useState([]);

    const value = { departments, setDepartments };
    return <DepartmentContext.Provider value={value}>
        {children}
    </DepartmentContext.Provider>

}

DepartmentProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DepartmentContext;