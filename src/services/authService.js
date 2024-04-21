import { apiCall } from '@/services/apiClient';

export async function authenticate(appToken) {
  return apiCall({
    url: 'https://cdn.emnify.net/api/v1/authenticate',
    method: 'POST',
    data: {
      application_token: appToken,
    },
  });
}
