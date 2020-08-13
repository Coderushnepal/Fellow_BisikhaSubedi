import axios from 'axios';
import config from '../config';

const http = axios.create({
// Hamro app use garera api call garda tala ko header chain thapeenchha
    baseURL: config.baseUri,
    headers: {
        "Content-Type": "application/json",
    },
});

export default http;