
import * as YUP from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import InputField from '../../components/InputField';
import SelectField from '../../components/SelectField';

import { GET, POST } from '../../libs/handleApi';
import { ActionButton, ButtonBox, DoubleBox, Form, FormBox, HeaderText, MainContainer } from './styledComponents';
import { useEffect, useState } from 'react';

const validationSchema = YUP.object({
    dept: YUP
        .string('Enter Employee Department Name')
        .required('Department Name is required'),
    name: YUP
        .string('Enter Employee Name')
        .required('Employee Name is required'),
    nid: YUP
        .string('Enter Employee NID')
        .required('NID is required'),
    email: YUP
        .string('Enter Employee email')
        .email('Enter a valid email')
        .required('Email is required'),
    designation: YUP
        .string('Enter Employee Designation')
        .required('Designation is required'),
    salary: YUP
        .number('Enter Employee Salary')
        .required('Salary is required'),
});

const AddEmployee = () => {

    const navigate = useNavigate();
    const [options, setOptions] = useState([]);

    const formik = useFormik({
        initialValues: {
            // dept: 'IT',
            dept: '',
            name: 'Saiful',
            nid: '12345',
            email: 'saiful',
            designation: 'Backend',
            salary: '2500',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const endpoint = import.meta.env.VITE_SERVER + "emp";
            const res = await POST(endpoint, values);
            if(res.status === 201) {
                console.log(res);
                navigate(-1);
            }else {
                alert(res.response.data.message);
            }
        }
    });

    useEffect(() => {
        const fetch = async () => {
            const endpoint = import.meta.env.VITE_SERVER + "dept";
            const res = await GET(endpoint);
            if (res.status === 200) {
                setOptions(res.data.payload);
            } else {
                alert(res.response.data.message);
            }
        }
        fetch();
    }, []);


    return (
        <MainContainer maxWidth='xl'>
            <HeaderText>
                Add A New Employee
            </HeaderText>
            <FormBox>
                <Form component='form' onSubmit={formik.handleSubmit}>
                    <DoubleBox>

                        <SelectField
                            name="dept"
                            text="Department"
                            options={options}
                            value={formik.values.dept}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.errors.dept && formik.touched.dept}
                            />
                        <InputField
                            type="text"
                            name="name"
                            placeholder='Enter Employee Name'
                            label='Enter Employee Name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            variant="filled"

                        />
                    </DoubleBox>
                    <DoubleBox>
                        <InputField
                            type="text"
                            name="nid"
                            placeholder='Enter Employee NID'
                            label='Enter Employee NID'
                            value={formik.values.nid}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nid && Boolean(formik.errors.nid)}
                            helperText={formik.touched.nid && formik.errors.nid}
                            variant="filled"
                            styleBox={{
                                marginRight: '10px',
                            }}
                        />
                        <InputField
                            type="email"
                            name="email"
                            placeholder='Enter Employee email'
                            label='Enter Employee email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            variant="filled"
                        />
                    </DoubleBox>
                    <DoubleBox>
                        <InputField
                            type="text"
                            name="designation"
                            placeholder='Enter Employee designation'
                            label='Enter Employee designation'
                            value={formik.values.designation}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.designation && Boolean(formik.errors.designation)}
                            helperText={formik.touched.designation && formik.errors.designation}
                            styleBox={{
                                marginRight: '10px',
                            }}
                            variant="filled"
                        />
                        <InputField
                            type="number"
                            name="salary"
                            placeholder='Enter Employee salary'
                            label='Enter Employee salary'
                            value={formik.values.salary}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.salary && Boolean(formik.errors.salary)}
                            helperText={formik.touched.salary && formik.errors.salary}
                            variant="filled"
                        />
                    </DoubleBox>
                    <ButtonBox>
                        <ActionButton type="submit" variant='contained' fullWidth>
                            Submit
                        </ActionButton>
                    </ButtonBox>
                </Form>
            </FormBox>
        </MainContainer>
    );
}

export default AddEmployee;