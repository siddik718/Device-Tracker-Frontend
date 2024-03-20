import { useEffect, useState } from "react";
import AddDevice from "./AddDevice";
// import { useNavigate } from "react-router-dom";
import { GET } from "../../libs/handleApi";
import { CustomContainer, CustomTopBox, Description, DetailsLink, Device, DeviceDescription, DeviceHeader, DeviceType, Devices, Link, LinkBox } from "./styledComponents";

const AllDevice = () => {

  // const navigate = useNavigate();
  const [devices, setDevices] = useState([]);

  useEffect(() => {

    const populate = async () => {
      try {
        const endpoint = import.meta.env.VITE_SERVER + 'dev';
        const res = await GET(endpoint);
        console.log('INside all : ',res.data.payload);
        setDevices(res.data.payload);
      } catch (error) {
        console.log(error);
      }
    }
    populate();

  }, []);

  return (
    <CustomContainer maxWidth='xl'>
      <CustomTopBox >
        <LinkBox>
          <p>All Available Devices: </p>
          <Link href="#add-device">
            <p>Add Device </p>
          </Link>
        </LinkBox>
        <Devices>
          {devices.length > 0 && devices.map(device => (
            <Device key={device._id}>
              <DeviceHeader>
                <DeviceType>
                  {device._id}
                  {device?.devices?.length > 1 ? "s : " : " : "}
                </DeviceType>
                <DetailsLink to={`/devices/${device._id}`}> More Details </DetailsLink>
              </DeviceHeader>
              <DeviceDescription>
                {device?.devices?.map(innerDevice => (
                  <Description key={innerDevice._id}>
                    {innerDevice.description}
                  </Description>
                ))}
              </DeviceDescription>
            </Device>
          ))}
        </Devices>
      </CustomTopBox>
      <div id='add-device'>
        <AddDevice />
      </div>
    </CustomContainer>
  )
}

export default AllDevice;