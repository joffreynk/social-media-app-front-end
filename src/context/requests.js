import axios from 'axios';
import url from './url';

export const makeRequest = axios.create({
  baseURL: url,
  mode:'cors',
  headers: {
      withCredentials: true,
      token: localStorage.getItem('socialMediaAppToken')?JSON.parse(localStorage.getItem('socialMediaAppToken')).token : null,
  }
})