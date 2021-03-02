import axiosService from '../common/AxiosSevice';
import { URL_SERVER } from '../constants/ConfigUrl';

const url = '/task';

export const getListTask = () => {
    return axiosService.get(`${URL_SERVER}/${url}`);
};

export const postListTask = (data) => {
    return axiosService.post(`${URL_SERVER}/${url}`, data);
};

export const deleteListTask = (id) => {
    return axiosService.delete(`${URL_SERVER}/${url}/${id}`);
};
