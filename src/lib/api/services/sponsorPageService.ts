import client from '../client';
import type { ApiResponse } from '@/src/types/api';

export interface SponsorPageSection {
  key: string;
  title: string | null;
  description: string | null;
  'meta-data': any[] | null;
}

export const sponsorPageService = {
  getSponsorPageData: () =>
    client.get<never, ApiResponse<SponsorPageSection[]>>('/api/sponsor-page'),
};
