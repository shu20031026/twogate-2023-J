import { Action, Message, TemplateMessage } from '@line/bot-sdk';

export type CustomButton = {
  type: 'message';
  image?: string;
  altText: string;
  title: string;
  text: string;
  actions: Action[];
};

const path = process.env.NEXT_PUBLIC_ROOT_PATH;

export const makeCustomButton = (arg: CustomButton): TemplateMessage => {
  return {
    type: 'template',
    altText: arg.altText || 'This is a buttons template',
    template: {
      type: 'buttons',
      thumbnailImageUrl: `${path}/${arg.image}`,
      imageSize: 'cover',
      imageBackgroundColor: '#ffffff',
      title: arg.title,
      text: arg.text.replace(/<br>/g, '\n'),
      actions: arg.actions,
    },
  } as const;
};
