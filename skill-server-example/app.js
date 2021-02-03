const APIkey = require('./myKey.js');

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

const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

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

apiRouter.post('/frequentlyResources', function (req, res) {
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

apiRouter.post("/blockId", function (req, res) {
  const userRequest = req.body.userRequest;
  const blockId = userRequest.block.id;

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "블록ID 입니다",
            description: blockId
          }
        }
      ]
    }
  }
  res.status(200).send(responseBody);
});

apiRouter.post("/findItem", function (req, res) {

  var user_key = decodeURIComponent(req.body.user_key); // user's key
  var type = decodeURIComponent(req.body.type); // message type
  var content = decodeURIComponent(req.body.content); // user's message

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

  function noDap() {
    botsay = '아이템을 정확히 입력해주세요, 약칭은 개선해 나가겠습니다 ㅠㅠ';
    lastCall();
  }

  function findItem(){
    url = 'https://api.neople.co.kr/df/auction?itemName=%EC%83%9D%EB%AA%85%EC%9D%98%20%EC%88%A8%EA%B2%B0&apikey=Z1j3BGGZmtlFXXQ16umx15lILiiHsOld';
    console.log('url 1=' + url);

    if(!error) {
      jsonData = JSON.parse(body);
      itemId = jsonData[0].itemId;
      console.log(itemId);

      itemName = jsonData.itemName;
      count = jsonData.count;
      unitPrice = jsonData.unitPrice;
      currentPrice = jsonData.currentPrice;
      avgPrice = jsonData.avgPrice;

    } else {
      setErrorTalk();
      lastCall();
    }
  }




  // const userRequest = req.body.userRequest;

  // console.log(req.body);

  // const question = req.body.user

  // const responseBody = {
  //   version: "2.0",
  //   template: {
  //     outputs: [
  //       {
  //         simpleImage: {
  //           imageUrl: "https://t1.daumcdn.net/friends/prod/category/M001_friends_ryan2.jpg",
  //           altText: "hello I'm Ryan"
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