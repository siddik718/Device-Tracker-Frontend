
import React from 'react'
import AddRecord from './AddRecord';
import { Text } from '../employee/styledComponents';
import { Action, ActionButtons, Content, Header, RecordCard, RecordContainer, Records, TopBox, Wrapper } from './styledComponents';
import { GET } from '../../libs/handleApi';
import { deleteRecord } from '../../utils/delete';
import UpdateModelRec from '../../components/UpdateModalRec';


const AllRecords = () => {
    const [records, setRecords] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState({});

    const handleOpen = (one_record) => {
        setData(one_record);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        const fetch = async () => {
            const endpoint = import.meta.env.VITE_SERVER + 'rec';
            const res = await GET(endpoint);
            if (res.status === 200) {
                setRecords(res.data.payload);
            } else {
                alert('Internet Issue.🤣😒');
            }
        }
        fetch();
    }, []);

    const handleDelete = async (id) => {
        const res = await deleteRecord(records, id);
        if (res) {
            setRecords(res);
        }
    }

    return (
        <RecordContainer maxWidth='xl'>
            <TopBox>
                <Text p="7px 0" size='large' color='#1145de'>All Records Are Here </Text>
                <a href="#add">
                    <Text>
                        Add A New Record
                    </Text>
                </a>
            </TopBox>

            <Records>
                {records.length > 0 && records.map(rec => (
                    <RecordCard key={rec._id} raised>

                        <Header
                            title={
                                <Text size='large' color="rgb(43 19 117 / 95%)">
                                    Device: {rec.device}
                                </Text>
                            }
                            subheader={
                                <Text color="rgb(43 19 117 / 95%)">
                                    Employee: {rec.employee}
                                </Text>
                            }
                            action={
                                <ActionButtons>
                                    {!rec.available &&
                                        <Action
                                            m="0 0 3px 0"
                                            variant='outlined'
                                            hoverbgcolor="green"
                                            hovertextcolor="white"
                                            onClick={() => handleOpen(rec)}
                                        >Update</Action>
                                    }

                                    <Action
                                        color='warning'
                                        variant='outlined'
                                        textcolor="red"
                                        hoverbgcolor="tomato"
                                        hovertextcolor="white"
                                        onClick={() => handleDelete(rec._id)}
                                    >Remove</Action>
                                </ActionButtons>
                            }
                        />
                        <Content>
                            <Text color={rec.available ? "blue" : "red"} bold p="2px">
                                Status: {rec.available ? 'not blooked' : 'Booked'}
                            </Text>
                            <Text color="gray" p="2px">
                                Condition: {rec.condition}
                            </Text>
                            <Text color="gray" p="2px">
                                Given Date: {new Date(rec.givenDate).toLocaleString()}
                            </Text>
                            <Text color="gray" p="2px">
                                Return Condition: {rec.returnCondition ? rec.returnCondition : 'Still using'}
                            </Text>
                            <Text color="gray" p="2px 2px 0px 2px">
                                Return Date: {rec.returnDate ? new Date(rec.returnDate).toLocaleString() : 'Not returned yet'}
                            </Text>
                        </Content>

                    </RecordCard>

                ))}
            </Records>

            <UpdateModelRec
                open={open}
                handleClose={handleClose}
                data={data}
            />

            <Wrapper id="add">
                <AddRecord setRecords={setRecords} />
            </Wrapper>
        </RecordContainer>
    )
}

export default AllRecords;