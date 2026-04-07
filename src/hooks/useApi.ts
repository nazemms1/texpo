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

// Simple in-memory global cache to prevent redundant requests during navigation
const globalCache = new Map<string, { data: any; timestamp: number }>();
// Default TTL (Time-To-Live): 5 minutes
const DEFAULT_TTL = 5 * 60 * 1000;

export function useApi<T>(
  fetchFn: () => Promise<{ data: T }>,
  deps: any[] = [],
  cacheKey?: string // Pass a key to enable caching (e.g. 'homepage', 'about')
): UseApiReturn<T> {
  // Check if we already have it in cache first
  const getCachedData = useCallback(() => {
    if (!cacheKey) return null;
    const entry = globalCache.get(cacheKey);
    if (entry && Date.now() - entry.timestamp < DEFAULT_TTL) {
      return entry.data as T;
    }
    return null;
  }, [cacheKey]);

  const [state, setState] = useState<UseApiState<T>>(() => {
    const cached = getCachedData();
    return {
      data: cached,
      loading: !cached, // Only show loading if we don't have cached data
      error: null,
    };
  });

  const fetchFnRef = useRef(fetchFn);
  fetchFnRef.current = fetchFn;

  const execute = useCallback(() => {
    let cancelled = false;

    // If we don't have data, or if we want to revalidate, show loading
    // In this "premium" version, we keep old data visible (Stale-While-Revalidate)
    if (!getCachedData()) {
       setState((prev) => ({ ...prev, loading: true, error: null }));
    }

    fetchFnRef.current()
      .then((response) => {
        if (!cancelled) {
          // Update global cache if key is provided
          if (cacheKey) {
            globalCache.set(cacheKey, { data: response.data, timestamp: Date.now() });
          }
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
  }, [cacheKey, getCachedData, ...deps]);

  useEffect(() => {
    const cleanup = execute();
    return cleanup;
  }, [execute]);

  return { ...state, refetch: execute };
}
