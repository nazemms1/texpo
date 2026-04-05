import client from '../client';
import type { ApiResponse, VisitorInfoApiItem } from '@/src/types/api';

export const visitorsService = {
  getVisitorInfo: () =>
    client.get<never, ApiResponse<VisitorInfoApiItem[]>>('/api/visitors'),
};
