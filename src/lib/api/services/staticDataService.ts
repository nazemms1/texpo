import client from '../client';
import type { ApiResponse } from '@/src/types/api';

export interface SponsorType {
  id: number;
  name: string;
  color: string;
}

export const staticDataService = {
  getSectors: () =>
    client.get<never, ApiResponse<string[]>>('/api/static-data/sectors'),
  getCountries: () =>
    client.get<never, ApiResponse<string[]>>('/api/static-data/countries'),
  getSponsorTypes: () =>
    client.get<never, ApiResponse<SponsorType[]>>('/api/static-data/sponsors-types'),
};
