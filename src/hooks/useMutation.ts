'use client';

import { useState, useCallback } from 'react';

interface MutationState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

interface UseMutationReturn<TPayload> extends MutationState {
  submit: (payload: TPayload) => Promise<void>;
  reset: () => void;
}

export function useMutation<TData, TPayload>(
  mutationFn: (payload: TPayload) => Promise<{ data: TData; message?: string }>,
): UseMutationReturn<TPayload> {
  const [state, setState] = useState<MutationState>({
    loading: false,
    error: null,
    success: false,
  });

  const submit = useCallback(
    async (payload: TPayload) => {
      setState({ loading: true, error: null, success: false });
      try {
        await mutationFn(payload);
        setState({ loading: false, error: null, success: true });
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : 'An unexpected error occurred.';
        setState({ loading: false, error: message, success: false });
      }
    },
    [mutationFn],
  );

  const reset = useCallback(() => {
    setState({ loading: false, error: null, success: false });
  }, []);

  return { ...state, submit, reset };
}
