import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecommerce-backendv1.herokuapp.com'
});

export default api;