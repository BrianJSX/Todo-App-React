import axiosService from '../common/AxiosSevice';
import {URL_SERVER} from '../constants/ConfigUrl';

const url = '/task'

export const getListTask = () => { 
    return axiosService.get(`${URL_SERVER}/${url}`);
}