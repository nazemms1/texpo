import client from '../client';
import type { ApiResponse, HomeResponse } from '@/src/types/api';

export const homeService = {
  getHomeData: () =>
    client.get<never, ApiResponse<HomeResponse>>('/api/homepage'),
};
