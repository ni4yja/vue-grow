import { apiCall } from '@/services/apiClient';
import { DEVICES_LIST_QUERY } from '@/graphql/graphql-queries';
import { useAuthenticationStore } from '@/stores/authentication.js';
import { storeToRefs } from 'pinia';

export async function fetchDevices(variables) {
  const authenticationStore = useAuthenticationStore();
  const { authToken } = storeToRefs(authenticationStore);

  const response = await apiCall({
    url: 'https://cdn.emnify.net/graphql',
    method: 'POST',
    data: {
      query: DEVICES_LIST_QUERY,
      variables,
    },
    headers: {
      Authorization: `Bearer ${authToken.value}`,
    },
  });
  return response.data.endpointsQuery.items;
}
