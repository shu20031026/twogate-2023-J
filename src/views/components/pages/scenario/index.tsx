import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../contexts/authContext';
import { DefaultLayout } from '~/src/views/layouts/Default';
import type { UserProgress } from '~/src/types/models';
import { useFetchUserData } from '~/src/hooks/useFetchData';
import { scenarioKeys } from '~/src/linebot/notices/notice-list';
import liff from '@line/liff';

const ScenarioPage: NextPage = () => {
  // const { user } = useContext(AuthContext);
  // const { responseData, error, isLoading, fetchData } = useFetchUserData(user!.userUid);

  // useEffect(() => {
  //   fetchData();
  //   console.log(responseData);
  // }, [fetchData]);

  // console.log('a');
  // console.log(process.env.NEXT_PUBLIC_LIFF_SCENARIO_ID);

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && window.liff) {
  //     window.liff
  //       .init({
  //         liffId: process.env.NEXT_PUBLIC_LIFF_SCENARIO_ID!,
  //       })
  //       .catch((err) => {
  //         console.error('LIFF Initialization failed', err);
  //       });
  //   }
  // }, []);

  // const userData = responseData as UserProgress;

  // const sendMessage = (message: string) => {
  //   if (liff.isInClient()) {
  //     liff
  //       .sendMessages([
  //         {
  //           type: 'text',
  //           text: message,
  //         },
  //       ])
  //       .then(() => {
  //         liff.closeWindow();
  //       })
  //       .catch((err) => {
  //         console.error('Error sending message:', err);
  //       });
  //   } else {
  //     alert('この機能はLINEアプリ内でのみ利用可能です。');
  //   }
  // };
  // return (
  //   // <DefaultLayout>
  //   <div className={'bg-blue-100 text-gray-800 p-6'}>
  //     <h1 className={'text-2xl text-blue-600 text-center font-bold my-4'}>KitaQ</h1>
  //     <h1 className={'text-4xl text-blue-600 text-center font-bold my-4'}>シナリオ一覧</h1>

  //     {isLoading ? (
  //       <div></div>
  //     ) : (
  //       <>
  //         <table className='w-full mb-6 bg-white rounded-lg shadow-md'>
  //           <tbody>
  //             <tr className='border-b border-blue-200'>
  //               <td className='p-2'>プレイヤー名</td>
  //               <td className='p-2'>：{user!.name}</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //         <div>
  //           <p>読了したシナリオの一覧だよ！</p>
  //           <p>シナリオのボタンを押すとそこからゲームを再開できます！</p>
  //           <p>全ルートコンプリートを目指そう！</p>
  //         </div>
  //         <div className='w-full flex-wrap'>
  //           {userData !== undefined &&
  //             scenarioKeys.map((item, index) => {
  //               if (userData.readScenario.includes(item)) {
  //                 return (
  //                   <div key={index} className='w-full p-1.5'>
  //                     <button
  //                       className='w-full p-4 bg-white rounded-lg shadow-lg relative'
  //                       onClick={() => sendMessage(item)}
  //                     >
  //                       <h1 className='text-center font-medium text-xl text-gray-800'>{item}</h1>
  //                     </button>
  //                   </div>
  //                 );
  //               } else {
  //                 return (
  //                   <div key={index} className='w-full p-1.5'>
  //                     <div className='w-full p-4 bg-gray-600 rounded-lg relative'>
  //                       <h1 className='text-center font-medium text-xl text-white'>未開放</h1>
  //                     </div>
  //                   </div>
  //                 );
  //               }
  //             })}
  //         </div>
  //       </>
  //     )}
  //   </div>
  //   // </DefaultLayout>
  // );
  return <div>bbb</div>;
};

export default ScenarioPage;
