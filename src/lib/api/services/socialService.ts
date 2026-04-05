import client from '../client';
import type { ApiResponse, SocialLinkApiItem } from '@/src/types/api';

export const socialService = {
  getSocialLinks: () =>
    client.get<never, ApiResponse<SocialLinkApiItem[]>>('/api/social-links'),
};
