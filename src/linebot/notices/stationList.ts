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
    name: '小倉',
    route: ['日豊本線', '日田彦山線', '鹿児島本線', '北九州モノレール'],
    image: 'https://scrapbox.io/files/64e8666cbf5678001cdd61c3.jpeg',
    keyScenario: '小倉駅に到着',
    text: `北九州市最大の駅。JR九州内では福岡市の博多駅に次ぐ利用者数を誇る。

    駅内にショッピングモールがあったり、駅の外に出ても飲食店や遊ぶ場所は多数あり、小倉だけでも時間を忘れて遊ぶことができる。
    「とりあえず小倉行こうぜ！」が北九州市民にとってのあるあるである。
    
    かつて北九州市は修羅の町と呼ばれ、水鉄砲ではない本物の銃が飛び交ったりする危険な町という印象もあった。
    しかし近年の北九州は12年連続次世代育成環境ランキング1位で子育てがしやすい等、住みやすい素晴らしい街になっている。
    `,
    references: [
      {
        url: 'https://tabelog.com/fukuoka/A4004/A400401/R3954/rstLst/',
        about: '小倉駅周辺のお店 - 食べログ',
      },
    ],
  },
  {
    name: '門司',
    route: ['鹿児島本線'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Moji_Station_20181224.jpg/600px-Moji_Station_20181224.jpg',
    keyScenario: '門司へ行く',
    text: `昔は大里という名前で現在の門司港駅が門司駅だった。
門司赤煉瓦プレイスや門司港レトロなど、門司周辺は近代的なロマンを感じる建物が多くある。

門司赤煉瓦プレイス内にはカフェなどいくつかお店がある。`,
    references: [
      {
        url: 'https://mojirenga.jp/',
        about: '門司赤煉瓦プレイス ホームページ',
      },
    ],
  },
  {
    name: '小森江',
    route: ['鹿児島本線'],
    image: 'https://scrapbox.io/files/64e8e13e503e0c001cdf623c.jpeg',
    keyScenario: '小森江駅に向かう',
    text: `ひらけた視界なのでホームから関門海峡や巌流島が見ることができる。

シナリオで出てきた怪獣は「COME ON! 関門」というCMが元ネタ。
詳しくはぜひ動画を見てもらいたい。海外でバズったようで再生回数は2億回超えである。`,
    references: [
      {
        url: 'https://www.youtube.com/watch?v=x0qYA53uSVA',
        about: '関門海峡PRムービー「 COME ON！関門!」',
      },
    ],
  },
  {
    name: '門司港',
    route: ['鹿児島本線'],
    image: 'https://scrapbox.io/files/64e8e3946d681e001b692ba7.jpeg',
    keyScenario: '門司港へ向かう',
    text: `北九州市最大の観光地、門司港レトロの入り口。
門司港レトロとあるだけに、その駅もかなり近代的なロマンあふれる風景がそのまま残されている。

門司港の周りには名物の焼きカレーを始めとした飲食店はあったりしてめぐるだけでも楽しいが、シナリオ中に出てきたようなバナナの叩き売りなんかも体験してみるのもいいだろう。
バナナの叩き売り発祥の地はここ北九州市なのだ。`,
    references: [
      {
        url: 'https://www.mojiko.info/',
        about: '【公式】門司港レトロ',
      },
      {
        url: 'https://kanmon.gr.jp/kanmon-heart/',
        about: 'カンモンハート（KANMON HEART）を探せ！',
      },
    ],
  },
  {
    name: '西小倉',
    route: ['日豊本線', '日田彦山線', '鹿児島本線'],
    image: 'https://scrapbox.io/files/64e8806412a993001c477116.jpeg',
    keyScenario: '西小倉へ行く',
    text: `鹿児島本線、日豊本線方面を分ける駅。

映画やショッピングが楽しめるリバーウォーク北九州や古くから小倉に立つ小倉城の最寄りになっている。
イベントも頻繁に開催されており屋台が出ていることもよくあります。
リバーウォークに行くつもりで間違えて小倉駅に行くこともしばしば。

近くには高専生御用達の二郎系ラーメン屋「だるま」の小倉店も存在する。他の店舗より心なしか油が多めな小倉店での全マシマシカラメは滅びの呪文。
`,
    references: [
      {
        url: 'https://riverwalk.co.jp/',
        about: 'リバーウォーク北九州ホームページ',
      },
      {
        url: 'https://www.kokura-castle.jp/',
        about: '小倉城 ホームページ',
      },
      {
        url: 'https://tabelog.com/fukuoka/A4004/A400401/40044397/',
        about: '食べログ ラーメンだるま 小倉店',
      },
    ],
  },
  {
    name: '九州工大前',
    route: ['鹿児島本線'],
    image: 'https://scrapbox.io/files/64e8d49cfddf09001b8418ce.jpeg',
    keyScenario: '九州工大前に向かう',
    text: `
    名前の通り九州工業大学 戸畑キャンパスの目の前にある駅。

ラーメンだるまは北九州市内の学生がこよなく愛することで有名な二郎系ラーメンのローカルチェーン店。その本店である戸畑店はここ九州工大前駅が最寄りだ。ここに限らず、全マシマシを頼むのは修羅と心得ることが大切。
作者のおすすめは汁なしラーメン(750円)に豚マシ(100円)と粉チーズ(100円)をトッピング、アブラ・ヤサイ・ニンニクは体調に合わせて。
`,
    references: [
      {
        url: 'https://tabelog.com/fukuoka/A4004/A400402/40027919/',
        about: '食べログ ラーメン だるま - 戸畑本店',
      },
    ],
  },
  {
    name: '戸畑',
    route: ['鹿児島本線'],
    image: 'https://scrapbox.io/files/64e8d61adba05c001c8579c0.jpeg',
    keyScenario: '戸畑へ向かう',
    text: `
朝の時間帯は特に通勤通学客で賑わう大きい駅。

北九州市立美術館のネタは、共に美術館をロケ地とした映画から。
北九州市立美術館では映画「DEATH NOTE」や「図書館戦争」の撮影が行われたのみならず、北九州の街全体で映画撮影を行うこともあり、特撮の映画の舞台になったこともある。`,
    references: [
      {
        url: 'https://kmma.jp/',
        about: '北九州市立美術館',
      },
    ],
  },
  {
    name: '枝光',
    route: ['鹿児島本線'],
    image: 'https://scrapbox.io/files/64e8d837fac870001bcf543f.jpeg',
    keyScenario: '枝光へ向かう',
    text: `
スペースワールド駅ができる前まではスペースワールドの最寄り駅だった、1908年からある古い駅。

シナリオに出てきた温泉は、付近にあるシーサイドスパ。旅に疲れた時、ふと寄ってみてはいかがだろうか。`,
    references: [
      {
        url: 'https://www.souyu.co.jp/shisetsu/seaside',
        about: 'シーサイドスパ ',
      },
    ],
  },
  {
    name: 'スペースワールド',
    route: ['鹿児島本線'],
    keyScenario: 'スペースワールドへ向かう',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/JRK-SpaceWorldStation-02.jpg',
    text: `
読んで字の如くスペースワールド(跡地)に最も近い駅。
名前は公募で最多得票を獲得したためこうなったらしい。今はなき遊園地スペースワールドがどれだけ北九州市民に愛されていたかの証明である。
現在は跡地にアウトレットモールがオープンしているので訪れてみては。

作中で出てきたものは全ていのちのたび博物館にて見ることができる。
タイムスリップした気分で地球の歴史に思いを馳せることができるだろう`,
    references: [
      {
        url: 'https://ja.wikipedia.org/wiki/スペースワールド',
        about: 'スペースワールド - Wikipedia',
      },
      {
        url: 'https://www.kmnh.jp/',
        about: '北九州市立いのちのたび博物館 ホームページ',
      },
    ],
  },
  {
    name: '八幡',
    route: ['鹿児島本線'],
    image: 'https://scrapbox.io/files/64e8db15323bcd001c98b06a.jpeg',
    keyScenario: '八幡へ向かう',
    text: `
八幡といえば八幡製鐵所！みたいなところは正直ある。
長年北九州の産業を支えてきた、重要な場所。

なお、ネジチョコはまじで販売されている。`,
    references: [
      {
        url: 'https://ja.wikipedia.org/wiki/官営八幡製鐵所',
        about: '官営八幡製鐵所 - Wikipedia',
      },
      {
        url: 'https://nejichocolab.jp/',
        about: 'NEJI CHOCO LABORATORY ホームページ',
      },
    ],
  },
  {
    name: '黒崎',
    route: ['鹿児島本線'],
    image: 'https://scrapbox.io/files/64e8dc5bed6629001d83d5ac.jpeg',
    keyScenario: '黒崎へ向かう',
    text: `
北九州市内で1日の利用客数がトップ3に入るくらい利用者が多い駅になる。
小倉に負けないくらいのお店の多さで、辺りには多くの看板が立っている。

北九州のお菓子といえばシロヤ、シロヤいえばサニーパンである。
安い上にシンプルにうまいということで2桁個数を買って家族で食べる人も多い。
`,
    references: [
      {
        url: 'https://shiroya-pan.com/',
        about: 'シロヤ【公式サイト】',
      },
    ],
  },
  {
    name: '陣原',
    route: ['鹿児島本線'],
    image: 'https://scrapbox.io/files/64e8de4a9ce963001ca77933.jpeg',
    keyScenario: '陣原へ向かう',
    text: `
難読地名こと陣原、読み方は「ジンノハル」
北九州周辺では「原」は「ハル」や「バル」と読みがち。
無理ゲーが過ぎる。

クイズ大会を開いたのは北九州の地名の面白さを知ってもらうため。他の地方でもあると思うけど、市民としては知って欲しい気持ちでシナリオを書いた。
`,
    references: [
      {
        url: 'https://shiroya-pan.com/',
        about: 'シロヤ【公式サイト】',
      },
    ],
  },
  {
    name: '折尾',
    route: ['鹿児島本線', '若松線'],
    image: 'https://scrapbox.io/files/64e8e56b046eff001b06b4ce.jpeg',
    keyScenario: '折尾へ向かう',
    text: `
鹿児島本線と若松線を繋ぐ駅。
北九州の中でも利用者数が多い駅になる。
2023年の秋に商業施設もできるようだ。

折尾駅の駅弁として有名な東筑軒のかしわめしは一度は食べてほしい一品である。
`,
    references: [
      {
        url: 'https://tochikuken.co.jp/',
        about: '東筑軒 | 折尾名物かしわめし',
      },
    ],
  },
  {
    name: '本城',
    route: ['若松線'],
    image: 'https://scrapbox.io/files/64e8e6ab7d61bd001cb72931.jpeg',
    keyScenario: '本城へ向かう',
    text: `
比較的若い駅。折尾〜若松間の駅は全て無人駅になっている。

北九州といえば本城を拠点としているギラヴァンツ北九州というチームがありサッカーも熱い。
`,
    references: [
      {
        url: 'https://www.giravanz.jp/',
        about: 'ギラヴァンツ北九州 オフィシャルサイト',
      },
    ],
  },
  {
    name: '二島',
    route: ['若松線'],
    image: 'https://scrapbox.io/files/64e8e7e934c00b001b4e41a7.png',
    keyScenario: '二島へ向かう',
    text: `
本城から陸を分断している川を乗り越えると到着できる駅。

近くの老舗パン屋の元ネタはベーカリーさくらい。
いろんな種類のパンがあって、どれを食べてもハズレなし。
`,
    references: [
      {
        url: 'https://tabelog.com/fukuoka/A4004/A400503/40063163/',
        about: 'ベーカリーさくらい - 食べログ',
      },
    ],
  },
  {
    name: '奥洞海',
    route: ['若松線'],
    image: 'https://scrapbox.io/files/64e8e9310ce2ce001cb3b205.jpeg',
    keyScenario: '奥洞海へ向かう',
    text: `
住宅街のどまんなかにある駅。当初は全日本モーターボート選手権競走のための仮停車場として作られた。

「洞海湾に沈めるぞ」は市民鉄板の脅し文句。
`,
    references: [
      {
        url: 'https://ja.wikipedia.org/wiki/奥洞海駅',
        about: '奥洞海駅',
      },
    ],
  },
  {
    name: '藤ノ木',
    route: ['若松線'],
    image: 'https://scrapbox.io/files/64e8ea8cc8b7d4001cf51d6d.jpeg',
    keyScenario: '藤ノ木へ向かう',
    text: `
シンプルな白い外観が特徴的な駅。
若松まではもう一歩だ。
`,
    references: [
      {
        url: 'https://ja.wikipedia.org/wiki/藤ノ木駅',
        about: '藤ノ木駅 - Wikipedia',
      },
    ],
  },
  {
    name: '若松',
    route: ['若松線'],
    image: 'https://scrapbox.io/files/64e8eba37aca91001b67fc7f.jpeg',
    keyScenario: '藤ノ木へ向かう',
    text: `
若松線の終点。

若松と戸畑を結ぶ大きな赤い橋「若戸大橋」の夜景はライトアップされており美しい赤色は圧巻である。

若松にはボートレース場が存在する。
北九州市はボートレース・競輪場・競馬場があり近くの飯塚市にはオートレースもあって、ギャンプラーにとっては夢の街と言えるだろう。
`,
    references: [
      {
        url: 'https://ja.wikipedia.org/wiki/藤ノ木駅',
        about: '藤ノ木駅 - Wikipedia',
      },
    ],
  },
  {
    name: '南小倉',
    route: ['日豊本線', '日田彦山線'],
    image: 'https://scrapbox.io/files/64e8831689d4f5001c4ddd39.jpeg',
    keyScenario: '南小倉へ行く',
    text: `
山田弾薬庫への専用線として設置された信号場が元になった駅。

誰もがお世話になっているであろう、TOTOの本社はここ北九州市にある。

シナリオ内で出てきた謎の黒い物体は、TOTOのCMに出てきた「ビッグベン」「リトルベン」という親子の菌が元ネタ。
本社にはTOTOミュージアムもあるので近くに来た人はぜひ。
`,
    references: [
      {
        url: 'https://jp.toto.com/knowledge/visit/museum/',
        about: 'TOTOミュージアム',
      },
    ],
  },
  {
    name: '城野',
    route: ['日豊本線', '日田彦山線'],
    image: 'https://scrapbox.io/files/64e887ec8a56c4001c4dcf2e.jpeg',
    keyScenario: '城野に向かう',
    text: `
日豊本線、日田彦山線を分ける駅。
この辺りにしては綺麗な外観の駅が特徴。

シナリオ中に出てきた駄菓子屋のモデルは児玉商店だが、どうやら閉店してしまったようだ。
シナリオ作者思い出の場所。
`,
    references: [
      {
        url: 'https://ja.wikipedia.org/wiki/城野駅_(JR九州)',
        about: 'JR城野駅 - Wikipedia',
      },
    ],
  },
  {
    name: '安部山公園',
    route: ['日豊本線'],
    image: 'https://scrapbox.io/files/64e889e1541d76001ba5f401.jpeg',
    keyScenario: '安部山公園に行く',
    text: `
安部山公園の前にある駅。

近くには福岡三大うどんチェーンの一つである資さんうどんの本店があったりする。
実は福岡県民にとってはラーメンよりうどんのほうが身近な存在。

ちなみに駅最寄りの資さんが本店というわけではない。資さんうどんが如何に北九州に深く根付いているかがよく分かる。
北九州市に来たら資さんうどんのかしわごぼ天うどんとおはぎは食べて帰ろう。
`,
    references: [
      {
        url: 'https://www.sukesanudon.com/',
        about: '資さんうどん 公式ホームページa',
      },
    ],
  },
  {
    name: '下曽根',
    route: ['日豊本線'],
    image: 'https://scrapbox.io/files/64e88c81d3bc55001cc9cdff.jpeg',
    keyScenario: '下曽根に向かう',
    text: `
付近には住宅街が広がり、駅の近くには商業施設もたくさんあることから日豊本線の中でも多くの人が利用する駅。

シナリオ内で登場したご当地ヒーローの名前は「キタキュウマン」という。
福岡県のローカル特撮番組「ドゲンジャーズ」に出演していることや、時折バズる独特なツイートで大人気である。
`,
    references: [
      {
        url: 'http://kitaqman.jp/',
        about: 'キタキュウマン【公式】',
      },
      {
        url: 'https://dogengers.com/location/',
        about: 'ドゲンジャーズ【公式】',
      },
    ],
  },
  {
    name: '朽網',
    route: ['日豊本線'],
    image: 'https://scrapbox.io/files/64e8c811503e0c001cde38ee.jpeg',
    keyScenario: '朽網へ行く',
    text: `
北九州の難読地名。「クサミ」と読む。
子供と遊んでいる公園は朽網中央公園をモデルに書いている。

日豊本線はこの先、日産の工場などがある工業団地である苅田町へと続き大分県まで伸びている。
`,
    references: [
      {
        url: 'https://ja.wikipedia.org/wiki/北九州弁',
        about: '北九州弁 - Wikipedia',
      },
    ],
  },
  {
    name: '石田',
    route: ['日田彦山線'],
    image: 'https://scrapbox.io/files/64e8ca85c8b7d4001cf3c993.jpeg',
    keyScenario: '石田に行く',
    text: `
ここから日田彦山線の本番になる駅。
基本的に周りは住宅街になっており、周辺の住民が移動に使うくらいである。
日田彦山線に乗るとこの先は田畑や山々が広がるのどかな田園地帯。

北九州はよく「修羅の街」などと言われるが、シナリオにあるようにチンピラが出るかと言われればそんなに治安は悪くない。

…と思う。

ちなみに旧駅舎の方が今の駅舎より立派だったりする。
`,
    references: [
      {
        url: 'https://www.retro-station.jp/09_kyushu/ishida.html',
        about: '旧石田駅参考',
      },
    ],
  },
  {
    name: '志井公園',
    route: ['日田彦山線'],
    image: 'https://scrapbox.io/files/64e8cd20503e0c001cde6ae4.jpeg',
    keyScenario: '志井公園へ向かう',
    text: `
近くにアドベンチャープールという人気のプールがあり、夏場の利用者は多くなる。
何を隠そう志井公園は我らが北九州高専の最寄り駅である。
一時間に一本ほどしかない電車に乗らねば遅刻してしまうので毎朝日田彦山線は多くの高専生で満たされている。

そういえば先日弊校の公式ホームページがリニューアルされておしゃれになってて、web系技術ユーザーである作者はちょっとテンション上がった。
`,
    references: [
      {
        url: 'http://adpool.jp/',
        about: 'アドベンチャープール ホームページ',
      },
      {
        url: 'https://www.kct.ac.jp/',
        about: '北九州工業高等専門学校ホームページ',
      },
    ],
  },
  {
    name: '志井',
    route: ['日田彦山線'],
    image: 'https://scrapbox.io/files/64e8cf7b767536001b45c7f7.jpeg',
    keyScenario: '志井に向かう',
    text: `
こんな駅があるんだなという印象すら受ける今時珍しい駅。
あたりには田んぼと住宅街が広がっている。

シナリオ中でおじいさんがくれたのは湖月堂という北九州で有名な和菓子店のもの。
お土産屋等でもよく売られているのでお土産には栗饅頭をどうぞ。
`,
    references: [
      {
        url: 'https://www.kogetsudo.com/',
        about: '湖月堂',
      },
    ],
  },
  {
    name: '石原町',
    route: ['日田彦山線'],
    image: 'https://scrapbox.io/files/64e8d100e6cdbb001cf32b26.jpeg',
    keyScenario: '石原町へ向かう',
    text: `
立地的に作中で書かれるほど近くはないが一応平尾台の最寄り駅。

広大なカルスト台地は圧巻で、鍾乳洞内は夏でも涼しく大人から子供まで楽しめる場所なのでドライブやツーリングの際に是非。
`,
    references: [
      {
        url: 'http://www.hiraodai.jp/',
        about: '平尾台ホームページ',
      },
    ],
  },
  {
    name: '呼野',
    route: ['日田彦山線'],
    image: 'https://scrapbox.io/files/64e8d2d8ae86e6001cc9cc7c.jpeg',
    keyScenario: '呼野へ向かう',
    text: `
北九州市の最果て。
画像を見てのとおり、山奥の辺境の地。
もはや駅とは思えないくらいに何もない。

本編中出てきた蕎麦屋のモデルは青空みあん。おすすめはデザートのプリンなのでいつか行って食べてみて欲しい。
`,
    references: [
      {
        url: 'https://tabelog.com/fukuoka/A4004/A400502/40049254/',
        about: 'そば茶屋 青空みあん - 食べログ',
      },
    ],
  },
];
