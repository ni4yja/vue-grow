import axios from 'axios';

export async function apiCall({
  url,
  method = 'GET',
  data,
  headers,
}) {
  try {
    const response = await axios({
      url: url,
      method: method,
      headers: {
        ...headers,
      },
      data: data,
    });
    return response.data;
  } catch (error) {
    console.error('API call failed:', error.message);
    throw new Error(
      error.response?.data?.message ||
        'Something went wrong',
    );
  }
}
