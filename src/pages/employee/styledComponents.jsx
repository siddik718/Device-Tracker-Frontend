
import { Box, Button, Container, Typography, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const small = '0.75rem';
const medium = '1.05rem';
const large = '1.5rem';

const baseStyle = {
    fontFamily: 'monospace',
}
const spaceBetween = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}
const spaceAround = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
}
const center = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}


export const MainContainer = styled(Container)({
    ...baseStyle,
    minHeight: '80vh',
    background: '#e3dddd',
    boxSizing: 'border-box',
});

export const HeaderText = styled(Typography)({
    ...baseStyle,
    fontSize: '2rem',
    textAlign: 'center',
    color: 'rebeccapurple',
    padding: '10px'
});

export const FormBox = styled(Box)({
    ...center,
});

export const Form = styled(Box)({
    width: '70%',
    padding: '15px',
    background: '#fff',
    borderRadius: '8px',
})


export const DoubleBox = styled(Box)({
    ...spaceAround,
    // border: '1px solid red',
});

export const ButtonBox = styled(Box)({
    ...center,
    marginTop: '10px',
});

export const ActionButton = styled(Button)({
    background: 'orange',
    color: '#fff',
});


export const TopDiv = styled('div')({
    ...spaceBetween,
    padding: '20px 10px',
});


export const DetailsLink = styled(NavLink)({
    ...baseStyle,
    '&:hover': {
        textDecoration: 'none',
    },
});


//.......One Employee.

export const EmployeeBox = styled(Box)({
    // border: '1px solid red',
});

export const EmployeeTop = styled(Box)({
    // border: '1px solid red',
    ...spaceBetween,
    padding: '10px 50px',
});


export const Text = styled('p')(({ size, bold, p, m, border, color }) => ({
    ...baseStyle,
    fontSize: !size ? medium : size === 'large' ? large : size === 'small' ? small : medium,
    fontWeight: bold && 'bold',
    margin: m && m,
    padding: p && p,
    border: border && '1px dashed #ddd',
    color: color,
}));



export const Btn = styled(Button)(({ fs,bg,cl,hcolor, hbg, hunderline }) => ({
    ...baseStyle,
    fontSize: fs,
    background: bg,
    color: cl,
    '&:hover': {
        color: hcolor,
        background: hbg,
        textDecoration: hunderline && 'underline',
    },
}));