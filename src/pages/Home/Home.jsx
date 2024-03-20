import { useEffect, useState } from "react";
import { CBox, ClickCell, DoubleBox, HeaderAction, MyCard, MyCardContent, MyCardHeader, MyContainer, Text } from "../style";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { GET } from '../../libs/handleApi';
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [recentRecord, setRecentRecord] = useState({});
  const [recentEmployee, setRecentEmployee] = useState({});
  const [deviceStat, setDeviceStat] = useState({});
  const [total, setTot] = useState('');
  const [dept, setDept] = useState([]);
  useEffect(() => {
    const base = import.meta.env.VITE_SERVER;
    const fetch = async () => {
      const record = await GET(base + 'rec/one');
      const employee = await GET(base + 'emp/one');
      const dept = await GET(base + 'dept/one');
      const device = await GET(base + 'dev/one');

      if (record.status !== 200 || employee.status !== 200 || dept.status !== 200 || device.status !== 200) {
        alert('Check your internet');
      } else {
        setRecentRecord(record.data.payload);
        setRecentEmployee(employee.data.payload);
        setDept(dept.data.payload.dept);
        setTot(dept.data.payload.total);
        setDeviceStat(device.data.payload);
        // console.log(record, employee, dept, device);
      }
    }
    fetch();
  }, []);

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate('departments/' + id);
  }

  return (
    <MyContainer maxWidth='xl'>

      <DoubleBox>
        <CBox flex='3' style={{}}>
          <MyCard raised>
            <MyCardHeader
              title={<Text> Device: {recentRecord.device} </Text>}
              subheader={<Text> Employee: {recentRecord.employee} </Text>}
              action={<HeaderAction to='/records'>All Records</HeaderAction>}
            />
            <MyCardContent>
              <Text>
                Status: {recentRecord.available ? 'Unbooked' : 'booked'}
              </Text>
              <Text>
                Condition: {recentRecord.condition}
              </Text>
              <Text>
                Given Date: {new Date(recentRecord.givenDate).toLocaleString()}
              </Text>
              <Text>
                Return Condition: {recentRecord.returnCondition}
              </Text>
              <Text>
                Return Date: {new Date(recentRecord.returnDate).toLocaleString()}
              </Text>
            </MyCardContent>
          </MyCard>
        </CBox>

        <CBox flex='3'>
          <MyCard raised>
            <MyCardHeader
              title={<Text> Employee: {recentEmployee.name} </Text>}
              subheader={<Text> Dept: {recentEmployee.dept} </Text>}
              action={<HeaderAction to='/employees'>All Employees</HeaderAction>}
            />
            <MyCardContent>
              <Text>
                Email: {recentEmployee.email}
              </Text>
              <Text>
                Designation: {recentEmployee.designation}
              </Text>
            </MyCardContent>
          </MyCard>
        </CBox>

      </DoubleBox>

      <DoubleBox>
        <CBox flex='4'>
          <MyCard raised>
            <MyCardHeader
              title={<Text> Departmets: {total} </Text>}
              action={<HeaderAction to='/departments'>All Departments</HeaderAction>}
            />
            <MyCardContent>
              <Table size="small">
                <TableBody>
                  {dept.length > 0 && dept.map(d => (
                    <TableRow key={d._Id} hover>
                      <TableCell align="center">{d.name}</TableCell>
                      <ClickCell align='center' onClick={() => handleClick(d._id)}>Details</ClickCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </MyCardContent>
          </MyCard>
        </CBox>
        <CBox flex='2'>
          <MyCard raised>
            <MyCardHeader
              title={<Text> Total Device: {deviceStat.totalDevices} </Text>}
              subheader={<>
                <Text> Allocated: {deviceStat.allocatedDevices} </Text>
                <Text> Not Allocated: {deviceStat.notAllocatedDevices}  </Text>
              </>}
              action={<HeaderAction to='/devices'>All Devices</HeaderAction>}
              style={{
                borderBottom: 'none',
              }}
            />
          </MyCard>
        </CBox>
      </DoubleBox>

    </MyContainer>
  )
}

export default Home;