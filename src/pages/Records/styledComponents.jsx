import { styled, Container, Card, CardHeader, CardContent, Button, Box } from '@mui/material';
// import { NavLink } from "react-router-dom";

const font = {
    fontFamily: 'monospace',
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

export const RecordContainer = styled(Container)({
    ...font,
    minHeight: '80vh',
    background: '#e3dddd',
    boxSizing: 'border-box',
    // border: '1px solid red',
});

export const TopBox = styled('div')({
    ...spaceAround,
    // margin: '10px 0',
    // border: '1px solid red',
    padding: "10px 0",
});

export const Records = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '10px',
    // border: '1px solid red',
});

export const RecordCard = styled(Card)({
    // border: '2px solid red',
    '&:hover': {
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
});

export const Header = styled(CardHeader)({
    // border: '1px solid black',
    padding: '3px 7px',
    margin: '2px',
});

export const ActionButtons = styled('div')({
    ...center,
    flexDirection: 'column',
    // border: '1px solid red',
    margin: '2px',
    padding: '2px 5px'

});

export const Action = styled(Button)(({ hoverbgcolor,hovertextcolor,m,textcolor }) => ({
    ...font,
    // border: '1px solid red',
    color: textcolor,
    margin: m,
    padding: '3px 7px',
    textDecoration: 'underline',
    '&:hover':{
        background: hoverbgcolor,
        color: hovertextcolor,
        textDecoration: 'none',
    },
}));

export const Content = styled(CardContent)({
    // border: '1px solid black',
    margin: '2px',
    padding: '3px 7px',
});

/// Add Records.
export const Wrapper = styled('div')({
    // border: '1px solid red',
    width: '100%',
    ...center,
});

export const AddContainer = styled(Container)({
    ...center,
    flexDirection: 'column',
    borderTop: '1px solid red',
    margin: '15px 0 0',
    padding: '5px 0 10px 0',
});

export const FormBox = styled(Box)({
    // border: '1px solid red',
    margin: '10px',
    width: '50%'
});
