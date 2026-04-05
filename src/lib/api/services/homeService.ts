import client from '../client';
import type { ApiResponse, HeroApiData, StatApiItem } from '@/src/types/api';

export const homeService = {
  getHero: () => client.get<never, ApiResponse<HeroApiData>>('/api/hero'),

  getStats: () => client.get<never, ApiResponse<StatApiItem[]>>('/api/stats'),
};
