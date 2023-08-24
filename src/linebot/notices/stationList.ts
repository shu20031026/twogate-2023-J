export type route = '鹿児島本線' | '日豊本線' | '日田彦山線' | '若松線' | '北九州モノレール';

export type StationData = {
  name: string; // 駅名
  route: route[]; // 路線名
  image?: string; // 画像
  scenario: string[]; // シナリオ名(key)
  text?: string; //説明文
  references: string[]; // 参考URL
};

export const stationList: StationData[] = [
  {
    name: '小倉駅',
    route: ['日豊本線', '日田彦山線', '若松線', '鹿児島本線', '北九州モノレール'],
    image: '',
    scenario: [''],
    text: '',
    references: [],
  },
];
