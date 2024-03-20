import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components.
// import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Context Providers.
import { RootProvider } from './contexts/RootContext';

// Pages.
import Home from './pages/Home/Home'
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';
import All from './pages/departments/All';
import Index from './pages/employee/Index';
import AddEmployee from './pages/employee/AddEmployee';
import AllDevice from './pages/devices/AllDevice';
import Device from './pages/devices/Device';
import Department from './pages/departments/Department';
import Employee from './pages/employee/Employee';
import AllRecords from './pages/Records/AllRecords';
import SideBar from './components/SideBar';
import { ThemeProvider, createTheme } from '@mui/material';
import Auth from './Auth/Auth';

const theme = createTheme({
  typography: {
    fontFamily: 'monospace',
  },
});


const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >

        <RootProvider>
          <SideBar>
            <div style={{ minHeight: "70vh" }}>
              <Routes>

                <Route element={<Auth />}>
                  <Route index element={<Home />} />

                  <Route path='departments' >
                    <Route index element={<All />} />
                    <Route path=':id' element={<Department />} />
                  </Route>


                  <Route path='employees' >
                    <Route index element={<Index />} />
                    <Route path='add' element={<AddEmployee />} />
                    <Route path=':id' element={<Employee />} />
                  </Route>

                  <Route path='devices' >
                    <Route index element={<AllDevice />} />
                    <Route path=':id' element={<Device />} />
                  </Route>

                  <Route path='records' element={<AllRecords />} />

                  <Route path='logout' element={<Logout />} />
                </Route>

                <Route path='signup' element={<Signup />} />
                <Route path='login' element={<Login />} />

              </Routes>
            </div>
            <Footer />
          </SideBar>
        </RootProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;