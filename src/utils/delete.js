import { DELETE } from "../libs/handleApi";


export const deleteDevice = async (devices,id) => {
    try {
        const endpoint = import.meta.env.VITE_SERVER + `dev/${id}`;
        await DELETE(endpoint);
        const newdevices = devices.filter(dev => dev._id != id);
        return newdevices;
    } catch (error) {
        throw {
            status: 404,
            message: error.message,
        }
    }
}

export const deleteDepartment = async (department, id) => {
    try {
        const endpoint = import.meta.env.VITE_SERVER + 'dept/' + id;
        await DELETE(endpoint);
        return department.filter(dev => dev._id != id);
    } catch (error) {
        throw {
            status: 404,
            message: error.message,
        }
    }
}

export const deleteEmployee = async (emp, id) => {
    const endpoint = import.meta.env.VITE_SERVER + 'emp/' + id;
    const response = await DELETE(endpoint);
    if(response.status === 200) {
        return emp.filter(dev => dev._id != id);
    }else {
        alert(response.response.data.message);
        return false;
    }
}


export const deleteRecord = async (record, id) => {
    const endpoint = import.meta.env.VITE_SERVER + 'rec/' + id;
    const response = await DELETE(endpoint);
    if(response.status === 200) {
        return record.filter(dev => dev._id != id);
    }else {
        alert(response.response.data.message);
        return false;
    }
}
