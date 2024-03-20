import { Box, Button, Container, Typography, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

// Add Device style...
export const MainContainer = styled(Container)({
    // background: 'yellow',
    // border: '1px solid red',
    marginTop: '15px',
    marginBottom: '10px',
    padding: '10px 0',
});

export const TopBox = styled(Box)({
    // border: '1px solid red',
    margin: '8px 0',
    padding: '2px 0',
});

export const HeaderTypography = styled(Typography)({
    color: 'blue',
    fontFamily: 'monospace',
    fontSize: '3vw',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0 8px',
});

export const BottomBox = styled(Box)({
    margin: '0 10px',
    padding: '2vw 8vw'
});

export const FormBox = styled(Box)({
    border: '1px dashed #ddd',
    padding: '5px'
});

export const ActionBox = styled(Button)({
    fontFamily: 'monospace',
    fontSize: '2vw',
    background: 'orange',
    color: '#fff',
    '&:hover': {
        background: 'aqua',
        color: '#000',
    },
    marginTop: '5px',
});


// AllDevice Style...

export const CustomContainer = styled(Container)({
    marginTop: '15px',
    // border: '1px solid red',
});

export const CustomTopBox = styled(Box)({
    // border: '1px solid red',
    padding: '0 5px',
    fontFamily: 'monospace',

});

export const LinkBox = styled(Box)({
    // border: '1px solid red',
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px',
    letterSpacing: '1.5px'
});

export const Link = styled('a')({
    '&:hover': {
        color: '#0f1781',
        textDecoration: 'none'
    }
});

export const Devices = styled(Box)({
    letterSpacing: '2px'
    // border: '1px solid red',
});

export const Device = styled(Box)({
    padding: '0 5px',
    border: '1.5px dashed #ddd',
    borderRadius: '5px',
});

export const DeviceHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const DeviceType = styled(Box)({
    fontSize: '1.3rem',
    fontWeight: 600,
    color: 'teal',
    padding: '5px 0',
});

export const DetailsLink = styled(NavLink)({
    color: '#22b37c',
    textTransform: 'capitalize',
    '&:hover': {
        background: '#fff',
        fontSize: '1rem',
        textTransform: 'uppercase',
    },
});

export const DeviceDescription = styled(Box)({
    // border: '1px solid red',
    padding: '0 7px',
});

export const Description = styled(Box)({
    // border: '1px solid red',
    padding: '2px',
    fontSize: '1.05rem',
    fontWeight: 500,
});


/// One Device Styling.


export const OneDeviceContainer = styled(Container)({
    fontFamily: 'monospace',
    marginTop: '10px',
    // border: '1px solid red',
});

export const OneHeaderBox = styled(Box)({
    // border: '1px solid red',
    fontSize: '1.45rem',
    padding: '10px',
    color: 'red',
});

export const OneDescriptionBox = styled(Box)({
    // border: '1px solid red',
    padding: '5px',
});

export const OneDescription = styled(Box)({
    border: '1px dashed #ccc',
    margin: '3px 0',
});

export const OneActionBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // border: '1px solid red',

});

export const OneIndex = styled('div')({
    fontStyle: 'italic',
    fontSize: '1.15rem',
    padding: '2px 5px',
    textDecoration: 'underline',
});

export const UpdateDesc = styled(Button)({
    textTransform: 'capitalize',
    color: 'blue',
    '&:hover': {
        background: 'blue',
        color: 'white',
        textTransform: 'uppercase'
    },
    margin: '2px'
});
export const DeleteDesc = styled(Button)({
    textTransform: 'capitalize',
    color: 'red',
    '&:hover': {
        background: 'red',
        color: 'black',
        textTransform: 'uppercase',
    },
    fontWeight: 600,
    margin: '2px'
});
export const Desc = styled(Box)({
    // border: '1px solid red',
    padding: '5px',
});

export const ModalBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
})