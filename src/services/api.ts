import axios from 'axios';

const api = axios.create({
  baseURL: 'http://IP.DA.MAQUINA:3333',
});

export default api;
