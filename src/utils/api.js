import {API_URL, API_TOKEN} from '@env';
import axios from 'axios';

const GET_CITIES_API = `${API_URL}data/2.5/find?units=metric&lat=23.68&lon=90.35&cnt=50&appid=${API_TOKEN}`;

const get = async url => await axios.get(url);

const getCities = () => get(GET_CITIES_API);
export default {getCities};
