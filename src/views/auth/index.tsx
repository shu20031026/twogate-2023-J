declare const liff: any;

import { LiffMockPlugin } from '@line/liff-mock';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import Script from 'next/script';
import { useContext } from 'react';

import { AuthContext } from '../components/contexts/authContext';

const liffId = process.env.NEXT_PUBLIC_LIFF_ID!;
// const [lineChannelId, _] = liffId.split('-');

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID,
};

initializeApp(firebaseConfig);

export const Authenticated = () => {
  const auth = getAuth();
  const { setUser: setUserContext } = useContext(AuthContext);

  const login = async (): Promise<void> => {
    const idToken = liff.getIDToken()!;
    console.info(idToken, 'をもとにfirebase tokenを取得する');
    // const { token } = await apiLogin({ idToken, channelId: lineChannelId })
    // await signInWithCustomToken(auth, token)
  };

  const setUser = async (userId: string): Promise<void> => {
    // setUserContext(user)
  };

  const liffInit = async () => {
    const handleError = (err: any) => {
      console.error(err);
      setUserContext(null);
    };

    try {
      if (process.env.NODE_ENV === 'development') {
        liff.use(new LiffMockPlugin());
        // @ts-ignore
        await liff.init({ liffId, mock: true });
        liff.login();
      } else {
        await liff.init({ liffId });
      }

      await login();

      onAuthStateChanged(
        auth,
        async (user) => {
          try {
            if (user) {
              await setUser(user.uid);
            }
          } catch (err) {
            handleError(err);
          }
        },
        (err) => handleError(err),
      );
    } catch (err) {
      handleError(err);
    }
  };

  return <Script src='https://static.line-scdn.net/liff/edge/2/sdk.js' onLoad={() => liffInit()} />;
};
