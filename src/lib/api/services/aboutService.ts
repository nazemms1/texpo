import client from '../client';
import type { ApiResponse, AboutApiData } from '@/src/types/api';

export const aboutService = {
  getAbout: () =>
    client.get<never, ApiResponse<AboutApiData>>('/api/about'),
};
