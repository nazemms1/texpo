import client from '../client';
import type { ApiResponse, AboutApiData, AboutUsApiData } from '@/src/types/api';

export const aboutService = {
  getAbout: () =>
    client.get<never, ApiResponse<AboutApiData>>('/api/about'),

  getAboutUsData: () =>
    client.get<never, ApiResponse<AboutUsApiData>>('/api/about-us'),
};
