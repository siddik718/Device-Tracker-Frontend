import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

import * as yep from 'yup';
import { useFormik } from 'formik';

// Custom Styled Components.
import { ActionBox, ActionButton, BottomBox, BottomBoxContainer, ContainerBox, HeaderTypography, MainContainer, NotAMemberTypography, TopBox } from "./styledComponets";

// Custom Input Field.
import InputField from "../../components/InputField";


const validationSchema = yep.object({
    name: yep
        .string('Enter your organization name')
        .required('Organization name is required'),
    email: yep
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yep
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    address: yep
        .string('Enter your organization address')
        .min(20, 'Address must be 20 character long')
        .required('Organization address is required')
});


const Signup = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: 'Meta',
            email: 'meta@example.com',
            password: 'meta',
            address: 'New York',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const endpoint = import.meta.env.VITE_SERVER + "auth/signup";
            try {
                await axios.post(endpoint, values);
                navigate('/login');
            } catch (error) {
                alert(error.response.data.message);
            }
        }
    })

    return (
        <MainContainer maxWidth='xl'>
            <ContainerBox component='form' onSubmit={formik.handleSubmit}>
                <TopBox className='top-box'>
                    <HeaderTypography>
                        Join To Keep Your Device Safe.
                    </HeaderTypography>
                </TopBox>
                <BottomBox>
                    <BottomBoxContainer>
                        <InputField
                            type='text'
                            placeholder="Enter Your Organization Name"
                            label='Enter Your Organization Name'
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}

                        />
                        <InputField
                            type='email'
                            placeholder="Enter Your Organization Email"
                            label='Enter Your Organization Email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />

                        <InputField
                            name='password'
                            label='Enter Your Organization Password'
                            placeholder="Enter Your Organization Password"
                            type='text'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />

                        <TextField
                            type='text'
                            placeholder="Enter Your Organization Address"
                            label='Enter Your Organization Address'
                            name='address'
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                            margin='dense'
                            size="small"
                            variant="standard"
                            multiline
                            rows={4}
                            fullWidth />


                        <ActionBox>
                            <ActionButton
                                type="submit"
                                variant='contained'
                                size="small"
                            >
                                Signup
                            </ActionButton>

                            <NotAMemberTypography>
                                {"Already a member? "}
                                <NavLink to="/login">Login</NavLink>
                                {" then."}
                            </NotAMemberTypography>

                        </ActionBox>

                    </BottomBoxContainer>
                </BottomBox>
            </ContainerBox>
        </MainContainer>
    )
}

export default Signup;