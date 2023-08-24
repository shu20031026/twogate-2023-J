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
              "width": 400,
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
              "x": 400,
              "y": 0,
              "width": 400,
              "height": 270
          },
          "action": {
            "type": "message",
            "label": "B",
            "text": "B"
          }
      },
      {
          "bounds": {
              "x": 0,
              "y": 270,
              "width": 400,
              "height": 270
          },
          "action": {
            "type": "message",
            "label": "C",
            "text": "C"
          }
      },
      {
          "bounds": {
              "x": 400,
              "y": 270,
              "width": 400,
              "height": 270
          },
          "action": {
            "type": "message",
            "label": "D",
            "text": "D"
          }
      }
  ]
}')

richMenuId=$(echo $RES | jq -r '.richMenuId')

curl -v -X POST https://api-data.line.me/v2/bot/richmenu/$richMenuId/content \
-H "Authorization: Bearer $NEXT_PUBLIC_LINE_CHANNEL_ACCESS_TOKEN" \
-H "Content-Type: image/jpeg" \
-T ./public/richmenu-template.png


curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/$richMenuId \
-H "Authorization: Bearer $NEXT_PUBLIC_LINE_CHANNEL_ACCESS_TOKEN"
