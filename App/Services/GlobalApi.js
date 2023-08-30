import axios from "axios";

const BASE_URL = ""
const API_KEY: ""

const nearbyPlace = () => axios.get(BASE_URL + '/path' + "&key=" + API_KEY)