import React, { useEffect } from 'react';
import { StationData } from '~/src/linebot/notices/stationList';
import { UserProgress } from '~/src/types/models';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: StationData | undefined;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, content }) => {
  useEffect(() => {
    const originalPosition = window.getComputedStyle(document.body).position;
    const originalTop = window.getComputedStyle(document.body).top;
    const scrollY = window.scrollY;

    if (isOpen) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      window.scrollTo(0, parseInt(document.body.style.top || '0') * -1);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='absolute inset-0 bg-black opacity-50 z-10' onClick={onClose}></div>
      <div className='w-full p-6 z-20 text-black'>
        <div className='bg-gray-100 p-8 rounded-lg shadow-2xl' style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <img src={content?.image} alt={content?.name} className='w-full h-48 object-cover rounded-md mb-4' />
          <h1 className='text-2xl font-bold mb-4'>{content?.name}</h1>
          <h2 className='text-xl mb-2'>路線:</h2>
          <ul className='mb-4'>
            {content?.route.map((r, index) => (
              <li key={index} className='inline-block bg-blue-500 text-white px-2 py-1 rounded mr-2 mb-2'>
                {r}
              </li>
            ))}
          </ul>
          <p className='text-base leading-relaxed mb-4'>{content?.text}</p>
          <h2 className='text-xl mb-2'>参考リンク:</h2>
          {content?.references.map((ref, index) => (
            <div key={index} className='mb-4' style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
              <a href={ref.url} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                {ref.about}
              </a>
            </div>
          ))}
          <button
            className='mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition duration-300'
            onClick={onClose}
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
