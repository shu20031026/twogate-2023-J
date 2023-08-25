#!/bin/bash

source ./.env.local
RES=$(curl -v -X POST https://api.line.me/v2/bot/richmenu \
-H "Authorization: Bearer $NEXT_PUBLIC_LINE_CHANNEL_ACCESS_TOKEN" \
-H 'Content-Type: application/json' \
-d \
'{
  "size":{
    "width":800,
    "height":540
  },
  "selected": false,
  "name": "LINE Developers Info",
  "chatBarText": "メニュー",
  "areas": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 533,
        "height": 270
      },
      "action": {
        "type": "message",
        "label": "ゲームスタート",
        "text": "小倉駅に到着"
      }
    },
    {
      "bounds": {
        "x": 534,
        "y": 0,
        "width": 266,
        "height": 270
      },
        "action": {
        "type": "message",
        "label": "あそびかた",
        "text": "あそびかた"
      }
    }, 
    {
      "bounds": {
        "x": 0,
        "y": 270,
        "width": 266,
        "height": 270
      },
      "action": {
        "type": "message",
        "label": "マップ",
        "text": "マップ"
      }
    },
    {
      "bounds": {
        "x": 266,
        "y": 270,
        "width": 266,
        "height": 270
      },
      "action": {
        "type": "uri",
        "label": "駅図鑑",
        "uri": "https://liff.line.me/2000511797-WMOglq88"
      }
    },
    {
      "bounds": {
        "x": 534,
        "y": 270,
        "width": 266,
        "height": 270
      },
       "action": {
        "type": "uri",
        "label": "シナリオリスト",
        "uri": "https://liff.line.me/2000511797-WMOglq88/scenario"
      }
    }
  ]
}')

richMenuId=$(echo $RES | jq -r '.richMenuId')
curl -v -X POST https://api-data.line.me/v2/bot/richmenu/$richMenuId/content \
-H "Authorization: Bearer $NEXT_PUBLIC_LINE_CHANNEL_ACCESS_TOKEN" \
-H "Content-Type: image/jpeg" \
-T ./public/richmenu.png


curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/$richMenuId \
-H "Authorization: Bearer $NEXT_PUBLIC_LINE_CHANNEL_ACCESS_TOKEN"
