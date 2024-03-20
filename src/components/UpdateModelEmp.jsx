
import PropTypes from 'prop-types';

import { Box, Button, Modal, Typography } from "@mui/material";
import InputField from './InputField';
import { useEffect, useMemo, useState } from 'react';
import { PATCH } from '../libs/handleApi';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const UpdateModelEmp = ({ open, handleClose, data, setData }) => {

    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState(0);

    const memoizedData = useMemo(() => data, [data]);

    useEffect(() => {

        setName(memoizedData.name);
        setEmail(memoizedData.email);
        setDesignation(memoizedData.designation);
        setSalary(memoizedData.salary);

        return () => {
            setName('');
            setEmail('');
            setDesignation('');
            setSalary('');
        }
    }, [memoizedData]);


    const handleChange = (e) => {
        const name = e.target.name, value = e.target.value;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            if (!isValidEmail(value)) setError("Enter A Valid Email..");
            else setError('');
            setEmail(value);
        } else if (name === 'designation') {
            setDesignation(value);
        } else if (name === 'salary') {
            if (value < 0) setError("Salary Must Be Positive..");
            else setError('');
            setSalary(value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (error) return;

        const values = { name, designation, salary };
        if (email !== data?.email) {
            values.email = email;
        }
        const endpoint = import.meta.env.VITE_SERVER + 'emp/' + data?._id;
        const res = await PATCH(endpoint, values);
        if (res.status === 200) {
            setData(res.data.payload)
            handleClose();
        } else {
            alert(res.response.data.message);
        }
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {data.name}
                </Typography>
                <Box component='form' onSubmit={handleSubmit}>
                    <InputField
                        name="name"
                        value={name}
                        onChange={handleChange}
                        error={Boolean(error)}
                        helperText={error}
                        variant="filled"
                    />
                    <InputField
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        error={Boolean(error)}
                        helperText={error}
                        variant="filled"
                    />
                    <InputField
                        name="designation"
                        value={designation}
                        onChange={handleChange}
                        error={Boolean(error)}
                        helperText={error}
                        variant="filled"
                    />
                    <InputField
                        type="number"
                        name="salary"
                        value={salary}
                        onChange={handleChange}
                        error={Boolean(error)}
                        helperText={error}
                        variant="filled"
                    />
                    <Button variant='contained' fullWidth type='submit'>Update</Button>
                </Box>
            </Box>
        </Modal>
    )
};


UpdateModelEmp.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    setData: PropTypes.func,
    data: PropTypes.object,
}


export default UpdateModelEmp;



const isValidEmail = (email) => {
    const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}