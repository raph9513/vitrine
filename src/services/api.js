// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // URL de votre backend
});

export const getItems = async () => {
  const response = await api.get('/items');
  return response.data;
};

