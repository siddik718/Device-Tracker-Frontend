import React from 'react'
import { useParams } from "react-router-dom";
import InputField from '../../components/InputField';
import { GET, PATCH } from '../../libs/handleApi';
import { ChangeDeptNameButton, ContentText, EmployeeCard, EmployeeCardContent, EmployeeCardHeader, EmplyeesDiv, HeaderTitle, HeroText, InputBox, MakeManagerBtn, ManagerDiv, OneContainer, OneTopBox, SubHeader } from './styledComponents';

const Department = () => {

    const { id } = useParams();
    const [department, setDepartment] = React.useState({})
    const [employees, setEmployees] = React.useState([])
    const [name, setName] = React.useState('');
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        const fetch = async () => {
            try {
                const endpoint = import.meta.env.VITE_SERVER + "dept/" + id;
                const res = await GET(endpoint);
                setDepartment(res.data.payload);
                setEmployees(res.data.payload?.employees);
                setName(res.data.payload.name);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
    }, [id]);
    
    const makeManager = async (id) => {
        console.log(id);
        try {
            const endpoint = import.meta.env.VITE_SERVER + "dept/update-manager";
            const values = {
                manager: id,
                deptName: department.name
            }
            const res = await PATCH(endpoint, values);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        if (!value || value.length < 2) {
            setError('Department name must be atleast 2 charcter long..');
        } else {
            setError('');
        }
        setName(value);
    }

    const changeName = async () => {
        try {
            const endpoint = import.meta.env.VITE_SERVER + "dept/" + department._id;
            const values = {
                name: name,
            }
            const res = await PATCH(endpoint, values);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <OneContainer>
            <OneTopBox>
                <HeroText>
                    Welcome to {name} Department
                </HeroText>
                <InputBox>
                    <InputField
                        type="text"
                        value={name}
                        onChange={handleChange}
                        error={Boolean(error)}
                        helperText={error}
                    />
                    <ChangeDeptNameButton size='small' variant='contained' onClick={changeName}>
                        Change Name
                    </ChangeDeptNameButton>
                </InputBox>
            </OneTopBox>
            {department?.manager && <ManagerDiv> Manager Is : {department?.manager?.name} | For Contact: {department?.manager?.email} </ManagerDiv>}
            <EmplyeesDiv>
                {employees.length > 0 && employees.map(emp => (
                    <EmployeeCard key={emp._id} raised>
                        <EmployeeCardHeader
                            title={<HeaderTitle>{emp.name}</HeaderTitle>}
                            subheader={<SubHeader>{emp.designation}</SubHeader>}
                            action={
                                <MakeManagerBtn variant='contained' onClick={() => makeManager(emp._id)}>
                                    Make Manager
                                </MakeManagerBtn>
                            }
                        />
                        <EmployeeCardContent>
                            <ContentText>Email: {emp.email}</ContentText>
                            <ContentText>Salary: {emp.salary}</ContentText>
                        </EmployeeCardContent>
                    </EmployeeCard>
                ))}
            </EmplyeesDiv>
        </OneContainer>
    )
}

export default Department;