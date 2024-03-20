import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GET } from '../../libs/handleApi';

import { EmployeeCard, EmployeeCardHeader, EmplyeesDiv, HeaderTitle, SubHeader, ContentText, EmployeeCardContent } from '../departments/styledComponents';

import { Btn, DetailsLink, MainContainer, Text, TopDiv } from './styledComponents';
import { deleteEmployee } from '../../utils/delete';

const Index = () => {
    const [emps, setEmps] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const endpoint = import.meta.env.VITE_SERVER + 'emp';
            const res = await GET(endpoint);
            console.log(res);
            if (res.status === 200) {
                setEmps(res.data.payload);
            } else {
                alert('Check Your Internet Connection!!😐😐');
            }
        }
        fetch();
    }, [])

    const handleDelete = async (id) => {
        const res = await deleteEmployee(emps, id);
        if (res) {
            setEmps(res);
        }
    }

    return (
        <MainContainer maxWidth='xl'>
            <TopDiv>
                <Text size='large' color='#1a1a64'>All Employess</Text>
                <NavLink to="add"> Add Employee </NavLink>
            </TopDiv>
            <EmplyeesDiv>
                {emps.length > 0 && emps.map(emp => (
                    <EmployeeCard key={emp._id} raised>
                        <EmployeeCardHeader
                            title={<HeaderTitle>{emp.name}</HeaderTitle>}
                            subheader={<SubHeader>{emp.dept}</SubHeader>}
                            action={<>
                                <DetailsLink to={emp._id}>Details</DetailsLink>
                                <Btn color='warning' hunderline onClick={() => handleDelete(emp._id)}>Remove</Btn>
                            </>
                            }
                        />
                        <EmployeeCardContent>
                            <ContentText>Email: {emp.email}</ContentText>
                            <ContentText>Designation: {emp.designation}</ContentText>
                        </EmployeeCardContent>
                    </EmployeeCard>
                ))}
            </EmplyeesDiv>
        </MainContainer>
    )
}

export default Index;