import client from '../client';
import type { ApiResponse } from '@/src/types/api';

export const becomeSponsorService = {
  submit: (formData: FormData) =>
    client.post<never, ApiResponse<null>>('/api/requests/become-sponsor', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};
