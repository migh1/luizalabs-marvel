import axios from 'axios';

const secure = process.env.NODE_ENV === 'production' ? 's' : '';

const instance = axios.create({
  baseURL: `http${secure}://gateway.marvel.com`,
});

export default instance;
