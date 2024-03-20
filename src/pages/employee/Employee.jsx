import React from 'react'
import { useParams } from 'react-router-dom';
import { GET } from '../../libs/handleApi';
import { Btn, EmployeeBox, EmployeeTop, HeaderText, MainContainer, Text } from './styledComponents';
import UpdateModelEmp from '../../components/UpdateModelEmp';

const Employee = () => {
    const { id } = useParams();
    const [data, setData] = React.useState({});
    const [open,setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        const fetch = async () => {
            const endpoint = import.meta.env.VITE_SERVER + 'emp/' + id;
            const res = await GET(endpoint);
            if (res.status === 200) {
                setData(res.data.payload);
            } else {
                alert(res.response.data.message);
            }
        }
        fetch();
    }, [id]);


    return (
        <MainContainer style={{ 
            background: 'white',
        }}>
            <div>
                <HeaderText>Full Employee Details</HeaderText>
            </div>
            <EmployeeBox>
                <EmployeeTop>
                    <Text size='large' bold p='0 10px' border color='#31318c'>
                        Name: {data.name}
                    </Text>
                        <Btn bg='orange' cl='white' size='small' variant='contained' fs='.75rem' onClick={handleOpen}>Update Info</Btn>
                </EmployeeTop>
                <div>
                    <Text border m="2px 1px" p="5px">
                        Department: {data.dept}
                    </Text>
                    <Text border m="2px 1px" p="5px">
                        Designation: {data.designation}
                    </Text>
                    <Text border m="2px 1px" p="5px">
                        Contact: {data.email}
                    </Text >
                    <Text border m="2px 1px" p="5px">
                        NID: {data.nid}
                    </Text>
                    <Text border m="2px 1px" p="5px">
                    Joining Date: {new Date(data.joinDate).toLocaleString()}
                    </Text>
                    <Text border m="2px 1px" p="5px">
                        Salary: {data.salary}
                    </Text>
                    <Text border m="2px 1px" p="5px">
                        Allocated Device: {data?.allocatedDevice?.length}
                    </Text>

                </div>
            </EmployeeBox>

            <UpdateModelEmp
                open={open}
                handleClose={handleClose}
                data={data}
                setData={setData}
            />

        </MainContainer>

    )
}

export default Employee;