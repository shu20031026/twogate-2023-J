import { TextMessage } from '@line/bot-sdk';
import { CustomButton } from '../utils/makeButtonTemplate';

interface noticeObj {
  [key: string]: Array<TextMessage | CustomButton>;
}

export const noticeList: noticeObj = {
  未実装: [
    {
      type: 'message',
      altText: 'シナリオ-1',
      title: '未実装',
      text: 'まだ実装されていないようだ...\nアプデを待て!!',
      actions: [
        {
          type: 'message',
          label: '小倉へ戻る',
          text: '小倉駅に到着',
        },
      ],
    },
  ],
  GameOver: [
    {
      type: 'message',
      altText: 'シナリオ0',
      title: 'GameOver...',
      text: '北九州を満喫することができなかった...\nどうにか小倉に戻ってまた冒険を始めよう。',
      actions: [
        {
          type: 'message',
          label: '小倉へ戻る',
          text: '小倉駅に到着',
        },
      ],
    },
  ],
  小倉駅に到着: [
    {
      type: 'text',
      text: '北九州市の小倉駅についた!\n今回の旅の目的は\n「北九州を満喫する」\nことだ。\nせっかくなので北九州1日乗車券を購入して北九州をめぐることにした!',
    },
    {
      type: 'message',
      altText: 'シナリオ0',
      title: '小倉駅に到着',
      text: 'まずはどこへいこう？',
      actions: [
        {
          type: 'message',
          label: '西小倉へ行く',
          text: '西小倉へ行く',
        },
        {
          type: 'message',
          label: '門司へ行く',
          text: '門司へ行く',
        },
      ],
    },
  ],
  西小倉へ行く: [
    {
      type: 'message',
      altText: 'シナリオ1',
      title: '西小倉へ行く',
      text: '西小倉へ来た。\n前方に大きな建物が見える。',
      actions: [
        {
          type: 'message',
          label: '未実装',
          text: '未実装',
        },
      ],
    },
  ],
  門司へ行く: [
    {
      type: 'message',
      altText: 'シナリオ2',
      title: '門司へ行く',
      text: '門司駅についた。\n前方には関門海峡とその先に山口が見える。\nこことはだいぶ雰囲気が違うようだ。',
      actions: [
        {
          type: 'message',
          label: '門司赤煉瓦プレイスへ向かう',
          text: '門司赤煉瓦プレイスへ向かう',
        },
      ],
    },
  ],
  門司赤煉瓦プレイスへ向かう: [
    {
      type: 'message',
      altText: 'シナリオ14',
      title: '門司赤煉瓦プレイスへ向かう',
      text: '歴史を感じる赤煉瓦の建物が見えてきた。\n長い歴史を経て、現在は資料館や飲食店になっているようだ。',
      actions: [
        {
          type: 'message',
          label: '門司の飲食店に向かう',
          text: '門司の飲食店に向かう',
        },
      ],
    },
  ],
  門司の飲食店に向かう: [
    {
      type: 'message',
      altText: 'シナリオ16',
      title: '門司の飲食店に向かう',
      text: '雰囲気の良いカフェにやってきた。\nワッフルと飲み物は何を頼もうか。',
      actions: [
        {
          type: 'message',
          label: 'ホットコーヒーを頼む',
          text: 'ホットコーヒーを頼む',
        },
        {
          type: 'message',
          label: 'アイスコーヒーを頼む',
          text: 'アイスコーヒーを頼む',
        },
      ],
    },
  ],
  ホットコーヒーを頼む: [
    {
      type: 'text',
      text: 'ホットコーヒーに口をつけた瞬間、あまりの熱さで服にこぼしてしまった。',
    },
    {
      type: 'message',
      altText: 'シナリオ17',
      title: 'ホットコーヒーを頼む',
      text: '急いで服を脱いで幸い火傷はしなかったが、反動で北九州1日乗車券をどこかに飛ばしてしまったようだ...',
      actions: [
        {
          type: 'message',
          label: 'GameOver',
          text: 'GameOver',
        },
      ],
    },
  ],
  アイスコーヒーを頼む: [
    {
      type: 'message',
      altText: 'シナリオ18',
      title: 'アイスコーヒーを頼む',
      text: '美味しいコーヒーが飲めた。\n今からの旅も良い気分で楽しむことができそうだ。\n門司駅に戻って次の駅に向かおう。',
      actions: [
        {
          type: 'message',
          label: '小森江駅に向かう',
          text: '小森江駅に向かう',
        },
      ],
    },
  ],
  小森江駅に向かう: [
    {
      type: 'message',
      altText: 'シナリオ19',
      title: '小森江駅に向かう',
      text: '小森江駅についた。\n門司のときと変わらず関門海峡が見える。\n近くに小石があった。ちょっと投げ込んでみるか。',
      actions: [
        {
          type: 'message',
          label: '関門海峡に石を投げ込む',
          text: '関門海峡に石を投げ込む',
        },
      ],
    },
  ],
  関門海峡に石を投げ込む: [
    {
      type: 'message',
      altText: 'シナリオ20',
      title: '関門海峡に石を投げ込む',
      text: '投げ込むと地面が揺れるような感覚を感じた。\n関門海峡から巨大な怪獣が現れた',
      actions: [
        {
          type: 'message',
          label: '大声で威嚇する',
          text: '大声で威嚇する',
        },
        {
          type: 'message',
          label: '未実装',
          text: '未実装',
        },
      ],
    },
  ],
  大声で威嚇する: [
    {
      type: 'message',
      altText: 'シナリオ21',
      title: '大声で威嚇する',
      text: '「うおおおお！！！」\n威嚇されたとわかったのか、逆に大声で叫ばれて近づかれる。万事休すか。',
      actions: [
        {
          type: 'message',
          label: '怪獣が近づいてくる',
          text: '怪獣が近づいてくる',
        },
      ],
    },
  ],
  怪獣が近づいてくる: [
    {
      type: 'text',
      text: '近づいてこようと足を上げた怪獣だったが、関門海峡の流れの速さにバランスを崩し、そのまま倒れてしまう。\nそれから二度と浮き上がることはなく、何事もなかったかのように関門海峡には船が浮かんでいる。\n\nあれはなんだったんだろうか...1つ分かったのは関門海峡の流れははやい、ということだけだ。',
    },
    {
      type: 'message',
      altText: 'シナリオ23',
      title: '怪獣が近づいてくる',
      text: '次の駅に向かおう',
      actions: [
        {
          type: 'message',
          label: '未実装',
          text: '未実装',
        },
      ],
    },
  ],
};
