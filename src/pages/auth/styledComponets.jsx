import { Box, Button, Container, Typography, styled } from '@mui/material';

export const MainContainer = styled(Container)({
    background: '#e3dddd',
    minHeight: '80vh'
});

export const ContainerBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const TopBox = styled(Box)({
    margin: '10px 0',
    display: 'flex',
});

export const HeaderTypography = styled(Typography)({
    fontFamily: 'monospace',
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize: '2rem',
    color: 'orange',
    textAlign: 'center',
});

export const BottomBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px',
    margin: '10px',
    background: '#fff',
    borderRadius: '10px'
});

export const BottomBoxContainer = styled(Box)({
    padding: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
});

export const TextFieldBox = styled(Box)({
    width: '100%'
});

export const ActionBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    margin: '4px'
});

export const ActionButton = styled(Button)({
    marginRight: '12px',
    background: 'orange',
    color: 'black',
    fontFamily: 'monospace',
    '&:hover': {
        color: 'white',
    },
});

export const NotAMemberTypography = styled(Typography)({
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    paddingTop: '2.5px',
});

