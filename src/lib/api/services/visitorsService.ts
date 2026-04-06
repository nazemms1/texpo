import client from '../client';
import type { ApiResponse, VisitorInfoApiItem, VisitorsPageData } from '@/src/types/api';

export const visitorsService = {
  getVisitorInfo: () =>
    client.get<never, ApiResponse<VisitorInfoApiItem[]>>('/api/visitors'),

  getVisitorsData: () =>
    client.get<never, ApiResponse<VisitorsPageData>>('/api/our-visitors'),
};
