export async function apiCall({ url, method, data, headers }) {
  try {
    const response = await fetch(url, {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: data ? JSON.stringify(data) : null,
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || 'Something went wrong');
    }
    return responseData;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}
