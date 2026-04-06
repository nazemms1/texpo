import client from '../client';
import type { ApiResponse, TexpoPageData } from '@/src/types/api';

export const texpoPageService = {
  getTexpoPageData: () =>
    client.get<never, ApiResponse<TexpoPageData>>('/api/texpo-page'),
};
