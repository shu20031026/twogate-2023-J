import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../contexts/authContext';
import { DefaultLayout } from '../../layouts/Default';
import { UserProgress } from '~/src/types/models';
import { useFetchUserData } from '~/src/hooks/useFetchData';

const HomePage: NextPage = () => {
  const { user } = useContext(AuthContext);
  const { responseData, error, isLording, fetchData } = useFetchUserData(user!.userUid);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DefaultLayout>
      <div className={'bg-blue-100 h-full'}>
        <h1 style={{ fontSize: '2rem', marginBottom: 8, textAlign: 'center' }} className={'text-red-500'}>
          ようこそ、LIFFの世界へ!!
        </h1>
        <img src='images/richmenu-template.png'></img>
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
            <tr>
              <td>：{isLording}</td>
            </tr>
            <tr>
              <td>Data</td>
              <td>：{JSON.stringify(responseData)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
