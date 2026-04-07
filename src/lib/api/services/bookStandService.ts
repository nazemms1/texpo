import client from '../client';
import type { ApiResponse, BookStandPayload } from '@/src/types/api';

export const bookStandService = {
  getStandData: () =>
    client.get<ApiResponse<any>>('/api/book-stand'),
  submit: (payload: BookStandPayload) =>
    client.post<never, ApiResponse<null>>('/api/requests/book-stand', payload),
};
