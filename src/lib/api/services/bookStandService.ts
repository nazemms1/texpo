import client from '../client';
import type { ApiResponse, BookStandPayload } from '@/src/types/api';

export const bookStandService = {
  submit: (payload: BookStandPayload) =>
    client.post<never, ApiResponse<null>>('/api/book-stand', payload),
};
