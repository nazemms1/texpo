import client from '../client';
import type { ApiResponse, ContactFormPayload, ContactUsApiData } from '@/src/types/api';

export const contactService = {
  submit: (payload: ContactFormPayload) =>
    client.post<never, ApiResponse<null>>('/api/contact', payload),

  getContactInfo: () =>
    client.get<never, ApiResponse<ContactUsApiData>>('/api/contact-us'),
};
