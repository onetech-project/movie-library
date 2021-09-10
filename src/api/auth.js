import { loginUrl } from './constant';
import { HttpHelper } from '../utils';

export const login = ({ email, password }) => HttpHelper.post(loginUrl, { email, password });
