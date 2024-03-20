
import { Box, Button, Card, CardContent, CardHeader, Container, Typography, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const baseFont = {
    fontFamily: 'monospace',
}




export const MainContainer = styled(Container)({
    // background: 'red',
    // fontFamily: 'monospace'
    ...baseFont,
});

export const TopBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '10px 0px 5px 0px',
});

export const HeaderTypography = styled(Typography)({
    ...baseFont,
    border: '1px solid #098',
    boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.75);',
    color: 'blue',
    padding: '10px',
    borderRadius: '5px',
    fontWeight: 600,
});

export const AddDeptBox = styled(Box)({
    ...baseFont,
    color: 'blue',
    padding: '0 10px',
    borderRadius: '5px',
});

export const AddBox = styled(Box)({
    display: 'flex',
    padding: '0 5px'
});

export const AddButton = styled(Button)({
    background: '#e17f00',
    color: '#000',
    fontFamily: 'monospace',
    margin: '8px 5px',
    '&:hover': {
        color: '#fff',
    },
});


// -----

export const BottomBox = styled(Box)({
    border: '1px solid #ccc',
    padding: '5px',
});

export const Dept = styled(Box)({
    border: '1px solid #ddd',
    margin: '2px 0',
    // padding: '15px 8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:hover': {
        background: '#ddd',
    },
});

export const Text = styled(Typography)({
    // border: '1px solid red',
    padding: '10px',
    ...baseFont,
    fontSize: '0.85rem',
    letterSpacing: '1px',
});

export const DetailsLink = styled(NavLink)({
    color: 'black',
    '&:hover': {
        textDecoration: 'none'
    }
})

export const DeleteButton = styled(Button)({
    ...baseFont,
    '&:hover': {
        background: 'red',
        color: 'white',
    },
});

export const OneContainer = styled(Container)({
    // border: '1px solid red',
    // background: 'teal',
    padding: '10px 0',
    ...baseFont,
});

export const OneTopBox = styled(Box)({
    // border: '1px solid blue',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2px',
    marginBottom: '8px',
});

export const HeroText = styled('p')({
    // border: '1px solid black',
    padding: '10px',
    fontSize: '1.15rem',
});

export const InputBox = styled('div')({
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 4px'
});

export const ChangeDeptNameButton = styled(Button)({
    ...baseFont,
    fontSize: '0.65rem',
    background: 'orange',
    color: "black",
    '&:hover': {
        color: "white",
    },
    // border: '1px solid red'
});

export const ManagerDiv = styled('div')({
    // border: '1px solid red',
    fontSize: '20px',
    padding: '2px 5px',
});

export const EmplyeesDiv = styled('div')({
    // border: '1px solid red',
    padding: '5px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
});

export const EmployeeCard = styled(Card)({
    
    // border: '1px solid black',
    padding: '5px',
    '&:hover': {
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
});

export const EmployeeCardHeader = styled(CardHeader)({
    // flex: '1 1 auto',
    // overflow: 'hidden',
    // border: '1px solid red',
    borderBottom: '1px solid #ddd'
});

export const HeaderTitle = styled(Typography)({
    ...baseFont,
    fontSize: '1rem',
    fontWeight: 600,
    color: 'blueviolet',
});

export const SubHeader = styled(Typography)({
    ...baseFont,
    fontSize: '0.75rem'
});

export const MakeManagerBtn = styled(Button)({
    fontSize: '0.75rem',
    ...baseFont,
    background: 'orange',
    color: 'black',
    '&:hover': {
        color: 'white',
        textDecoration: 'underline'
    },
});

export const EmployeeCardContent = styled(CardContent)({
    // border: '1px solid red',

});

export const ContentText = styled(Typography)({
    ...baseFont,
});