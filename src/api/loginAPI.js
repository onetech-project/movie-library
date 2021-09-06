import axios from 'axios';
import { loginUrl } from './constant';

export const login = ({ email, password }) => axios.post(loginUrl, { email, password });
