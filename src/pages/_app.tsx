import { AppProps } from 'next/app';
import 'ress';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import '~/styles/globals.css';
import { useScrollTop } from '../views/hooks/useScrollTop';

import { Authenticated } from '../views/auth';
import { AuthProvider } from '../views/components/contexts/authContext';
import { DefaultLayout } from '../views/layouts/Default';

const App = ({ Component, pageProps, router }: AppProps) => {
  useScrollTop();
  return (
    <>
      <Head>
        <title />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <AuthProvider>
        <Authenticated />

        <DefaultLayout>
          <Component {...pageProps} key={router.asPath} />
        </DefaultLayout>
      </AuthProvider>
    </>
  );
};

export default App;
