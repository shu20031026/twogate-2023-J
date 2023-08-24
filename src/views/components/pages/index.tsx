import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../contexts/authContext';
import { DefaultLayout } from '../../layouts/Default';
import { UserProgress } from '~/src/types/models';

const HomePage: NextPage = () => {
  const [userData, setUserData] = useState<UserProgress | null>(null);
  const { user } = useContext(AuthContext);

  return (
    <DefaultLayout>
      <div style={{ marginTop: '20%' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: 8, textAlign: 'center' }}>ようこそ、LIFFの世界へ</h1>

        <table style={{ margin: 'auto' }}>
          <tbody>
            <tr>
              <td>LINE表示名</td>
              <td>：{user!.name}</td>
            </tr>
            <tr>
              <td>userUid</td>
              <td>：{user!.userUid}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
