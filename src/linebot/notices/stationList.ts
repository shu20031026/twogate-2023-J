export type route = '鹿児島本線' | '日豊本線' | '日田彦山線' | '若松線' | '北九州モノレール';

type reference = {
  url: string; // url
  about: string; //なんのURLか
};
export type StationData = {
  name: string; // 駅名
  route: route[]; // 路線名
  image?: string; // 画像
  keyScenario: string; // シナリオ名(key)
  text?: string; //説明文
  references: reference[]; // 参考URL
};

export const stationList: StationData[] = [
  {
    name: '小倉駅',
    route: ['日豊本線', '日田彦山線', '若松線', '鹿児島本線', '北九州モノレール'],
    image: 'https://scrapbox.io/files/64e8666cbf5678001cdd61c3.jpeg',
    keyScenario: '小倉駅に到着',
    text: '北九州市最大の駅。JR九州内では福岡市の博多駅に次ぐ利用者数を誇る。\n駅内にショッピングモールがあったり、駅の外に出ても飲食店や遊ぶ場所は多数あり、小倉だけでも時間を忘れて遊ぶことができる。\n誰もが皆口にする言葉「小倉行こうぜ！」は北九州ではあるあるネタである。',
    references: [
      {
        url: 'https://ja.wikipedia.org/wiki/%E5%B0%8F%E5%80%89%E9%A7%85_(%E7%A6%8F%E5%B2%A1%E7%9C%8C)',
        about: 'wikipedia',
      },
      {
        url: 'https://www.sukesanudon.com/',
        about: '資さんうどん 公式ホームページ',
      },
    ],
  },
  {
    name: '西小倉駅',
    route: ['日豊本線', '日田彦山線', '鹿児島本線'],
    image: 'https://scrapbox.io/files/64e4f9f7a20d5e0035f6557a.png',
    keyScenario: '西小倉へ行く',
    text: '政令指定都市でもある北九州市最大の駅。JR九州内では福岡市の博多駅に次ぐ利用者数を誇る。本州と九州の接点として九州の玄関口の機能を有し、山陽新幹線の全列車が停車する。在来線においても大分市や宮崎市などの東九州の各都市を結ぶ日豊本線の起点であり、また市内最大の大動脈である鹿児島本線が乗り入れる。また、北九州市 - 福岡市間の都市間輸送（インターアーバン）を担う多数の特急列車が運行され、博多駅 - 大分駅を鹿児島本線・日豊本線経由で結ぶ特急「ソニック」は当駅で進行方向を変える。',
    references: [
      {
        url: 'https://ja.wikipedia.org/wiki/%E5%B0%8F%E5%80%89%E9%A7%85_(%E7%A6%8F%E5%B2%A1%E7%9C%8C)',
        about: 'wikipedia',
      },
      {
        url: 'https://www.sukesanudon.com/',
        about: '資さんうどん 公式ホームページ',
      },
    ],
  },
  {
    name: '西小倉駅',
    route: ['日豊本線', '日田彦山線', '鹿児島本線'],
    image: 'https://scrapbox.io/files/64e4f9f7a20d5e0035f6557a.png',
    keyScenario: '西小倉へ行く',
    text: '政令指定都市でもある北九州市最大の駅。JR九州内では福岡市の博多駅に次ぐ利用者数を誇る。本州と九州の接点として九州の玄関口の機能を有し、山陽新幹線の全列車が停車する。在来線においても大分市や宮崎市などの東九州の各都市を結ぶ日豊本線の起点であり、また市内最大の大動脈である鹿児島本線が乗り入れる。また、北九州市 - 福岡市間の都市間輸送（インターアーバン）を担う多数の特急列車が運行され、博多駅 - 大分駅を鹿児島本線・日豊本線経由で結ぶ特急「ソニック」は当駅で進行方向を変える。',
    references: [
      {
        url: 'https://ja.wikipedia.org/wiki/%E5%B0%8F%E5%80%89%E9%A7%85_(%E7%A6%8F%E5%B2%A1%E7%9C%8C)',
        about: 'wikipedia',
      },
      {
        url: 'https://www.sukesanudon.com/',
        about: '資さんうどん 公式ホームページ',
      },
    ],
  },
];
