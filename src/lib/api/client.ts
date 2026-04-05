import axios, { AxiosError, AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


client.interceptors.response.use(
  (response: AxiosResponse) => response.data,

  (error: AxiosError<{ message?: string; errors?: Record<string, string[]> }>) => {
    if (!error.response) {
      return Promise.reject(new Error('Network error. Please check your connection.'));
    }

    const { status, data } = error.response;

    let message: string;

    switch (true) {
      case status === 400:
        message = data?.message ?? 'Invalid request. Please check your input.';
        break;

      case status === 401:
      case status === 403:
        message = 'Access denied.';
        break;

      case status === 404:
        message = 'The requested resource was not found.';
        break;

      case status === 422: {
        const fieldErrors = data?.errors;
        if (fieldErrors) {
          const first = Object.values(fieldErrors)[0];
          message = Array.isArray(first) ? first[0] : String(first);
        } else {
          message = data?.message ?? 'Validation failed.';
        }
        break;
      }

      case status >= 500:
        message = 'Server error. Please try again later.';
        break;

      default:
        message = data?.message ?? 'An unexpected error occurred.';
    }

    return Promise.reject(new Error(message));
  },
);

export default client;
