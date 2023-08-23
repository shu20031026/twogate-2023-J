import { Action, Message, TemplateMessage } from '@line/bot-sdk';

export type CustomButton = {
  image?: string;
  BackgroundColor?: string;
  altText?: string;
  title: string;
  text: string;
  actions: Action[];
};

export const makeCustomButton = (arg: CustomButton): TemplateMessage => {
  return {
    type: 'template',
    altText: arg.altText || 'This is a buttons template',
    template: {
      type: 'buttons',
      thumbnailImageUrl: arg.image,
      imageSize: 'cover',
      imageBackgroundColor: arg.BackgroundColor,
      title: arg.title,
      text: arg.text.replace(/<br>/g, '\n'),
      actions: arg.actions,
    },
  };
};
