import { ImageMessage, TextMessage } from '@line/bot-sdk';
import { CustomButton } from '../utils/makeButtonTemplate';

interface noticeObj {
  [key: string]: Array<TextMessage | CustomButton>;
}

interface commandObj {
  [key: string]: Array<TextMessage | CustomButton | ImageMessage>;
}

export const commandList: commandObj = {
  あそびかた: [
    {
      type: 'text',
      text: '北九州市へようこそ！\n小倉駅にやってきたあなたは１日乗車券を使って北九州市を探索します。',
    },
    {
      type: 'text',
      text: '出てくるボタンを選択してゲームを進めるとあなたが行動できる選択が表示されます。\nあなたの選択でいい結果になることもあれば悪い結果になることも？',
    },
    {
      type: 'text',
      text: '北九州市の名所やグルメを回りながら、北九州市の駅のコンプリートを目指しましょう！',
    },
    {
      type: 'message',
      altText: 'リンク',
      title: 'あそびかた',
      text: '以下のリンクから、今までに閲覧したシナリオや通過した駅を見ることができます',
      actions: [
        {
          type: 'uri',
          label: 'シナリオ一覧',
          uri: 'https://liff.line.me/2000511797-WMOglq88/scenario',
        },
        {
          type: 'uri',
          label: '駅図鑑',
          uri: 'https://liff.line.me/2000511797-WMOglq88',
        },
      ],
    },
  ],
  マップ: [
    {
      type: 'image',
      originalContentUrl: 'https://scrapbox.io/files/64e4ee81e7d908001b655aaa.jpeg',
      previewImageUrl: 'https://scrapbox.io/files/64e4ee81e7d908001b655aaa.jpeg',
    },
  ],
};

export const noticeList: noticeObj = {
  小倉駅に到着: [
    {
      type: 'text',
      text: '北九州市の小倉駅についた!\n今回の旅の目的は\n「北九州を満喫する」\nことだ。\nせっかくなので北九州1日乗車券を購入して北九州をめぐることにした!',
    },
    {
      type: 'message',
      image: 'https://scrapbox.io/files/64e8666cbf5678001cdd61c3.jpeg',
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
      image: 'https://scrapbox.io/files/64e8806412a993001c477116.jpeg',
      altText: 'シナリオ1',
      title: '西小倉へ行く',
      text: '西小倉へ来た。\n前方に大きな建物が見える。',
      actions: [
        {
          type: 'message',
          label: 'リバーウォークへ行く',
          text: 'リバーウォークへ行く',
        },
      ],
    },
  ],
  門司へ行く: [
    {
      type: 'message',
      altText: 'シナリオ2',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Moji_Station_20181224.jpg/600px-Moji_Station_20181224.jpg',
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
  リバーウォークへ行く: [
    {
      type: 'message',
      image: 'https://scrapbox.io/files/64e97b267aca91001b6b55a2.jpeg',
      altText: 'シナリオ3',
      title: 'リバーウォークへ行く',
      text: 'リバーウォークについた。\nどうやら祭が開催されているらしい。\nリバーウォークの横にはお城があるようだ。',
      actions: [
        {
          type: 'message',
          label: 'くじ引き屋に行く',
          text: 'くじ引き屋に行く',
        },
        {
          type: 'message',
          label: '唐揚げ屋に行く',
          text: '唐揚げ屋に行く',
        },
        {
          type: 'message',
          label: '小倉城へ行く',
          text: '小倉城へ行く',
        },
      ],
    },
  ],
  くじ引き屋に行く: [
    {
      type: 'message',
      image: 'https://scrapbox.io/files/64e97b68046eff001b09c573.png',
      altText: 'シナリオ4',
      title: 'くじ引き屋に行く',
      text: 'くじ引きの屋台についた。\n大当たりはゲーム機で基本はおもちゃになっているようだ。\n試しに引いてみよう。',
      actions: [
        {
          type: 'message',
          label: '一発入魂で気合を込めて引く',
          text: '一発入魂で気合を込めて引く',
        },
        {
          type: 'message',
          label: '何も考えずに引く',
          text: '何も考えずに引く',
        },
        {
          type: 'message',
          label: '普通に引く',
          text: '普通に引く',
        },
      ],
    },
  ],
  唐揚げ屋に行く: [
    {
      type: 'message',
      altText: 'シナリオ5',
      title: '唐揚げ屋に行く',
      text: '唐揚げ屋についた。お値段は500円らしい。\n熱々の美味しい唐揚げを食べることができ、お腹が少し膨れた。',
      actions: [
        {
          type: 'message',
          label: 'くじ引き屋に行く',
          text: 'くじ引き屋に行く',
        },
        {
          type: 'message',
          label: '小倉城へ行く',
          text: '小倉城へ行く',
        },
      ],
    },
  ],
  小倉城へ行く: [
    {
      type: 'message',
      image:
        'https://www.airtrip.jp/travel-column/wp-content/uploads/2017/06/126a051b9581a20cfec1b1b7f9ab00a4-1024x682.jpg',
      altText: 'シナリオ6',
      title: '小倉城へ行く',
      text: '白い壁が特徴的でとても綺麗なお城だ。',
      actions: [
        {
          type: 'message',
          label: 'お城の中へ進む',
          text: 'お城の中へ進む',
        },
      ],
    },
  ],
  一発入魂で気合を込めて引く: [
    {
      type: 'message',
      image: 'https://scrapbox.io/files/64e97ba6605d75001b5d914e.png',
      altText: 'シナリオ7',
      title: ' 一発入魂で気合を込めて引く',
      text: 'いくら引いても当たりが出ない。\n当たりが出るまで引こうと思ったがいつの間にかお金がなくなってしまったようだ...',
      actions: [
        {
          type: 'message',
          label: 'GameOver...',
          text: 'GameOver...',
        },
      ],
    },
  ],
  何も考えずに引く: [
    {
      type: 'message',
      image: 'https://scrapbox.io/files/64e97c457ad583001c3b0085.png',
      altText: 'シナリオ8',
      title: ' 何も考えずに引く',
      text: '大当たりの最新ゲーム機が当たった！\n早速プレイしてみよう！',
      actions: [
        {
          type: 'message',
          label: 'ゲームをプレイする',
          text: 'ゲームをプレイする',
        },
      ],
    },
  ],
  普通に引く: [
    {
      type: 'text',
      text: 'おもちゃの拳銃が当たった！\n妙にリアルな拳銃だがただの水鉄砲らしい。\nかっこいいのでこれで満足しよう。',
    },
    {
      type: 'message',
      image: 'https://scrapbox.io/files/64e4f9b806e690001b218c0b.png',
      altText: 'シナリオ9',
      title: '普通に引く',
      text: 'さあ西小倉駅に戻って次の駅に向かおう。\n南小倉と九州工大前 どっち方面の電車に乗ろう?',
      actions: [
        {
          type: 'message',
          label: '南小倉へ行く',
          text: '南小倉へ行く',
        },
        {
          type: 'message',
          label: '九州工大前に向かう',
          text: '九州工大前に向かう',
        },
      ],
    },
  ],
  ゲームをプレイする: [
    {
      type: 'message',
      image: 'https://www.kitakyushu-museum.jp/images/2020/org-20201023_ba981f7672613043b1f34c3d0483bb55.jpg',
      altText: 'シナリオ10',
      title: 'ゲームをプレイする',
      text: '北九州の観光をそっちのけでゲームをプレイしてしまった...\nもう日が暮れてしまったようだ...',
      actions: [
        {
          type: 'message',
          label: 'GameOver...',
          text: 'GameOver...',
        },
      ],
    },
  ],
  南小倉へ行く: [
    {
      type: 'message',
      image: 'https://scrapbox.io/files/64e8831689d4f5001c4ddd39.jpeg?type=thumbnail',
      altText: 'シナリオ11',
      title: '南小倉へ行く',
      text: '南小倉に着いた。\n交通量が多く、人通りもあり賑やかな感じがする。\n近くにTOTOミュージアムというものがあるらしい。',
      actions: [
        {
          type: 'message',
          label: 'TOTOミュージアムへ行く',
          text: 'TOTOミュージアムへ行く',
        },
      ],
    },
  ],
  九州工大前に向かう: [
    {
      type: 'message',
      image: 'https://scrapbox.io/files/64e8d49cfddf09001b8418ce.jpeg',
      altText: 'シナリオ12',
      title: '九州工大前に向かう',
      text: '九州工大前についた。\n名前の通り大学の前の駅らしい。お腹が空いてきたので近くを調べてみると二郎系ラーメンのお店があった。',
      actions: [
        {
          type: 'message',
          label: '二郎系ラーメン屋にいく',
          text: '二郎系ラーメン屋にいく',
        },
      ],
    },
  ],
  お城の中へ進む: [
    {
      type: 'text',
      text: '侍が現れた!?\n突然斬りかかってきたが、間一髪で避けることができた。\nが、北九州1日乗車券が服からはみ出しておりそのまま切られてしまった。',
    },
    {
      type: 'message',
      altText: 'シナリオ13',
      title: '小倉城へ行く',
      text: '北九州1日乗車券はもう使い物にならない...',
      actions: [
        {
          type: 'message',
          label: 'GameOver...',
          text: 'GameOver...',
        },
      ],
    },
  ],
  門司赤煉瓦プレイスへ向かう: [
    {
      type: 'message',
      altText: 'シナリオ14',
      image: 'https://www.gururich-kitaq.com/wp-content/uploads/2019/02/92_slide01.jpg',
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
  // シナリオ15欠番
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
          label: 'GameOver...',
          text: 'GameOver...',
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
      image: 'https://scrapbox.io/files/64e8e13e503e0c001cdf623c.jpeg',
      title: '小森江駅に向かう',
      text: '小森江駅についた。\n先には関門海峡が見える。\n近くに小石があった。ちょっと投げ込んでみるか。',
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
      image: 'https://cdn.mainichi.jp/vol1/2021/09/21/20210921k0000m040032000p/9.jpg?1',
      text: '投げ込むと地面が揺れるような感覚を感じた。\n関門海峡から巨大な怪獣が現れた。\n\n どうしよう…',
      actions: [
        {
          type: 'message',
          label: '大声で威嚇する',
          text: '大声で威嚇する',
        },
        {
          type: 'message',
          label: '一目散に逃げる',
          text: '一目散に逃げる',
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
  一目散に逃げる: [
    {
      type: 'message',
      altText: 'シナリオ22',
      title: ' 一目散に逃げる',
      text: 'どうしようもないと悟り、なるべく怪獣から逃げようと小森江駅の方へ走る。\nその様子を見て怪獣もこちらを追いかけてきたようだ。',
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
      image: 'https://fundo.jp/wp-content/uploads/2017/04/WS000011_R7.jpg',
      title: '怪獣が近づいてくる',
      text: '次の駅に向かおう',
      actions: [
        {
          type: 'message',
          label: '門司港へ向かう',
          text: '門司港へ向かう',
        },
      ],
    },
  ],
  門司港へ向かう: [
    {
      type: 'message',
      altText: 'シナリオ24',
      image: 'https://scrapbox.io/files/64e8e3946d681e001b692ba7.jpeg',
      title: '門司港へ向かう',
      text: '門司港へ着いた。\n北九州の中でもレトロな雰囲気が色濃く残る町だ。',
      actions: [
        {
          type: 'message',
          label: '九州鉄道記念館へ向かう',
          text: '九州鉄道記念館へ向かう',
        },
        {
          type: 'message',
          label: 'バナナの叩き売りに向かう',
          text: 'バナナの叩き売りに向かう',
        },
        {
          type: 'message',
          label: '焼きカレーを食べに行く',
          text: '焼きカレーを食べに行く',
        },
      ],
    },
  ],
  九州鉄道記念館へ向かう: [
    {
      type: 'message',
      altText: 'シナリオ25',
      image: 'https://www.gururich-kitaq.com/wp-content/uploads/2019/02/101_slide03.jpg',
      title: '九州鉄道記念館へ向かう',
      text: '九州鉄道記念館へ来た。\nミニ鉄道公園や、実物の車両が展示されている。\n車両の中には蒸気機関車もあり楽しむことができた。',
      actions: [
        {
          type: 'message',
          label: 'バナナの叩き売りに向かう',
          text: 'バナナの叩き売りに向かう',
        },
        {
          type: 'message',
          label: '焼きカレーを食べに行く',
          text: '焼きカレーを食べに行く',
        },
      ],
    },
  ],
  バナナの叩き売りに向かう: [
    {
      type: 'message',
      altText: 'シナリオ26',
      image: 'https://www.nishinippon.co.jp/uploads/image/64732/large_1a07e78e7f.jpg',
      title: 'バナナの叩き売りに向かう',
      text: 'バナナの叩き売りが実施されている場所を覗くと、快活な老人の声があたりに響いた。',
      actions: [
        {
          type: 'message',
          label: '叩き売りに声をあげる',
          text: '叩き売りに声をあげる',
        },
        {
          type: 'message',
          label: '黙って見守る',
          text: '黙って見守る',
        },
      ],
    },
  ],
  焼きカレーを食べに行く: [
    {
      type: 'text',
      text: 'せっかくなので関門の景色を見ながら食べたいと思いテイクアウトで焼きカレーを購入した。\nちょうど良いところに石のベンチがあったのでそこに腰掛けて焼きカレーを食べた。\n\n...美味しい。',
    },
    {
      type: 'text',
      text: '食べてる最中、ふと近くを見てみると壁にハートが掘られていた。\nどうやら「カンモンハート」といって関門エリア周辺には隠れたハート柄があちこちにあるようだ！',
    },
    {
      type: 'text',
      text: '門司区は楽しめたし、焼きカレーは美味しいし、カンモンハートを見つけられてラッキーだし北九州を最高に満喫できた！！',
    },
    {
      type: 'message',
      altText: 'シナリオ27',
      image: 'https://www.kanmonnote.com/wp-content/uploads/2018/01/IMG_8749-1.jpg',
      title: '焼きカレーを食べに行く',
      text: 'Game Clear!!!\nEND1 : 門司港レトロ',
      actions: [
        {
          type: 'message',
          label: '小倉に戻って他の駅にも行って見よう！',
          text: '小倉駅に到着',
        },
      ],
    },
  ],
  叩き売りに声をあげる: [
    {
      type: 'text',
      text: '快活な老人が箱から取り出した大きなバナナを片手に声を上げた。\n今だ！',
    },
    {
      type: 'text',
      text: '老人「さぁさ買（こ）うた、さぁ買うた! このばなちゃん１房１万円！」\n\n「買います！...え？」',
    },
    {
      type: 'text',
      text: 'あちこちから笑い声が上がる。最初は高い値段を言うのがお決まりらしい',
    },
    {
      type: 'message',
      altText: 'シナリオ28',
      image:
        'https://4.bp.blogspot.com/-Rj69ortvLQ8/WPsEDvXhF9I/AAAAAAABD1k/1o3QBQfHES4w8LgCDfrmPbSx0mnZMq2UQCLcB/s800/sports_ouen.png',
      title: '叩き売りに声をあげる',
      text: 'ちょっぴり恥ずかしい気持ちになりながらも安くなったバナナを購入した。\n次はどこへ行こう',
      actions: [
        {
          type: 'message',
          label: '焼きカレーを食べに行く',
          text: '焼きカレーを食べに行く',
        },
      ],
    },
  ],
  黙って見守る: [
    {
      type: 'text',
      text: '快活な老人が箱から大きなバナナを片手に持ち上げ声を上げた。',
    },
    {
      type: 'text',
      text: '老人\n「さぁさ買（こ）うた、さぁ買うた! このばなちゃん１房１万円！」',
    },
    {
      type: 'text',
      text: 'あちこちから笑い声が上がる。最初は高い値段を言うのがお決まりらしい',
    },
    {
      type: 'message',
      altText: 'シナリオ29',
      image:
        'https://4.bp.blogspot.com/-Rj69ortvLQ8/WPsEDvXhF9I/AAAAAAABD1k/1o3QBQfHES4w8LgCDfrmPbSx0mnZMq2UQCLcB/s800/sports_ouen.png',
      title: '黙って見守る',
      text: 'みんな笑顔で楽しそうだ。\n次はどこへ行こう',
      actions: [
        {
          type: 'message',
          label: '焼きカレーを食べに行く',
          text: '焼きカレーを食べに行く',
        },
      ],
    },
  ],
  TOTOミュージアムへ行く: [
    {
      type: 'message',
      altText: 'シナリオ30',
      image: 'https://scrapbox.io/files/64e97cda8520d1001c8a064b.jpeg',
      title: 'TOTOミュージアムへ行く',
      text: 'TOTOミュージアムへ着いた\n初めて知ったがTOTOは北九州の会社らしい。',
      actions: [
        {
          type: 'message',
          label: 'トイレに座ってみる',
          text: 'トイレに座ってみる',
        },
        {
          type: 'message',
          label: 'トイレを観察してみる',
          text: 'トイレを観察してみる',
        },
      ],
    },
  ],
  トイレに座ってみる: [
    {
      type: 'text',
      text: 'トイレに座ってみた。\nなんて座り心地の良いトイレなんだ...',
    },
    {
      type: 'message',
      altText: 'シナリオ31',
      image: 'https://scrapbox.io/files/64e97d0f6098c7001b8478b1.png',
      title: 'トイレに座ってみる',
      text: 'TOTOミュージアムを満喫できたような気がする。\n南小倉駅に戻って次の駅に向かおう。',
      actions: [
        {
          type: 'message',
          label: '城野に向かう',
          text: '城野に向かう',
        },
      ],
    },
  ],
  トイレを観察してみる: [
    {
      type: 'message',
      altText: 'シナリオ32',
      image: 'https://scrapbox.io/files/64e980cc767536001b495612.png',
      title: 'トイレを観察してみる',
      text: '目を凝らして観察してみると何やらモゾモゾと動く2人の黒い人？を見つけた!?\nどうしようか...',
      actions: [
        {
          type: 'message',
          label: '話しかけてみる',
          text: '話しかけてみる',
        },
        {
          type: 'message',
          label: 'じっと見てみる',
          text: 'じっと見てみる',
        },
      ],
    },
  ],
  話しかけてみる: [
    {
      type: 'text',
      text: '声をかけるとすぐさま逃げてしまった。一体なんだったんだろう...',
    },
    {
      type: 'message',
      altText: 'シナリオ33',
      image: 'https://scrapbox.io/files/64e981835e06aa001bf12eed.png',
      title: '話しかけてみる',
      text: 'なにはともあれTOTOミュージアムを満喫できたような気がする。\n南小倉駅に戻って次の駅に向かおう。',
      actions: [
        {
          type: 'message',
          label: '城野に向かう',
          text: '城野に向かう',
        },
      ],
    },
  ],
  じっと見てみる: [
    {
      type: 'text',
      text: 'じっと見つめているとその黒い物体もこちらに気がついたようだ。\n手に持っていた槍のようなものをこちらに投げつけてきた！',
    },
    {
      type: 'text',
      text: 'びっくりして閉じた目を開くとそこには何もいなかった…',
    },
    {
      type: 'text',
      text: 'あっ！しまった！\n北九州1日乗車券がトイレの中に入ってしまい、そのまま水とともに流れていく... ',
    },
    {
      type: 'message',
      altText: 'シナリオ34',
      image: 'https://scrapbox.io/files/64e981e38a56c4001c53ef1b.png',
      title: 'じっと見てみる',
      text: '北九州のどこにも行けなくなってしまった...',
      actions: [
        {
          type: 'message',
          label: 'GameOver...',
          text: 'GameOver...',
        },
      ],
    },
  ],
  城野に向かう: [
    {
      type: 'message',
      altText: 'シナリオ35',
      image: 'https://scrapbox.io/files/64e887ec8a56c4001c4dcf2e.jpeg',
      title: '城野に向かう',
      text: '城野駅についた。\n新しくて綺麗な街だなという印象だ。',
      actions: [
        {
          type: 'message',
          label: '城野を散策する',
          text: '城野を散策する',
        },
      ],
    },
  ],
  城野を散策する: [
    {
      type: 'message',
      altText: 'シナリオ36',
      image: 'https://image.space.rakuten.co.jp/lg01/22/0001321422/97/imged8893e2zikazj.jpeg',
      title: '城野を散策する',
      text: '歩いていると昔ながらの駄菓子屋を見つけることができた。\nせっかくだし入ってみよう。',
      actions: [
        {
          type: 'message',
          label: '駄菓子屋に入ってみる',
          text: '駄菓子屋に入ってみる',
        },
      ],
    },
  ],
  //ここから
  駄菓子屋に入ってみる: [
    {
      type: 'text',
      text: '昔懐かしい感じの駄菓子屋だ。お菓子にアイス、たこせんも売ってるらしい。\nせっかくなのでたこせんを買ってみた。',
    },
    {
      type: 'message',
      altText: 'シナリオ37',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsuhhxaGKujVnAomg7us0sSKLmbfPJtG4-Q&usqp=CAUs',
      title: '駄菓子屋に入ってみる',
      text: 'カリカリのえびせんとあつあつのたこ焼きがよく合って美味しい。\n城野を満喫できた。次はどこに行こう',
      actions: [
        // {
        //   type: 'message',
        //   label: '石田に行く',
        //   text: '石田に行く',
        // },
        {
          type: 'message',
          label: '安部山公園に行く',
          text: '安部山公園に行く',
        },
        {
          type: 'message',
          label: '石田に行く',
          text: '未実装',
        },
      ],
    },
  ],
  // TODO: シナリオ３８方面保留
  安部山公園に行く: [
    {
      type: 'text',
      text: '安部山公園についた。\nここの近くに九州をメインに展開している資さんうどんの本店があるらしい。',
    },
    {
      type: 'message',
      altText: 'シナリオ39',
      image: 'https://scrapbox.io/files/64e889e1541d76001ba5f401.jpeg',
      title: '安部山公園に行く',
      text: 'お腹も減ってきたので資さんうどんで何か食べよう！',
      actions: [
        {
          type: 'message',
          label: '肉ごぼ天うどんを食べる',
          text: '肉ごぼ天うどんを食べる',
        },
        {
          type: 'message',
          label: 'おでんを食べる',
          text: 'おでんを食べる',
        },
      ],
    },
  ],
  肉ごぼ天うどんを食べる: [
    {
      type: 'text',
      text: 'モチモチとした食感の麺にほどよくコシがあり出汁も美味しい。',
    },
    {
      type: 'text',
      text: 'さすが人気ナンバーワンメニュー!\n甘辛い肉とサクサクのごぼうの天ぷらともマッチして最高の味だ！\n程よくお腹いっぱいになった。',
    },
    {
      type: 'message',
      altText: 'シナリオ40',
      image: 'https://www.sukesanudon.com/images/menu/udon.jpg',
      title: '肉ごぼ天うどんを食べる',
      text: 'レジに行くとどうやらぼた餅が買えるらしい。',
      actions: [
        {
          type: 'message',
          label: 'ぼた餅を買う',
          text: 'ぼた餅を買う',
        },
      ],
    },
  ],
  //TODO: シナリオ41省略
  おでんを食べる: [
    {
      type: 'text',
      text: '資さんうどんといえばおでんも美味しいことで有名だそうだ。',
    },
    {
      type: 'text',
      text: 'おでんコーナーから自分でおでんを取って申告するスタイルにびっくりした！',
    },
    {
      type: 'text',
      text: '定番の味が沁みたたまごに大根、ごぼう天に牛すじ、どれも美味しくてお腹がいっぱいになった。',
    },
    {
      type: 'message',
      altText: 'シナリオ42',
      image: 'https://kyushu-labo.com/kswp/wp-content/uploads/sukesan-udon-11.jpg',
      title: 'おでんを食べる',
      text: 'レジに行くとどうやらぼた餅も売っているらしい。',
      actions: [
        {
          type: 'message',
          label: 'ぼた餅を買う',
          text: 'ぼた餅を買う',
        },
      ],
    },
  ],
  ぼた餅を買う: [
    {
      type: 'message',
      altText: 'シナリオ43',
      image: 'https://www.sukesanudon.com/storage/images/menu/pc-D-1.png',
      title: 'ぼた餅を買う',
      text: 'うどん屋なのにぼた餅が名物なんだ！\n今はお腹がいっぱいだから持ち帰りにしよう。\n次はどこへ行こうか',
      actions: [
        {
          type: 'message',
          label: '下曽根に向かう',
          text: '下曽根に向かう',
        },
      ],
    },
  ],
  下曽根に向かう: [
    {
      type: 'message',
      altText: 'シナリオ44',
      image: 'https://scrapbox.io/files/64e88c81d3bc55001cc9cdff.jpeg',
      title: '下曽根に向かう',
      text: '駅から外に出ると、何やら探し物をしている人がいるようだ。\n声をかけてみよう。',
      actions: [
        {
          type: 'message',
          label: '探し物をしている人に声をかけてみる',
          text: '探し物をしている人に声をかけてみる',
        },
      ],
    },
  ],
  探し物をしている人に声をかけてみる: [
    {
      type: 'message',
      altText: 'シナリオ45',
      image: 'https://scrapbox.io/files/64e6f522e00e3b001cc8bd3f.png',
      title: '探し物をしている人に声をかけてみる',
      text: 'どうやら財布を探しているようだ',
      actions: [
        {
          type: 'message',
          label: '財布を見つけた',
          text: '財布を見つけた',
        },
      ],
    },
  ],
  財布を見つけた: [
    {
      type: 'message',
      altText: 'シナリオ46',
      image: 'https://pbs.twimg.com/media/DioXL4BUEAABuo3?format=jpg&name=large',
      title: '財布を見つけた',
      text: '財布を見つけることができた。\nお礼にご当地ヒーローのフィギュアをもらった。\nなかなかかっこいい。',
      actions: [
        {
          type: 'message',
          label: '朽網に向かう',
          text: '朽網に向かう',
        },
      ],
    },
  ],
  朽網に向かう: [
    {
      type: 'message',
      altText: 'シナリオ47',
      image: 'https://scrapbox.io/files/64e8c811503e0c001cde38ee.jpeg',
      title: '朽網に向かう',
      text: '朽網についた。\n随分疲れてきたしちょっとベンチに座ろうかな。',
      actions: [
        {
          type: 'message',
          label: 'ベンチに座る',
          text: 'ベンチに座る',
        },
      ],
    },
  ],
  ベンチに座る: [
    {
      type: 'message',
      altText: 'シナリオ48',
      title: 'ベンチに座る',
      text: 'お腹が空いたな…\nそういえば資さんのぼた餅があった！',
      actions: [
        {
          type: 'message',
          label: 'ぼた餅を食べる',
          text: 'ぼた餅を食べる',
        },
      ],
    },
  ],
  //　TODO: シナリオ49-61省略
  ぼた餅を食べる: [
    {
      type: 'text',
      text: 'ぼた餅を口に入れた。\n上品な甘さで頬が落ちそうだ。',
    },
    {
      type: 'text',
      text: '空は夕日が射しており、ぽつぽつと星が出てきている。\n北九州を存分に満喫できたな!',
    },
    {
      type: 'message',
      altText: 'シナリオ62',
      title: 'ぼた餅を食べる',
      text: 'Game Clear!!!\nEND2 : ぼた餅',
      actions: [
        {
          type: 'message',
          label: '小倉に戻って他の駅にも行って見よう！',
          text: '小倉駅に到着',
        },
      ],
    },
  ],
  二郎系ラーメン屋にいく: [
    {
      type: 'text',
      text: '店内には学生が多く、堅物そうな店主がカウンターにいてザ・二郎系ラーメン屋という感じだ。',
    },
    {
      type: 'message',
      altText: 'シナリオ92',
      image: 'https://www.riki35.com/wp-content/uploads/2014/10/daruma001.jpg',
      title: '二郎系ラーメン屋にいく',
      text: 'それほどお腹も空いてないので小ラーメンを頼むことにした。\nトッピングはどうしよう',
      actions: [
        {
          type: 'message',
          label: '二郎系なら全マシマシでしょう！',
          text: '二郎系なら全マシマシでしょう！',
        },
        {
          type: 'message',
          label: '普通にするかな...',
          text: '普通にするかな...',
        },
      ],
    },
  ],
  '二郎系なら全マシマシでしょう！': [
    {
      type: 'text',
      text: '出てきたのは野菜の山に油の池。\nあまりの量に息を飲んだ。',
    },
    {
      type: 'text',
      text: 'はじめは美味しかったけれど、どんどんお腹に溜まって苦しくなってくる...',
    },
    {
      type: 'text',
      text: 'もう限界だ...\nこれ以上は入らない...',
    },
    {
      type: 'message',
      altText: 'シナリオ93',
      image:
        'https://obs.line-scdn.net/0hztMWknI1JVtwLgxP_nZaDE58JTQDQjoTFBQ6awEwAxcrcGAESkp1RjRYe2MJG2oEREgvPAd-LDtVSTU/a750_60_sharpen',
      title: '全マシマシで頼んだ。',
      text: '調子に乗らず食べれる量を考えるべきだったな...',
      actions: [
        {
          type: 'message',
          label: 'GameOver...',
          text: 'GameOver...',
        },
      ],
    },
  ],
  '普通にするかな...': [
    {
      type: 'text',
      text: '出てきたのはたっぷりの野菜の山に美しい油の池。\n普通盛りとは思えないほどにボリューミー',
    },
    {
      type: 'text',
      text: '食べ切ることはできたが、流石にお腹がいっぱいだ。\n全マシマシを頼んでいたら間違いなく食べ切れなかっただろう...危ない危ない',
    },
    {
      type: 'message',
      altText: 'シナリオ94',
      image:
        'https://obs.line-scdn.net/0hztMWknI1JVtwLgxP_nZaDE58JTQDQjoTFBQ6awEwAxcrcGAESkp1RjRYe2MJG2oEREgvPAd-LDtVSTU/a750_60_sharpen',
      title: '普通にするかな...',
      text: 'お腹も膨れたしそろそろ次の駅に行こう',
      actions: [
        {
          type: 'message',
          label: '戸畑へ向かう',
          text: '戸畑へ向かう',
        },
      ],
    },
  ],
  //TODO: 95-98省略
  戸畑へ向かう: [
    {
      type: 'message',
      altText: 'シナリオ99',
      image: 'https://scrapbox.io/files/64e8d61adba05c001c8579c0.jpeg',
      title: '戸畑へ向かう',
      text: '戸畑駅についた。\n近くに北九州市立美術館があるらしい。\nそこに行ってみよう。',
      actions: [
        {
          type: 'message',
          label: '北九州市立美術館に向かう',
          text: '北九州市立美術館に向かう',
        },
      ],
    },
  ],
  北九州市立美術館に向かう: [
    {
      type: 'message',
      altText: 'シナリオ100',
      image: 'https://scrapbox.io/files/64ea3c9837ecca001bb90824.jpeg',
      title: '北九州市立美術館に向かう',
      text: '北九州市立美術館にやってきた。飛び出ている2本の筒状の建物が特徴的でおしゃれ。\n中に入ってみよう。',
      actions: [
        {
          type: 'message',
          label: '展示物を見る',
          text: '展示物を見る',
        },
      ],
    },
  ],
  展示物を見る: [
    {
      type: 'text',
      text: 'ロダン・ルノワール・モネ・葛飾北斎・歌川広重...\n美術館内には著名な人物の作品がたくさんあった。',
    },
    {
      type: 'text',
      text: 'しばらく見回っていると、展望休憩スペースについた。\n歩き疲れたのでここで一休みすることにしよう。',
    },
    {
      type: 'message',
      altText: 'シナリオ101',
      title: '展示物を見る',
      text: '日がポカポカして居心地がいい。',
      actions: [
        {
          type: 'message',
          label: 'しばらく休憩する',
          text: 'しばらく休憩する',
        },
      ],
    },
  ],
  しばらく休憩する: [
    {
      type: 'message',
      altText: 'シナリオ102',
      title: 'しばらく休憩する',
      text: 'ついついうたた寝してしまったようだ。\nさて、しっかり休憩も取れたことだし、これからどうしようか。',
      actions: [
        {
          type: 'message',
          label: 'このまま帰る',
          text: 'このまま帰る',
        },
        {
          type: 'message',
          label: 'もう少し見回る',
          text: 'もう少し見回る',
        },
      ],
    },
  ],
  このまま帰る: [
    {
      type: 'message',
      altText: 'シナリオ103',
      image: 'https://scrapbox.io/files/64ea4089daae7b001c8fe91e.png',
      title: 'このまま帰る',
      text: 'このまま帰ることにした。\nでもさっきまでいた客の姿が1人も見られず妙な感じだ...',
      actions: [
        {
          type: 'message',
          label: '出口に向かうと...',
          text: '出口に向かうと...',
        },
      ],
    },
  ],
  もう少し見回る: [
    {
      type: 'message',
      altText: 'シナリオ104',
      title: 'シナリオ104',
      text: '展示品の隅で机の上に一冊の黒いノートが開いて置かれていることに気がついた。',
      actions: [
        {
          type: 'message',
          label: '黒いノートに近づいてみる',
          text: '黒いノートに近づいてみる',
        },
      ],
    },
  ],
  '出口に向かうと...': [
    {
      type: 'message',
      altText: 'シナリオ105',
      title: '出口に向かうと...',
      text: 'そこには武装した集団がいた!?\nどうしよう…',
      actions: [
        {
          type: 'message',
          label: '近くに行ってみる',
          text: '近くに行ってみる',
        },
      ],
    },
  ],
  黒いノートに近づいてみる: [
    {
      type: 'text',
      text: '中には人の名前がズラッと書かれていた。\n来場者が名前を書いてるのかな？',
    },
    {
      type: 'message',
      altText: 'シナリオ106',
      title: '黒いノートに近づいてみる',
      text: '近くにペンがある！\n自分も記念に名前を書いておこう',
      actions: [
        {
          type: 'message',
          label: '名前を記入する',
          text: '名前を記入する',
        },
      ],
    },
  ],
  名前を記入する: [
    {
      type: 'text',
      text: '名前を書いてからノートを閉じた。\nふと表紙に目が行く。',
    },
    {
      type: 'message',
      altText: 'シナリオ107',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Death_Note%2C_Book.svg/1707px-Death_Note%2C_Book.svg.png',
      title: '名前を記入する',
      text: 'あれ、このノートって…\n気づいたときにはもう遅い。\nだんだん意識が遠のいて…',
      actions: [
        {
          type: 'message',
          label: '気を失ってしまった',
          text: '気を失ってしまった',
        },
      ],
    },
  ],
  近くに行ってみる: [
    {
      type: 'text',
      text: '武装した集団に近づこうとすると後ろから声をかけられた。',
    },
    {
      type: 'text',
      text: '「この図書館は奴らに包囲されています。早く裏から避難してください」',
    },
    {
      type: 'text',
      text: '図書館？ここは美術館じゃ…？',
    },
    {
      type: 'message',
      altText: 'シナリオ108',
      image: 'https://eiga.k-img.com/images/movie/81468/gallery/original/web_main.jpg?1441965172',
      title: '近くに行ってみる',
      text: 'その時大きな物音が聞こえびっくりして…',
      actions: [
        {
          type: 'message',
          label: '気を失ってしまった',
          text: '気を失ってしまった',
        },
      ],
    },
  ],
  気を失ってしまった: [
    {
      type: 'text',
      text: '目が覚めると元の美術館のままだった。\nどうやらさっきまでのは夢だったようだ...',
    },
    {
      type: 'text',
      text: '帰ろうとするとある紹介コーナーが目に入った。',
    },
    {
      type: 'text',
      text: 'どうやら北九州市立美術館は何度か映画の撮影現場になっているらしい。\n映画の「図書館戦争」や「DEATH NOTE」の撮影もここで行われたのだそうだ。',
    },
    {
      type: 'message',
      altText: 'シナリオ108',
      title: '気を失ってしまった',
      text: 'なんだか不思議な気分だ。\nさぁ！気を取り直して次の駅へ向かおう。',
      actions: [
        {
          type: 'message',
          label: '枝光へ向かう',
          text: '枝光へ向かう',
        },
      ],
    },
  ],
  枝光へ向かう: [
    {
      type: 'message',
      altText: 'シナリオ114',
      image: 'https://scrapbox.io/files/64e8d837fac870001bcf543f.jpeg',
      title: '枝光へ向かう',
      text: 'この近くには温泉があるらしい。\n歩いて行ける距離だし、旅の疲れを少し癒しに行ってみようか',
      actions: [
        {
          type: 'message',
          label: '温泉に行ってみる',
          text: '温泉に行ってみる',
        },
      ],
    },
  ],
  温泉に行ってみる: [
    {
      type: 'message',
      altText: 'シナリオ115',
      text: '温泉にやってきた。\n内風呂の他に露天風呂やサウナもあるらしい。\nどれに行ってみようか',
      title: '温泉に行ってみる',
      actions: [
        {
          type: 'message',
          label: '内風呂に入る',
          text: '内風呂に入る',
        },
        {
          type: 'message',
          label: '露天風呂に入る',
          text: '露天風呂に入る',
        },
        {
          type: 'message',
          label: 'サウナに入る',
          text: 'サウナに入る',
        },
      ],
    },
  ],
  内風呂に入る: [
    {
      type: 'text',
      text: '内風呂に入ることにした。\n普通の風呂だけでなくジャグジーなどの風呂も多数ある。',
    },
    {
      type: 'message',
      altText: 'シナリオ116',
      image: 'https://scrapbox.io/files/64ea442152a21b001caf0147.png',
      title: '内風呂に入る',
      text: '入ってみると体の芯からあったまっていく。\n心地よい、いい風呂だ。\n旅の疲れが癒やされた。',
      actions: [
        {
          type: 'message',
          label: 'スペースワールドへ向かう',
          text: 'スペースワールドへ向かう',
        },
      ],
    },
  ],
  露天風呂に入る: [
    {
      type: 'text',
      text: '露天風呂に入ることにした。\n空の景色を見ながら入る風呂はとても気持ちのいいものだった。',
    },
    {
      type: 'message',
      altText: 'シナリオ117',
      image: 'https://scrapbox.io/files/64ea4404da2629001b6e523f.png',
      title: '露天風呂に入る',
      text: '吹いてくる冷たい風と体を温めるあったかい風呂で旅の疲れが癒やされた。',
      actions: [
        {
          type: 'message',
          label: 'スペースワールドへ向かう',
          text: 'スペースワールドへ向かう',
        },
      ],
    },
  ],
  サウナに入る: [
    {
      type: 'text',
      text: 'サウナに入ることにした。\n何人か先客がいるようで皆一様に汗をかいている。',
    },
    {
      type: 'message',
      altText: 'シナリオ118',
      image: 'https://scrapbox.io/files/64ea43bd16f14e001be281b6.png',
      title: 'サウナに入る',
      text: 'サウナ！水風呂！外気浴！ \nしっかり整って旅の疲れが癒された。',
      actions: [
        {
          type: 'message',
          label: 'スペースワールドへ向かう',
          text: 'スペースワールドへ向かう',
        },
      ],
    },
  ],
  スペースワールドへ向かう: [
    {
      type: 'text',
      text: 'スペースワールド駅についた。\nどうやら昔あった遊園地がこの駅の由来らしく、北九州の人々はこの遊園地を愛していたらしい。\nぜひ行ってみたかったものだ。',
    },
    {
      type: 'text',
      text: 'この辺りには大型アウトレットに環境ミュージアム,いのちのたび博物館など色々な興味深いスポットがあるようだ。',
    },
    {
      type: 'message',
      altText: 'シナリオ119',
      image: 'https://scrapbox.io/files/64ea44dc55fbc4001c6a996e.jpeg',
      title: 'スペースワールドへ向かう',
      text: '今日はいのちのたび博物館に行くことにしよう。',
      actions: [
        {
          type: 'message',
          label: '博物館に行く',
          text: '博物館に行く',
        },
      ],
    },
  ],
  //ここから
  博物館に行く: [
    {
      type: 'text',
      text: 'いのちのたび博物館へやってきた。\n恐竜の化石をメインにこれまでの地球の生態系や歴史をジオラマなどを用いて楽しく説明してくれている博物館だ。',
    },
    {
      type: 'message',
      altText: 'シナリオ120',
      image: 'https://scrapbox.io/files/64ea4512c9945d001c004771.jpeg',
      title: '博物館へ行く',
      text: 'さて、どこへ向かおうか。',
      actions: [
        {
          type: 'message',
          label: '恐竜の骨格標本を見に行く',
          text: '恐竜の骨格標本を見に行く',
        },
        {
          type: 'message',
          label: '生物の剥製を見に行く',
          text: '生物の剥製を見に行く',
        },
        {
          type: 'message',
          label: 'ジオラマを見に行く',
          text: 'ジオラマを見に行く',
        },
      ],
    },
  ],
  恐竜の骨格標本を見に行く: [
    {
      type: 'message',
      altText: 'シナリオ121',
      image: 'https://scrapbox.io/files/64ea4539da2629001b6e57e5.webp',
      title: '恐竜の化石を見に行く',
      text: '巨大な恐竜の標本はどれも圧巻。\n中でもティラノサウルス スーの全身レプリカは迫力満点',
      actions: [
        {
          type: 'message',
          label: '化石を見ていると...',
          text: '化石を見ていると...',
        },
      ],
    },
  ],
  生物の剥製を見に行く: [
    {
      type: 'text',
      text: '本物と見間違えるほどにリアルな標本がズラッとで並んでいる。\n今にも動き出してしまいそうで少し怖いな、、、',
    },
    {
      type: 'message',
      altText: 'シナリオ122',
      image: 'https://scrapbox.io/files/64ea45a21d66db001cece017.jpeg',
      title: '生物の剥製を見に行く',
      text: 'なんて思っていたら突然上から巨大な魚の模型が降ってきてそのまま食べられてしまった...',
      actions: [
        {
          type: 'message',
          label: 'GameOver...',
          text: 'GameOver...',
        },
      ],
    },
  ],
  ジオラマを見に行く: [
    {
      type: 'text',
      text: 'エンバイラマ館という実際に展示物が動いて、まるでタイムスリップしたかのような体験ができる展示に行ってみた。',
    },
    {
      type: 'text',
      text: '「恐竜がいたらこんなふうに動くんだろうな」\nと感じるリアルな動きに圧倒された。',
    },
    {
      type: 'message',
      altText: 'シナリオ123',
      image: 'https://scrapbox.io/files/64ea45d455fbc4001c6a9f2f.jpeg',
      title: 'ジオラマを見に行く',
      text: '恐竜の生活や絶滅するまでの過程をよく表現していて、\nついついのめり込んでしまった。',
      actions: [
        {
          type: 'message',
          label: 'ワキノサトウリュウをよく見てみる',
          text: 'ワキノサトウリュウをよく見てみる',
        },
        {
          type: 'message',
          label: 'イグアノドンの巣を見てみる',
          text: 'イグアノドンの巣を見てみる',
        },
      ],
    },
  ],
  '化石を見ていると...': [
    {
      type: 'text',
      text: '化石を見ていると、突然何かが頭に降ってきた。\n何が落ちてきたが確認してみるとどうやら化石のようだ',
    },
    {
      type: 'message',
      altText: 'シナリオ124',
      image: 'https://scrapbox.io/files/64ea457672472e001b840d6e.png',
      title: '化石を見ていると...',
      text: 'どこからか突然降ってきたようだ...\nひとまずカバンにしまって館内を散策しよう。',
      actions: [
        {
          type: 'message',
          label: '生物の剥製を見に行く',
          text: '生物の剥製を見に行く',
        },
        {
          type: 'message',
          label: 'ジオラマを見に行く',
          text: 'ジオラマを見に行く',
        },
      ],
    },
  ],
  ワキノサトウリュウをよく見てみる: [
    {
      type: 'text',
      text: '福岡で発見されたという恐竜\n「ワキノサトウリュウ」\nを見てみることにした。',
    },
    {
      type: 'message',
      altText: 'シナリオ125',
      image: 'https://scrapbox.io/files/64ea45ffec502d001c1fcd55.jpeg',
      title: 'ワキノサトウリュウをよく見てみる',
      text: 'かっこいいフォルムに魅了されてじっと見つめていると突然意識が飛んでしまった...',
      actions: [
        {
          type: 'message',
          label: '恐竜ワールド？',
          text: '恐竜ワールド？',
        },
      ],
    },
  ],
  イグアノドンの巣を見てみる: [
    {
      type: 'text',
      text: 'イグアノドンの巣を見てみると、ちょうど卵から赤ちゃんが孵る様子を見ることができた。けっこうかわいいな。',
    },
    {
      type: 'message',
      altText: 'シナリオ126',
      image: 'https://scrapbox.io/files/64ea4697ceac19001b5e6e4d.jpeg',
      title: 'イグアノドンの巣を見てみる',
      text: 'そろそろ博物館も堪能できたことだし次の駅に行こうか。',
      actions: [
        {
          type: 'message',
          label: '八幡へ向かう',
          text: '八幡へ向かう',
        },
      ],
    },
  ],
  '恐竜ワールド？': [
    {
      type: 'message',
      altText: 'シナリオ127',
      image: 'https://scrapbox.io/files/64ea46717d31d8001b5be75b.jpg',
      title: '恐竜ワールド？',
      text: '目が覚めるとそこは白亜紀の地球だった。\n巨大な生物がひしめく世界で、生きていけるのか...?',
      actions: [
        {
          type: 'message',
          label: 'GameOver...',
          text: 'GameOver...',
        },
      ],
    },
  ],
  八幡へ向かう: [
    {
      type: 'message',
      altText: 'シナリオ128',
      image: 'https://scrapbox.io/files/64e8db15323bcd001c98b06a.jpeg',
      title: '八幡へ向かう',
      text: '八幡についた。\nこの近くには八幡製鐵所という世界遺産にもなった場所があるらしい。\nそこに行ってみよう。',
      actions: [
        {
          type: 'message',
          label: '八幡製鐵所に行く',
          text: '八幡製鐵所に行く',
        },
      ],
    },
  ],
  八幡製鐵所に行く: [
    {
      type: 'text',
      text: '八幡製鐵所にやってきた。高い塔のような建物に「1901」の文字が大きく見える。',
    },
    {
      type: 'text',
      text: 'しばらくあたりを見ているとガイドをしている人を見つけた。',
    },
    {
      type: 'message',
      altText: 'シナリオ129',
      image: 'https://scrapbox.io/files/64ea46ecf5e61e001c84aa6e.jpeg',
      title: '八幡製鐵所に行く',
      text: 'せっかくなので話を聞いてみよう！',
      actions: [
        {
          type: 'message',
          label: 'ガイドから話を聞く',
          text: 'ガイドから話を聞く',
        },
      ],
    },
  ],
  ガイドから話を聞く: [
    {
      type: 'text',
      text: 'ガイドの方は喜んでいろんなことを教えてくれた。',
    },
    {
      type: 'text',
      text: '日本で初めて作られた大型溶鉱炉であったこと。\n完成当初火入れをしてから3年経ってようやく本格的に動き始めたこと...',
    },
    {
      type: 'text',
      text: 'とても興味深い話を聞き明治時代の製鉄に思いを馳せることができた。',
    },
    {
      type: 'message',
      altText: 'シナリオ130',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Governmental_Yawata_Iron_%26_Steel_Works.JPG',
      title: 'ガイドから話を聞く',
      text: 'ガイドの方が言うにはお土産屋が向こうにあるそうだ。\n行ってみよう。',
      actions: [
        {
          type: 'message',
          label: 'お土産屋にいく',
          text: 'お土産屋にいく',
        },
      ],
    },
  ],
  お土産屋にいく: [
    {
      type: 'text',
      text: 'ネジチョコというネジそっくりなチョコが売られていた。',
    },
    {
      type: 'text',
      text: 'どうやら北九州が鉄鋼の街であることに因んで作られたお菓子らしい。',
    },
    {
      type: 'message',
      altText: 'シナリオ131',
      image: 'https://scrapbox.io/files/64ea47c88d5207001be87d32.jpeg',
      title: 'お土産屋にいく',
      text: 'お土産にネジチョコも買えたし、次の駅に向かうことにした。',
      actions: [
        {
          type: 'message',
          label: '黒崎へ向かう',
          text: '黒崎へ向かう',
        },
      ],
    },
  ],
  黒崎へ向かう: [
    {
      type: 'message',
      altText: 'シナリオ132',
      image: 'https://scrapbox.io/files/64e8dc5bed6629001d83d5ac.jpeg',
      title: '黒崎へ向かう',
      text: '黒崎についた。\n黒崎には北九州で誰もが知る有名なパン屋「シロヤ」の本店があるらしい。',
      actions: [
        {
          type: 'message',
          label: 'シロヤに行く',
          text: 'シロヤに行く',
        },
      ],
    },
  ],
  シロヤに行く: [
    {
      type: 'message',
      altText: 'シナリオ133',
      image: 'https://scrapbox.io/files/64ea48bb6428c4001b2a6aed.jpeg',
      title: 'シロヤに行く',
      text: 'シロヤといえば、サニーパンという練乳パンが有名らしい。買って食べ歩きをしよう。',
      actions: [
        {
          type: 'message',
          label: '練乳がない方から食べる',
          text: '練乳がない方から食べる',
        },
        {
          type: 'message',
          label: '練乳が詰まっている方から食べる',
          text: '練乳が詰まっている方から食べる',
        },
      ],
    },
  ],
  練乳がない方から食べる: [
    {
      type: 'text',
      text: '練乳がない方から食べ始めると、反対側から練乳が勢いよく飛び出してしまった！\nこんなにたっぷり詰まっているんだ！',
    },
    {
      type: 'text',
      text: 'しまった！\n飛び出した練乳が持っていた北九州一日乗車券にかかってベタベタに…',
    },
    {
      type: 'message',
      altText: 'シナリオ134',
      image: 'https://cdn.mainichi.jp/vol1/2022/06/10/20220610k0000m040130000p/9.jpg?1',
      title: '練乳がない方から食べる',
      text: '機械で読み取れず、この乗車券はもう使えないようだ',
      actions: [
        {
          type: 'message',
          label: 'GameOver...',
          text: 'GameOver...',
        },
      ],
    },
  ],
  練乳が詰まっている方から食べる: [
    {
      type: 'text',
      text: '練乳が詰まっている方から食べた。\n練乳たっぷりで最後の方まで甘くておいしい！',
    },
    {
      type: 'message',
      altText: 'シナリオ135',
      image: 'https://scrapbox.io/files/64ea494e37ecca001bb964fc.jpeg',
      title: '練乳が詰まっている方から食べる',
      text: '練乳の甘さが癖になる、美味しいパンだった。\nさて、次の駅に行こうか',
      actions: [
        {
          type: 'message',
          label: '陣原へ向かう',
          text: '陣原へ向かう',
        },
      ],
    },
  ],
  陣原へ向かう: [
    {
      type: 'text',
      text: '陣原にやってきた。',
    },
    {
      type: 'text',
      text: '...とは言ったもののこの地名なんて読むんだ?',
    },
    {
      type: 'text',
      text: 'おや！どうやら近くで北九州難読地名当てクイズ大会をやっているようだ。',
    },
    {
      type: 'message',
      altText: 'シナリオ136',
      image: 'https://scrapbox.io/files/64e8de4a9ce963001ca77933.jpeg',
      title: '陣原へ向かう',
      text: '面白そう！クイズ大会に参加しよう！',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会一問目',
          text: 'クイズ大会一問目',
        },
      ],
    },
  ],
  クイズ大会一問目: [
    {
      type: 'message',
      altText: 'シナリオ137',
      image: 'https://scrapbox.io/files/64ea4ae2144a8e001c22f951.png',
      title: 'クイズ大会一問目',
      text: '問題1: この地名の読み方はなんでしょう！',
      actions: [
        {
          type: 'message',
          label: 'ジンバラ',
          text: 'ジンバラ',
        },
        {
          type: 'message',
          label: 'ジンゲン',
          text: 'ジンゲン',
        },
        {
          type: 'message',
          label: 'ジンノハル',
          text: 'ジンノハル',
        },
        {
          type: 'message',
          label: 'ジンノバラ',
          text: 'ジンノバラ',
        },
      ],
    },
  ],
  ジンバラ: [
    {
      type: 'text',
      text: '残念！不正解！',
    },
    {
      type: 'message',
      altText: 'シナリオ138',
      title: 'ジンバラ',
      text: '間違えていたようだ。\nもう一度考えよう。',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会一問目',
          text: 'クイズ大会一問目',
        },
      ],
    },
  ],
  ジンゲン: [
    {
      type: 'text',
      text: '残念！不正解！',
    },
    {
      type: 'message',
      altText: 'シナリオ139',
      title: 'ジンゲン',
      text: '間違えていたようだ。\nもう一度考えよう。',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会一問目',
          text: 'クイズ大会一問目',
        },
      ],
    },
  ],
  ジンノバラ: [
    {
      type: 'text',
      text: '残念！不正解！',
    },
    {
      type: 'message',
      altText: 'シナリオ139',
      title: 'ジンノバラ',
      text: '間違えていたようだ。\nもう一度考えよう。',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会一問目',
          text: 'クイズ大会一問目',
        },
      ],
    },
  ],
  ジンノハル: [
    {
      type: 'text',
      text: '正解！\n答えは「ジンノハル」',
    },
    {
      type: 'message',
      altText: 'シナリオ140',
      image: 'https://scrapbox.io/files/64ea4c3f9bae44001b1560e2.png',
      title: 'ジンノハル',
      text: '正解したようだ。\n…なんでこれがハルになるんだ？\nまぁ正解したことだし次の問題へ行こう',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会二問目',
          text: 'クイズ大会二問目',
        },
      ],
    },
  ],
  クイズ大会二問目: [
    {
      type: 'message',
      altText: 'シナリオ141',
      image: 'https://scrapbox.io/files/64ea4c7cde4a07001c5ff09b.png',
      title: 'クイズ大会二問目',
      text: '問題2: この地名の読み方はなんでしょう！',
      actions: [
        {
          type: 'message',
          label: 'クサミ',
          text: 'クサミ',
        },
        {
          type: 'message',
          label: 'キュウマイ',
          text: 'キュウマイ',
        },
        {
          type: 'message',
          label: 'クモウ',
          text: 'クモウ',
        },
        {
          type: 'message',
          label: 'キリメ',
          text: 'キリメ',
        },
      ],
    },
  ],
  キュウマイ: [
    {
      type: 'text',
      text: '残念！不正解！',
    },
    {
      type: 'message',
      altText: 'シナリオ142',
      title: 'キュウマイ',
      text: '間違えていたようだ。\nもう一度考えよう。',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会二問目',
          text: 'クイズ大会二問目',
        },
      ],
    },
  ],
  クモウ: [
    {
      type: 'text',
      text: '残念！不正解！',
    },
    {
      type: 'message',
      altText: 'シナリオ143',
      title: 'クモウ',
      text: '間違えていたようだ。\nもう一度考えよう。',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会二問目',
          text: 'クイズ大会二問目',
        },
      ],
    },
  ],
  キリメ: [
    {
      type: 'text',
      text: '残念！不正解！',
    },
    {
      type: 'message',
      altText: 'シナリオ144',
      title: 'キリメ',
      text: '間違えていたようだ。\nもう一度考えよう。',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会二問目',
          text: 'クイズ大会二問目',
        },
      ],
    },
  ],
  クサミ: [
    {
      type: 'text',
      text: '正解！\n答えは「クサミ」',
    },
    {
      type: 'message',
      altText: 'シナリオ145',
      image: 'https://scrapbox.io/files/64ea4c3f9bae44001b1560e2.png',
      title: 'クサミ',
      text: '正解したようだ。\nうーん…なるほどわからん！\nさあ次が最終問題だ！',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会三問目',
          text: 'クイズ大会三問目',
        },
      ],
    },
  ],
  クイズ大会三問目: [
    {
      type: 'message',
      altText: 'シナリオ146',
      image: 'https://scrapbox.io/files/64ea4ef01d66db001ced00f8.png',
      title: 'クイズ大会三問目',
      text: '最終問題: この地名の読み方はなんでしょう！',
      actions: [
        {
          type: 'message',
          label: 'クキュウオカ',
          text: 'クキュウオカ',
        },
        {
          type: 'message',
          label: 'キキュウノオカ',
          text: 'キキュウノオカ',
        },
        {
          type: 'message',
          label: 'キクガオカ',
          text: 'キクガオカ',
        },
        {
          type: 'message',
          label: 'クワキュウノオカ',
          text: 'クワキュウノオカ',
        },
      ],
    },
  ],
  クキュウオカ: [
    {
      type: 'text',
      text: '残念！不正解！',
    },
    {
      type: 'message',
      altText: 'シナリオ147',
      title: 'クキュウオカ',
      text: '間違えていたようだ。\nもう一度考えよう。',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会三問目',
          text: 'クイズ大会三問目',
        },
      ],
    },
  ],
  キキュウノオカ: [
    {
      type: 'text',
      text: '残念！不正解！',
    },
    {
      type: 'message',
      altText: 'シナリオ148',
      title: 'キキュウノオカ',
      text: '間違えていたようだ。\nもう一度考えよう。',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会三問目',
          text: 'クイズ大会三問目',
        },
      ],
    },
  ],
  クワキュウノオカ: [
    {
      type: 'text',
      text: '残念！不正解！',
    },
    {
      type: 'message',
      altText: 'シナリオ149',
      title: 'クワキュウノオカ',
      text: '間違えていたようだ。\nもう一度考えよう。',
      actions: [
        {
          type: 'message',
          label: 'クイズ大会三問目',
          text: 'クイズ大会三問目',
        },
      ],
    },
  ],
  キクガオカ: [
    {
      type: 'text',
      text: '正解！\n答えは「キクガオカ」',
    },
    {
      type: 'message',
      altText: 'シナリオ150',
      image: 'https://scrapbox.io/files/64ea4c3f9bae44001b1560e2.png',
      title: 'キクガオカ',
      text: '正解したようだ。\n読めば読むほど不思議な感じ\nでもこれで全問正解だ！',
      actions: [
        {
          type: 'message',
          label: '全問正解の景品',
          text: '未実装',
        },
      ],
    },
  ],
  // 全問正解の景品: [
  //   {
  //     type: 'text',
  //     text: '',
  //   },
  //   {
  //     type: 'message',
  //     altText: '',
  //     image: '',
  //     title: '',
  //     text: '',
  //     actions: [
  //       {
  //         type: 'message',
  //         label: '',
  //         text: '',
  //       },
  //     ],
  //   },
  // ],
  ダミー: [
    {
      type: 'text',
      text: '',
    },
    {
      type: 'message',
      altText: '',
      image: '',
      title: '',
      text: '',
      actions: [
        {
          type: 'message',
          label: '',
          text: '',
        },
      ],
    },
  ],
  未実装: [
    {
      type: 'message',
      altText: 'シナリオ-1',
      title: '未実装',
      text: 'まだ実装されていないようだ...\nシナリオアプデを待て!!',
      actions: [
        {
          type: 'message',
          label: '小倉へ戻る',
          text: '小倉駅に到着',
        },
      ],
    },
  ],
  'GameOver...': [
    {
      type: 'message',
      altText: 'シナリオ000',
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
};

export const scenarioKeys = Object.keys(noticeList);
