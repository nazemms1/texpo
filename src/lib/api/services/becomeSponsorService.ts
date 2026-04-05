import client from '../client';
import type { ApiResponse, BecomeSponsorPayload } from '@/src/types/api';

export const becomeSponsorService = {
  submit: (payload: BecomeSponsorPayload) =>
    client.post<never, ApiResponse<null>>('/api/become-sponsor', payload),
};
