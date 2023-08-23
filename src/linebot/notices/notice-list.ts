import { CustomButton } from '../utils/makeButtonTemplate';

interface noticeObj {
  [key: string]: CustomButton;
}

export const noticeList: noticeObj = {
  A: {
    BackgroundColor: '#ffffff',
    altText: 'A',
    title: 'A',
    text: 'A test textttttttt',
    actions: [
      {
        type: 'message',
        label: 'B',
        text: 'B',
      },
      {
        type: 'message',
        label: 'C',
        text: 'C',
      },
    ],
  },
  B: {
    BackgroundColor: '#ffffff',
    altText: 'B',
    title: 'B',
    text: 'B test textttttttt',
    actions: [
      {
        type: 'message',
        label: 'Yes',
        text: 'Yes',
      },
      {
        type: 'message',
        label: 'No',
        text: 'No',
      },
    ],
  },
  C: {
    BackgroundColor: '#ffffff',
    altText: 'C',
    title: 'C',
    text: 'C test textttttttt',
    actions: [
      {
        type: 'message',
        label: 'A',
        text: 'A',
      },
      {
        type: 'message',
        label: 'B',
        text: 'B',
      },
    ],
  },
};
