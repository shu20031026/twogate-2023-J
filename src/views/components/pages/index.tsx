import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../contexts/authContext';
import { DefaultLayout } from '../../layouts/Default';
import type { UserProgress } from '~/src/types/models';
import { useFetchUserData } from '~/src/hooks/useFetchData';
import { StationData, stationList } from '~/src/linebot/notices/stationList';
import { Modal } from '../domain/modal';

const HomePage: NextPage = () => {
  const { user } = useContext(AuthContext);
  const { responseData, error, isLoading, fetchData } = useFetchUserData(user!.userUid);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
    console.log(responseData);
  }, [fetchData]);

  const userData = responseData as UserProgress;
  const [modalContent, setModalContent] = useState<StationData>();

  const openModalHandler = (content: StationData) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <DefaultLayout>
      <div className={'bg-orange-100 text-gray-800 p-6'}>
        <h1 className={'text-2xl text-orange-600 text-center font-bold my-4'}>KitaQ</h1>
        <h1 className={'text-4xl text-orange-600 text-center font-bold my-4'}>駅図鑑</h1>

        {isLoading ? (
          <div></div>
        ) : (
          <>
            <table className='w-full mb-6 bg-white rounded-lg shadow-md'>
              <tbody>
                <tr className='border-b border-orange-200'>
                  <td className='p-2'>プレイヤー名</td>
                  <td className='p-2'>：{user!.name}</td>
                </tr>
                {/* <tr>
                  <td className='p-2'>userUid</td>
                  <td className='p-2'>：{user!.userUid}</td>
                </tr> */}
              </tbody>
            </table>
            <div>
              <p>シナリオを進めると図鑑が開放！</p>
              <p>解放済みの駅をタップすると駅や地域の情報が見れるよ</p>
            </div>
            <div className='flex w-full flex-wrap'>
              {userData !== undefined &&
                stationList.map((item, index) => {
                  if (userData.readScenario.includes(item.keyScenario)) {
                    return (
                      <div key={index} className='w-1/3 p-1.5' onClick={() => openModalHandler(item)}>
                        <div className='w-full bg-white h-40 rounded-lg shadow-md relative'>
                          <h1 className='text-center font-medium text-gray-800'>{item.name}</h1>
                          <img
                            src={item.image}
                            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto max-h-32'
                          ></img>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className='relative w-1/3 p-1.5'>
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 p-0 z-10'>
                          <p className='text-white font-bold text-lg px-4 py-1 rounded whitespace-nowrap'>未開放</p>
                        </div>
                        <div className='w-full bg-gray-300 h-40 rounded-lg shadow-md relative'>
                          <h1 className='text-center text-white font-medium'>???</h1>
                          <img
                            src={item.image}
                            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto max-h-32 filter blur-md'
                          ></img>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </>
        )}
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} content={modalContent} />
      </div>
    </DefaultLayout>
  );
  // return (
  //   <DefaultLayout>
  //     <div className={'bg-red-50 p-6'}>
  //       <h1
  //         style={{ fontSize: '2rem', marginBottom: 8, textAlign: 'center' }}
  //         className={'text-yellow-500 text-center font-bold my-2'}
  //       >
  //         KitaQ
  //       </h1>

  //       {isLoading ? (
  //         <div></div>
  //       ) : (
  //         <>
  //           <table>
  //             <tbody>
  //               <tr>
  //                 <td>LINE表示名</td>
  //                 <td>：{user!.name}</td>
  //               </tr>
  //               <tr>
  //                 <td>userUid</td>
  //                 <td>：{user!.userUid}</td>
  //               </tr>
  //               {/* <tr>
  //             <td>Data</td>
  //             <td>：{JSON.stringify(responseData)}</td>
  //           </tr> */}
  //             </tbody>
  //           </table>
  //           <div className='flex w-full flex-wrap'>
  //             {userData !== undefined &&
  //               stationList.map((item, index) => {
  //                 if (userData.readScenario.includes(item.keyScenario)) {
  //                   return (
  //                     <div key={index} className='w-1/3 p-1.5' onClick={() => openModalHandler(item)}>
  //                       <div className='w-full bg-white h-40 rounded'>
  //                         <h1 className='text-center font-medium'>{item.name}</h1>
  //                         <img src={item.image}></img>
  //                       </div>
  //                     </div>
  //                   );
  //                 } else {
  //                   return (
  //                     <div key={index} className='relative w-1/3 p-1.5'>
  //                       <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 p-0  z-10 '>
  //                         <p className='text-white font-bold text-lg'>未開放</p>
  //                       </div>
  //                       <div className='w-full bg-gray-500 h-40 rounded'>
  //                         <h1 className='text-center text-white font-medium'>???</h1>
  //                         <img src={item.image} className='filter blur-sm grayscale'></img>
  //                       </div>
  //                     </div>
  //                   );
  //                 }
  //               })}
  //           </div>
  //         </>
  //       )}
  //       <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} content={modalContent} />
  //     </div>
  //   </DefaultLayout>
  // );
};

export default HomePage;
