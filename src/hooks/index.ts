"use client";

import API from "@/utils/api";
import { useState, useEffect, useCallback } from "react";

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useGetAPI = <T>(endpoint: string): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get<T>(endpoint);
      setData(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};
