const APIkey = "Z1j3BGGZmtlFXXQ16umx15lILiiHsOld"

var dnf = 'https://api.neople.co.kr/df/auction'

var itemId;         //아이템ID
var itemName;       //아이템명
var count;          //아이템개수
var unitPrice;      //개당 가격
var currentPrice;   //현재가(총합)
var avgPrice;       //평균가(개당)

var jsonData; //json 파싱 데이터
var url;      //json url
var answer;   //최종 응답
var botsay;   //봇이 할말
var frequentlyresponseBody;

const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const { request, response } = require('express');
const { json } = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);

//응답 예제
apiRouter.post('/sayHello', function (req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "hello I'm Ryan"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

//응답 예제 (카드형)
apiRouter.post('/showHello', function (req, res) {
  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
            altText: "hello I'm Ryan"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

function setErrorTalk() {
  botsay = '에러발생, 상담직원전환 -> 현재화면을 보내주시면 감사하겠습니다.';
}

apiRouter.post('/frequentlyItem', function (req, res) {
  var user_key = decodeURIComponent(req.body.user_key); // user's key
  var type = decodeURIComponent(req.body.type); // message type
  var content = decodeURIComponent(req.body.content); // user's message

  console.log(req.body);

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "아래 종류 중 한가지를 선택해주세요."
          }
        }
      ],
      quickReplies: [
        {
          "messageText": "생명의 숨결",
          "action": "message",
          "label": "생명의 숨결"
        },
        {
          "messageText": "황금 가루",
          "action": "message",
          "label": "황금 가루"
        },
        {
          "messageText": "아이올라이트",
          "action": "message",
          "label": "아이올라이트"
        },
        {
          "messageText": "시간의 결정",
          "action": "message",
          "label": "시간의 결정"
        }
      ]
    }
  };

  res.status(200).send(responseBody);

});

apiRouter.post('/findItem', function (req, res) {
  console.log(req.body);

  const question = req.body.user

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleImage: {
            imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
            altText: "hello I'm Ryan"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

//생숨
apiRouter.post('/freSengsum', function (req, res) {
  const request = require('request');

  url1 = "https://api.neople.co.kr/df/auction?itemName=" + "%EC%83%9D%EB%AA%85%EC%9D%98%20%EC%88%A8%EA%B2%B0" + "&apikey=" + APIkey;
  console.log('url 1=' + url1);
  //생숨
  request.get({ uri: url1 }, function (error, response, body) {

    if (!error) {
      jsonData = JSON.parse(body);
      jsonData = jsonData.rows[0];
      itemId = jsonData.itemId;
      console.log(itemId);

      itemName = jsonData.itemName;
      count = jsonData.count;
      unitPrice = jsonData.unitPrice;
      currentPrice = jsonData.currentPrice;
      avgPrice = jsonData.averagePrice;

      const responseBody = {
        version: "2.0",
        template: {
          outputs: [
            {
              basicCard: {
                title: itemName,
                description: "개수 : " + count + "\n" +
                  "개당 가격 : " + unitPrice + "\n" +
                  "종합 가격 : " + currentPrice + "\n" +
                  "평균가 : " + avgPrice,
                thumbnail: {
                  imageUrl: "https://img-api.neople.co.kr/df/items/" + itemId
                }
              }
            }
          ]
        }
      };

      res.status(200).send(responseBody);

    } else {
      setErrorTalk();
      lastCall();
    }
  });
});

//황가
apiRouter.post('/freHwangGa', function (req, res) {
  const request = require('request');

  url2 = "https://api.neople.co.kr/df/auction?itemName=" + "%ED%99%A9%EA%B8%88%20%EA%B0%80%EB%A3%A8" + "&apikey=" + APIkey;
  //황가
  request.get({ uri: url2 }, function (error, response, body) {

    if (!error) {
      jsonData = JSON.parse(body);
      jsonData = jsonData.rows[0];
      itemId = jsonData.itemId;
      console.log(itemId);

      itemName = jsonData.itemName;
      count = jsonData.count;
      unitPrice = jsonData.unitPrice;
      currentPrice = jsonData.currentPrice;
      avgPrice = jsonData.averagePrice;

      const responseBody = {
        version: "2.0",
        template: {
          outputs: [
            {
              basicCard: {
                title: itemName,
                description: "개수 : " + count + "\n" +
                  "개당 가격 : " + unitPrice + "\n" +
                  "종합 가격 : " + currentPrice + "\n" +
                  "평균가 : " + avgPrice,
                thumbnail: {
                  imageUrl: "https://img-api.neople.co.kr/df/items/" + itemId
                }
              }
            }
          ]
        }
      };

      res.status(200).send(responseBody);

    } else {
      setErrorTalk();
      lastCall();
    }
  });
});

//아올
apiRouter.post('/freAiol', function (req, res) {

  const request = require('request');
  url3 = "https://api.neople.co.kr/df/auction?itemName=" + "%EC%95%84%EC%9D%B4%EC%98%AC%EB%9D%BC%EC%9D%B4%ED%8A%B8" + "&apikey=" + APIkey;
  //아올
  request.get({ uri: url3 }, function (error, response, body) {

    if (!error) {
      jsonData = JSON.parse(body);
      jsonData = jsonData.rows[0];
      itemId = jsonData.itemId;
      console.log(itemId);

      itemName = jsonData.itemName;
      count = jsonData.count;
      unitPrice = jsonData.unitPrice;
      currentPrice = jsonData.currentPrice;
      avgPrice = jsonData.averagePrice;

      const responseBody = {
        version: "2.0",
        template: {
          outputs: [
            {
              basicCard: {
                title: itemName,
                description: "개수 : " + count + "\n" +
                  "개당 가격 : " + unitPrice + "\n" +
                  "종합 가격 : " + currentPrice + "\n" +
                  "평균가 : " + avgPrice,
                thumbnail: {
                  imageUrl: "https://img-api.neople.co.kr/df/items/" + itemId
                }
              }
            }
          ]
        }
      };

      res.status(200).send(responseBody);

    } else {
      setErrorTalk();
      lastCall();
    }
  });
});

//시결
apiRouter.post('/freSigyul', function (req, res) {

  const request = require('request');
  url4 = "https://api.neople.co.kr/df/auction?itemName=" + "%EC%8B%9C%EA%B0%84%EC%9D%98%20%EA%B2%B0%EC%A0%95" + "&apikey=" + APIkey;
  //시결
  request.get({ uri: url4 }, function (error, response, body) {

    if (!error) {
      jsonData = JSON.parse(body);
      jsonData = jsonData.rows[0];
      itemId = jsonData.itemId;
      console.log(itemId);

      itemName = jsonData.itemName;
      count = jsonData.count;
      unitPrice = jsonData.unitPrice;
      currentPrice = jsonData.currentPrice;
      avgPrice = jsonData.averagePrice;

      const responseBody = {
        version: "2.0",
        template: {
          outputs: [
            {
              basicCard: {
                title: itemName,
                description: "개수 : " + count + "\n" +
                  "개당 가격 : " + unitPrice + "\n" +
                  "종합 가격 : " + currentPrice + "\n" +
                  "평균가 : " + avgPrice,
                thumbnail: {
                  imageUrl: "https://img-api.neople.co.kr/df/items/" + itemId
                }
              }
            }
          ]
        }
      };

      res.status(200).send(responseBody);

    } else {
      setErrorTalk();
      lastCall();
    }
  });

});

apiRouter.post("/item", function (req, res) {

  var user_key = decodeURIComponent(req.body.user_key); // user's key
  var type = decodeURIComponent(req.body.type); // message type
  var content = decodeURIComponent(req.body.content); // user's message

  //var content = encodeURI(content);
  var content = encodeURI(req.body.userRequest.utterance);
  content.replace("\n", "");


  // var user_key = 'asdf'
  // var type = 'text'; // message type
  // var content = '생명의 숨결'; // user's message

  console.log(user_key);
  console.log(type);
  console.log(content);

  function setMsg(msg) {
    answer = {
      'message': {
        'text': msg
      }
    }
  }

  function lastCall() {
    setMsg(botsay);
    res.set({
      'content-type': 'application/json'
    }).send(JSON.stringify(answer));
  }

  function cannotFind() {
    botsay = '아이템을 정확히 입력해주세요, 약칭은 개선해 나가겠습니다 ㅠㅠ';
    lastCall();
  }

  function findItem() {
    const request = require('request');
    url = "https://api.neople.co.kr/df/auction?itemName=" + content + "&apikey=" + APIkey;
    console.log('url 1=' + url);
    request.get({ uri: url }, function (error, response, body) {

      if (!error) {
        jsonData = JSON.parse(body);
        jsonData = jsonData.rows[0];
        itemId = jsonData.itemId;
        console.log(itemId);

        itemName = jsonData.itemName;
        count = jsonData.count;
        unitPrice = jsonData.unitPrice;
        currentPrice = jsonData.currentPrice;
        avgPrice = jsonData.averagePrice;

        const responseBody = {
          version: "2.0",
          template: {
            outputs: [
              {
                basicCard: {
                  title: itemName,
                  description: "개수 : " + count + "\n" +
                    "개당 가격 : " + unitPrice + "\n" +
                    "종합 가격 : " + currentPrice + "\n" +
                    "평균가 : " + avgPrice,
                  thumbnail: {
                    imageUrl: "https://img-api.neople.co.kr/df/items/" + itemId
                  }
                }
              }
            ]
          }
        };

        res.status(200).send(responseBody);

      } else {
        setErrorTalk();
        lastCall();
      }
    });
  }
  //함수 선언 끝

  // const userRequest = req.body.userRequest;

  findItem();
  console.log(req.body);

  // const question = req.body.user

  // botsay = '검색을 원하는 아이템명을 입력해주세요';
  // lastCall();
  // console.log(lastCall());

  // const responseBody = {
  //   version: "2.0",
  //   template: {
  //     outputs: [
  //       {
  //         basicCard: {
  //           title: itemName,
  //           description: "개수 : " + count + "\n" + "개당 가격 : " + unitPrice + "\n",
  //           thumbnail:{
  //             imageUrl: "https://img-api.neople.co.kr/df/items/" + itemId
  //           }
  //         }
  //       }
  //     ]
  //   }
  // };

  // res.status(200).send(responseBody);

  // const responseBody = {
  //   version: "2.0",
  //   template: {
  //     outputs: [
  //       {
  //         simpleImage: {
  //           imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
  //           altText: itemName
  //         }
  //       }
  //     ]
  //   }
  // };

  // res.status(200).send(responseBody);
});




apiRouter.get('/keyboard', (req, res) => {
  const data = { 'type': 'text' }
  res.json(data);
});

app.listen(3000, function () {
  console.log('Example skill server listening on port 3000!');
});