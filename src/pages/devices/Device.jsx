
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GET, PATCH } from '../../libs/handleApi'
import { DeleteDesc, Desc, ModalBox, OneActionBox, OneDescription, OneDescriptionBox, OneDeviceContainer, OneHeaderBox, OneIndex, UpdateDesc } from './styledComponents';
import { deleteDevice } from '../../utils/delete';
import { Box, Button, Modal, Typography } from '@mui/material';

import InputField from '../../components/InputField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    padding: 4,
};




const Device = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    const [open, setOpen] = useState(false);
    const [updID, setUpdateID] = useState('');
    const [updDesc, setUpdDsc] = useState('');
    const [error, setError] = useState('');

    const handleOpen = (device) => {
        setUpdateID(device._id);
        setUpdDsc(device.description);
        setOpen(true);
        setError('');
    }
    const handleClose = () => {
        setUpdateID('');
        setUpdDsc('');
        setError('');
        setOpen(false);
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setUpdDsc(value);
        if (value.length < 20) {
            setError('Description must be at least 20 character long')
        } else {
            setError('');
        }
    }
    useEffect(() => {
        const fetch = async () => {
            const endpoint = import.meta.env.VITE_SERVER + 'dev/search';
            const query = { type: id };
            const res = await GET(endpoint, query);
            if(res.status === 200) {
                setData(res.data.payload);
            }else {
                alert('Check Your internet');
            }
        }
        fetch();
    }, [id]);
    const navigate = useNavigate();
    const handleDelete = async (id) => {
        try {
            const newData = await deleteDevice(data, id);
            if(newData.length === 0) {
                navigate('/devices');
            }else {
                setData(newData);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleUpdateSubmit = async(e) => {
        e.preventDefault();
        const data = {
            description: updDesc,
        }
        const endpoint = import.meta.env.VITE_SERVER + "dev/" +updID;
        try {
            const res = await PATCH(endpoint,data);  
            console.log('Inside : ',res);
            alert(res.data.message + ' Please Refresh the page.');
           } catch (error) {
            console.log(error);
        }
    }
    return (
        <OneDeviceContainer>
            <OneHeaderBox>
                {`You have ${data.length} ${id} devices avialable now.`}
            </OneHeaderBox>
            <OneDescriptionBox>
                {data.length > 0 && data.map((dt, index) => (
                    <OneDescription key={dt._id}>
                        <OneActionBox>
                            <OneIndex>
                                {index + 1}.
                                {dt.name}
                            </OneIndex>
                            <UpdateDesc onClick={() => handleOpen(dt)}>Update</UpdateDesc>
                            <DeleteDesc onClick={() => handleDelete(dt._id)}>Delete</DeleteDesc>
                        </OneActionBox>
                        <Desc>
                            {dt.description}
                        </Desc>
                    </OneDescription>
                ))}
            </OneDescriptionBox>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalBox sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update {updDesc}

                    </Typography>
                    <Box component='form' onSubmit={handleUpdateSubmit}>

                        <InputField
                            type='text'
                            name='desc'
                            label='Enter Description'
                            placeholder='Enter Description'
                            value={updDesc}
                            onChange={handleChange}
                            error={Boolean(error)}
                            helperText={error}
                        />
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <Button type='submit'>Update</Button>
                        </Box>
                    </Box>
                </ModalBox>
            </Modal>



        </OneDeviceContainer>
    )
}

export default Device;