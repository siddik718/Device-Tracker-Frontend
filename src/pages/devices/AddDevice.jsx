
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


import { ActionBox, BottomBox, FormBox, HeaderTypography, MainContainer, TopBox } from './styledComponents';
import InputField from '../../components/InputField';
import { POST } from '../../libs/handleApi';

const validationSchema = yup.object({
  Type: yup
    .string('Enter type of the device')
    .required('Device Type is required'),
  name: yup
    .string('Enter name of the device')
    .required('Device name is required'),
  description: yup
    .string('Enter Device Full Decription')
    .min(20, 'Description must be at least 20 charcter long')
    .required('Description is required')
});


const AddDevice = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Type: 'Mobile',
      name: 'Nahid',
      description: 'Iphone 12, Ram-12,..',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const endpoint = import.meta.env.VITE_SERVER + 'dev';
      const result = await POST(endpoint,values);
      if(result.status === 201) {
        navigate(-1);
      }else {
        alert(result.response.data.message);
      }
    }
  });
  return (
    <MainContainer>
      <TopBox>
        <HeaderTypography>
          Add A New Device Here..
        </HeaderTypography>
      </TopBox>
      <BottomBox>
        <FormBox component='form' onSubmit={formik.handleSubmit}>
          
          <InputField
            name='Type'
            placeholder='Enter Type of the device'
            label='Enter Type here'
            value={formik.values.Type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Type && Boolean(formik.errors.Type)}
            helperText={formik.touched.Type && formik.errors.Type}
          />
          
          <InputField
            name='name'
            placeholder='Enter name of the device'
            label='Enter name here'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <InputField
            name='description'
            placeholder='Enter description of the device'
            label='Enter description here'
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />

          <ActionBox type='submit' size='small'>
            Submit
          </ActionBox>
        </FormBox>
      </BottomBox>
    </MainContainer>
  )
}


export default AddDevice;