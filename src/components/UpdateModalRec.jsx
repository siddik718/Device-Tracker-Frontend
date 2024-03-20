
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

const UpdateModelRec = ({ open, handleClose, data }) => {

    const [error, setError] = useState('');
    const [returnCondition, setReturnCondition] = useState('');

    const memoizedData = useMemo(() => data, [data]);

    useEffect(() => {
        setReturnCondition(memoizedData.returnCondition);
        return () => setReturnCondition('');
    }, [memoizedData]);


    const handleChange = (e) => {
        const value = e.target.value;
        if(!value || value.length < 0) {
            setError('Return Condition Must Be given');
        }else {
            setError('');
        }
        setReturnCondition(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (error) return;
        // console.log(returnCondition);
        const endpoint = import.meta.env.VITE_SERVER + 'rec/' + data?._id;
        // console.log(endpoint);
        const res = await PATCH(endpoint, {returnCondition});
        if (res.status === 200) {
            alert(res.data.message);
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
                    {data.device}
                </Typography>
                <Box component='form' onSubmit={handleSubmit}>
                    <InputField
                        label="Enter Device Return Condition.."
                        placeholder="Enter Device Return Condition.."
                        name="returnCondition"
                        value={returnCondition}
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


UpdateModelRec.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    setData: PropTypes.func,
    data: PropTypes.object,
}

export default UpdateModelRec;
