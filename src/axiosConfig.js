
import axios from "axios";

const instance = axios.create({
  baseURL: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params:{
    lang:'pl',
    units: 'metric'
  },
  headers: {
    'x-rapidapi-key': '02c30ea83bmsh8f5d2b9a0ddddb6p102752jsn1d27e2e45326',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
  }
});
export default instance;