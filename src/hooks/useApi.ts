'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  refetch: () => void;
}


export function useApi<T>(
  fetchFn: () => Promise<{ data: T }>,
  deps: any[] = [],
): UseApiReturn<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchFnRef = useRef(fetchFn);
  fetchFnRef.current = fetchFn;

  const execute = useCallback(() => {
    let cancelled = false;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    fetchFnRef.current()
      .then((response) => {
        if (!cancelled) {
          setState({ data: response.data, loading: false, error: null });
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setState({ data: null, loading: false, error: err.message });
        }
      });

    return () => {
      cancelled = true;
    };
  }, deps);

  useEffect(() => {
    const cleanup = execute();
    return cleanup;
  }, [execute]);

  return { ...state, refetch: execute };
}
