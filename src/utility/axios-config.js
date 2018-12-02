import axios from 'axios';
import {BASE_URL} from './constants';
export default instance = axios.create({
    baseURL: BASE_URL
});
