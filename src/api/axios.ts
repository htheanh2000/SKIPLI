import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
const BASE_URL = 'http://localhost:3000'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
})

export type TConfig = AxiosRequestConfig<Object>;
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const {user: userState} = JSON.parse(window.localStorage.getItem('persist:root') || '');
    if (!userState) return config;
    const {user} = JSON.parse(userState) || ''
    if(!user) return config;
    if (config?.headers) {
        config.headers.user = user
    }
    return config;
  });

  let counter = 1;

  api.interceptors.response.use(
    (value) => {
      return Promise.resolve(value);
    },
    (error) => {
      const { isAxiosError = false, response = null } = error;
  
      if (isAxiosError && response && response.status === 401) {
        // User redirection rule for login page
        return Promise.reject(error);
      }
      if (isAxiosError && response && response.status === 403) {
        // User redirection rule for disallowed page
        return Promise.reject(error);
      }
      if (
        error.response.status >= 500 &&
        counter < Number(process.env.REACT_APP_RETRY || 3)
      ) {
        counter++;
        return api.request(error.config);
      }
      counter = 1;
      return Promise.reject(error);
    }
  );
  
export default api ;
  
