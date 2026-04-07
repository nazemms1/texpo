import client from '../client';
import type { ApiResponse } from '@/src/types/api';

export const staticDataService = {
  getSectors: () =>
    client.get<never, ApiResponse<string[]>>('/api/static-data/sectors'),
  getCountries: () =>
    client.get<never, ApiResponse<string[]>>('/api/static-data/countries'),
};
