import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecommerce-backendv1.herokuapp.com'
  //baseURL: 'http://localhost:3001'
});

export default api;