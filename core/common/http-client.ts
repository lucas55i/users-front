import axios, { AxiosInstance } from "axios";

const buildHttpClient = (baseUrl: string): AxiosInstance => {
  const httpClient = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
  });

  httpClient.interceptors.response.use((response) => {
    if (response.status === 401 || response.status === 403) {
      location.reload();
    }

    return response.data;
  });

  return httpClient;
};

const baseURL = process.env.usersApi as string;
const client = buildHttpClient(baseURL);
export default client;

export { buildHttpClient };
