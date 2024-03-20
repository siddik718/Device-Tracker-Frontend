import axios from 'axios';
import { useContext } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import * as yep from 'yup';
import { useFormik } from 'formik';


// Customs.
import { ActionBox, ActionButton, BottomBox, BottomBoxContainer, HeaderTypography, ContainerBox, NotAMemberTypography, TopBox, MainContainer } from "./styledComponets";
import InputField from "../../components/InputField";
import { store } from '../../libs/storage';
import RootContext from '../../contexts/RootContext';


const validationSchema = yep.object({
    email: yep
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yep
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const Login = () => {
    const { dispatch } = useContext(RootContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const endpoint = import.meta.env.VITE_SERVER + "auth/login";
            try {
                const res = await axios.post(endpoint, values);
                store(res.data.payload);
                dispatch({ type: 'SET', payload: res.data.payload });
                navigate('/');
            } catch (error) {
                alert(error.response.data.message);
            }
        }
    });

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
                            type='email'
                            placeholder="Enter Your Email"
                            label='Enter Your Email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <InputField
                            type='password'
                            placeholder="Enter Your Password"
                            label='Enter Your Password'
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <ActionBox>
                            <ActionButton
                                type="submit"
                                variant='contained'
                                size="small"
                            >
                                Login
                            </ActionButton>
                            <NotAMemberTypography>
                                {"Not a member? "}
                                <NavLink to="/signup">Register</NavLink>
                                {" first."}
                            </NotAMemberTypography>
                        </ActionBox>
                    </BottomBoxContainer>
                </BottomBox>
            </ContainerBox>
        </MainContainer>
    )
}

export default Login;