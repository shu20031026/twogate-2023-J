import { useCallback, useState } from 'react';
import { fetchUserData } from '../linebot/firestore';
import { DocumentData } from 'firebase/firestore';

export const useFetchUserData = (uid: string) => {
  const [responseData, setResponseData] = useState<DocumentData>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const userData = await fetchUserData(uid);
      if (userData === undefined) {
        return null;
      }
      setResponseData(userData);
      setError(null);
      setIsLoading(false);
    } catch (e) {
      const error = e as Error;
      console.error(error);
      setError(error.message || 'An error occurred');
      setIsLoading(false);
    }
  }, [uid]);

  return { responseData, error, isLoading, fetchData };
};
