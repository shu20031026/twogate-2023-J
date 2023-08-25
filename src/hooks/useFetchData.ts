import { useCallback, useState } from 'react';
import { fetchUserData } from '../linebot/firestore';
import { DocumentData } from 'firebase/firestore';

export const useFetchUserData = (uid: string) => {
  const [responseData, setResponseData] = useState<DocumentData | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [isLording, setIsLording] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setIsLording(true);
    try {
      const userData = await fetchUserData(uid);
      setResponseData(userData);
      setError(false);
      setIsLording(false);
      return;
    } catch (e) {
      console.error(e);
      setError(true);
      setIsLording(false);
      return;
    }
  }, [uid]);
  return { responseData, error, isLording, fetchData };
};
