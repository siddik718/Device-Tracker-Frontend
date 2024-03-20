import { useEffect, useState } from "react";
import AddDepartment from "./AddDepartment";
import { AddDeptBox, BottomBox, DeleteButton, Dept, DetailsLink, HeaderTypography, MainContainer, Text, TopBox } from "./styledComponents";
import { GET } from '../../libs/handleApi';
import { deleteDepartment } from "../../utils/delete";

const All = () => {

    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const endpoint = import.meta.env.VITE_SERVER + "dept";
                // const res = await axios.get(endpoint, {
                //     headers: {
                //         Authorization: `Bearer ${retrive().accessToken}`,
                //     }
                // });
                const res = await GET(endpoint);
                console.log(res);
                setDepartments(res.data.payload);
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
    }, []);

    const handleDelete = async(id) => {
        console.log(id);
        try {
            const res = await deleteDepartment(departments,id)
            setDepartments(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MainContainer maxWidth='xl'>
            <TopBox>
                <HeaderTypography>Your Departments:</HeaderTypography>
                <AddDeptBox>
                    <AddDepartment setDepartments={setDepartments} />
                </AddDeptBox>
            </TopBox>
            <BottomBox>
                {departments.map(dept => (
                    <Dept key={dept._id}>
                        <Text>
                            {dept.name}
                        </Text>
                        <Text>
                            {` Total Employees: ${dept.numberOfEmployee}`}
                        </Text>
                        <DetailsLink to={dept._id}>
                            {" For More Details Click Here.."}
                        </DetailsLink>
                        <DeleteButton onClick={()=>handleDelete(dept._id)} color="warning">
                            Delete
                        </DeleteButton>
                    </Dept>
                ))}
            </BottomBox>
        </MainContainer>
    )
}

export default All;