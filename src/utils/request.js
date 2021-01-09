import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';
const commonHeaders = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};

export const registerUser = async userData => {
  const user = await axios({
    method: 'POST',
    headers: commonHeaders,
    url: `${BASE_URL}/users`,
    data: userData,
  });
  return user;
};

export const loginUser = async userData => {
  const user = await axios({
    method: 'POST',
    headers: commonHeaders,
    url: `${BASE_URL}/users/login`,
    data: userData,
  });
  return user;
};
