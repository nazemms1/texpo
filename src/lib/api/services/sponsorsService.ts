import client from '../client';
import type { ApiResponse, SponsorApiItem } from '@/src/types/api';

export const sponsorsService = {
  getSponsors: () =>
    client.get<never, ApiResponse<SponsorApiItem[]>>('/api/sponsors'),
};
