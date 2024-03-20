import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, alpha, styled } from '@mui/material';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import RootContext from '../contexts/RootContext';

const Global = [
  {
    id: 1,
    path: 'login',
    name: 'Login',
  },
  {
    id: 2,
    path: 'signup',
    name: 'Signup',
  }
]

const Local = [
  {
    id: 1,
    path: 'employees',
    name: 'Employees',
  },
  {
    id: 2,
    path: 'devices',
    name: 'Devices',
  },
  {
    id: 3,
    path: 'records',
    name: 'Records',
  },
  {
    id: 4,
    path: 'departments',
    name: 'Departments',
  },
  {
    id: 5,
    path: 'logout',
    name: 'Logout',
  }
]

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: '#cbff00',
//   boxShadow: '0px 0px 90px 10px rgb(121 255 94);',
//   '&:hover': {
//     backgroundColor: '#e7e753',
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'black',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: '#541111',
  display: 'block',
  textDecoration: 'none',
  fontFamily: 'monospace',
  fontWeight: 700,
  fontSize: '1.6vw',
  borderRadius: theme.shape.borderRadius,
  padding: '10px',
  transition: 'width 1s ease-in-out',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  '&.active': {
    borderBottom: `1px solid ${alpha(theme.palette.common.black, 0.25)}`
  },

}));

const Navbar = () => {

  const { state: { id } } = useContext(RootContext);
  const [pages, setPages] = useState(Global);

  const [anchorElNav, setAnchorElNav] = useState(null)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }
  
  useEffect(() => {
    if (id !== '') {
      setPages(Local)
    } else {
      setPages(Global)
    }
  }, [id])


  return (
    <AppBar position='relative' sx={{
      backgroundColor: "#bffff8"
    }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <JoinInnerIcon sx={{
            display: { xs: 'none', md: 'flex' },
            mr: 1,
            color: "#541111",

          }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: '#541111',
            }}
          >
            WIDs
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#541111"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <StyledNavLink to={page.path}>
                    <Typography textAlign="center">
                      {page.name}
                    </Typography>
                  </StyledNavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <JoinInnerIcon sx={{
            display: {
              xs: 'flex',
              md: 'none'
            },
            mr: 1,
            color: "#541111",
          }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#541111',
              textDecoration: 'none',
            }}
          >
            WIDs
          </Typography>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-around'
          }}>
            {pages.map((page) => (
              <StyledNavLink
                key={page.id}
                to={page.path}
                onClick={handleCloseNavMenu}
              >
                {page.name}
              </StyledNavLink>
            ))}
          </Box>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon color='error' />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;