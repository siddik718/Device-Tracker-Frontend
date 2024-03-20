import { Box, Typography } from '@mui/material';
const Footer = () => {
  return (
    <Box>
      <Box sx={{
        borderTop: '2px solid #ddd',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2',
        background: '#bffff8',
        color: '#000'
      }}>
        <Typography color='red'>
          &copy; Copyright Resereved 2024.
        </Typography>
        <Typography color='blue'>
          Contact: absiddik718@gmail.com
        </Typography>
        <Typography color='primary'>
          Time : {Date()}
        </Typography>
      </Box>

    </Box>
  )
}

export default Footer;