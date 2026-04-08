import client from '../client';
import type { ApiResponse, PublicDataItem } from '@/src/types/api';

export const publicDataService = {
  getPublicData: () =>
    client.get<never, ApiResponse<PublicDataItem[]>>('/api/public-data'),
};
