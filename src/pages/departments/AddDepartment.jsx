import InputField from "../../components/InputField";
import * as yep from 'yup';
import { useFormik } from 'formik';
import { AddBox, AddButton } from "./styledComponents";
import axios from "axios";
import { retrive } from "../../libs/storage";
import PropTypes from "prop-types";

const validationSchema = yep.object({
    name: yep
        .string('Enter Department Name')
        .min(2, 'Name must be 2 length long')
        .required('Department name is required')
});

const Add = ({ setDepartments }) => {
    const formik = useFormik({
        initialValues: {
            name: 'IT',
        },
        validationSchema: validationSchema,
        onSubmit: async (value) => {
            try {
                const endpoint = import.meta.env.VITE_SERVER + "dept/add-dept";
                const res = await axios.post(endpoint, value, {
                    headers: {
                        Authorization: `Bearer ${retrive().accessToken}`,
                    }
                });
                setDepartments(prev => [...prev, res.data.payload.department]);
            } catch (error) {
                alert(error.response.data.message);
            }
        }
    });

    return (
        <div>
            <AddBox component='form' onSubmit={formik.handleSubmit}>
                <InputField
                    type='text'
                    name='name'
                    label='Enter Department Name'
                    placeholder='Enter Department Name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    style={{
                        border: '1px solid #ddd',
                        borderTopLeftRadius: '5px',
                        borderTopRightRadius: '5px',
                        padding: '0 7px',
                        borderBottom: 'none'
                    }}
                />
                <AddButton type="submit" variant="contained" size="small" >Add</AddButton>
            </AddBox>
        </div>
    )
}
Add.propTypes = {
    setDepartments: PropTypes.func,
};
export default Add;