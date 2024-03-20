import PropTypes from 'prop-types';
import * as YUP from 'yup';
import { useFormik } from 'formik';

import { GET, POST } from '../../libs/handleApi';
import React from 'react'
import SelectField from '../../components/SelectField';
import InputField from '../../components/InputField';
import { Action, ActionButtons, AddContainer, FormBox, TopBox } from './styledComponents';
import { DoubleBox, Text } from '../employee/styledComponents';
// import { } from ''

const validationSchema = YUP.object({
  device: YUP
    .string('Choose Device Name')
    .required('Device Name is required'),
  employee: YUP
    .string('Choose Employee Name')
    .required('Employee Name is required'),
  condition: YUP
    .string('Enter Device Condition')
    .required('Device Condition is required')
});


const AddRecord = ({ setRecords }) => {

  const [employeeOptions, setEmployeeOptions] = React.useState([]);
  const [deviceOptions, setDeviceOptions] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const base = import.meta.env.VITE_SERVER;
      const employee = await GET(base + 'emp/');
      const device = await GET(base + 'dev/names');
      if (employee.status === 200 && device.status === 200) {
        setEmployeeOptions(employee.data.payload);
        setDeviceOptions(device.data.payload);
      } else {
        alert('Check Your Internet.');
      }
    }
    fetch();
  }, []);

  const formik = useFormik({
    initialValues: {
      device: "",
      employee: "",
      condition: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const endpoint = import.meta.env.VITE_SERVER + "rec";
      const res = await POST(endpoint, values);
      if(res.status === 201) {
          setRecords(prev => [...prev, res.data.payload])
      }else {
          alert(res.response.data.message);
      }
    }
  });

  return (
    <AddContainer>
      <TopBox>
        <Text border size='large' color='#6969ec'>Add A New Record</Text>
      </TopBox>
      <FormBox component={'form'} onSubmit={formik.handleSubmit}>
        <DoubleBox>
          <SelectField
            name="device"
            text="Device"
            options={deviceOptions}
            value={formik.values.device}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.device && formik.touched.device}
          />
          <SelectField
            name="employee"
            text="Employee"
            options={employeeOptions}
            value={formik.values.employee}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.employee && formik.touched.employee}
          />

        </DoubleBox>
        <InputField
          name="condition"
          placeholder='Enter Device Condition'
          label='Enter Device Condition'
          value={formik.values.condition}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.condition && Boolean(formik.errors.condition)}
          helperText={formik.touched.condition && formik.errors.condition}
          variant="filled"
          styleBox={{ 
            padding: "0 5px 0 0",
          }}
        />
        <ActionButtons>
          <Action type='submit' size='large'>Submit</Action>
        </ActionButtons>
      </FormBox>
    </AddContainer>
  )
}


AddRecord.propTypes = {
  setRecords: PropTypes.func,
}


export default AddRecord;