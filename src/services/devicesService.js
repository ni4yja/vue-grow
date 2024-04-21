import { apiCall } from '@/services/apiClient';
import { DEVICES_LIST_QUERY } from '@/graphql/graphql-queries';

export async function fetchDevices(variables) {
  const response = await apiCall({
    url: 'https://cdn.emnify.net/graphql',
    method: 'POST',
    data: {
      query: DEVICES_LIST_QUERY,
      variables,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  });
  return response.data.endpointsQuery.items;
}
