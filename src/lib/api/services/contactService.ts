import client from '../client';
import type { ApiResponse, ContactFormPayload } from '@/src/types/api';

export const contactService = {
  submit: (payload: ContactFormPayload) =>
    client.post<never, ApiResponse<null>>('/api/contact', payload),
};
