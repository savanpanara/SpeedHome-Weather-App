import {API_URL, API_TOKEN} from '@env';
import axios from 'axios';
const GET_CITIES_API = `${API_URL}data/2.5/find?units=metric&lat=23.68&lon=90.35&cnt=50&appid=${API_TOKEN}`;
const GET_TEMPERATURE_API = params =>
  `${API_URL}data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=8dc478c552009be10caa2621da8b8fd5&units=metric`;

const get = async url => await axios.get(url);

const getCities = () => get(GET_CITIES_API);
const getTemperature = params => get(GET_TEMPERATURE_API(params));
export default {getCities, getTemperature};
