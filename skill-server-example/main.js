function findItem(itemName, replier) {
  var url = 'https://api.neople.co.kr/df/auction?itemName=' + itemName + '&sort=unitPrice:asc&apikey=Z1j3BGGZmtlFXXQ16umx15lILiiHsOld';
  var data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
  data = JSON.parse(data);

  if (data["rows"].length == 0) {
      replier.reply("존재하지 않는 아이템이거나 매물이 없습니다." + '\n' +
                    "존재하는 아이템이라면 ?시세/아이템명 을 입력해주세요.");
  } else {
    replier.reply(
      "아이템 명 : " + data["rows"][0]["itemName"] + '\n' +
      "최저가 : " + data["rows"][0]["unitPrice"] + '\n' +
      "평균가 : " + data["rows"][0]["averagePrice"] + '\n')
  }
}

function soldItem(itemName, replier) {
  url = 'https://api.neople.co.kr/df/auction-sold?itemName=' + itemName + '&apikey=Z1j3BGGZmtlFXXQ16umx15lILiiHsOld';
  data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
  data = JSON.parse(data);

  if (data["rows"].length == 0) {
    replier.reply("그런건 없음 ㅋㅋ");
  } else {
    replier.reply(
      "거래일시 : " + data["rows"][0]["soldDate"] + '\n' +
      "아이템 명 : " + data["rows"][0]["itemName"] + '\n' +
      "개당 가격 : " + data["rows"][0]["unitPrice"] + '\n' +
      "총합 가격 : " + data["rows"][0]["price"] + '\n')
  }
}


function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
  var replyMsg = '';

  replier.markAsRead()

  //명령어 리스트
  if (msg.includes("?명령어")) {
    try {
      replier.reply(
        "1. 경매장 아이템 실시간 검색 : ?템/아이템명" + '\n' +
        "2. 시세 검색 : ?시세/아이템명" + '\n' +
        "3. 캐릭터 검색(미구현) : ?캐릭터/캐릭명" + '\n' +
        "4. 타임라인 검색(미구현) : ?타임라인/캐릭명" + '\n' +
        "5. 랜덤 채널추천 : ?채널 " + '\n')
    }
    catch (e) {
      replier.reply("에러 발생")
    }
  }

  //아이템 검색
  if (msg.includes("?템/")) {
    try {
      var itemName = msg.split("/")[1];
      itemName = encodeURI(itemName);

      findItem(itemName, replier);
    }
    catch (e) {
      replier.reply("에러 발생");
    }
  }

  //시세 검색
  if (msg.includes("?시세/")) {
    try {
      var itemName = msg.split("/")[1];
      itemName = encodeURI(itemName);

      soldItem(itemName, replier);
    }
    catch (e) {
      replier.reply("에러 발생");
    }
  }
}

/*
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {

  replier.markAsRead()

  //명령어 리스트
  if(msg.includes("?명령어")){
    try{
      replier.reply("1. 경매장 아이템 실시간 검색 : ?템/아이템명" + '\n' +
                    "2. 캐릭터 검색(미구현) : ?캐릭터검색/캐릭명" + '\n' +
                    "3. 타임라인 검색(미구현) : ?타임라인조회/캐릭명" + '\n')
    }
    catch(e){
      replier.reply("에러 발생")
    }
  }

  //아이템 검색
  if(msg.includes("?템/")){
    try{
      var itemName = msg.split("/")[1];
      itemName = encodeURI(itemName);
      var url = 'https://api.neople.co.kr/df/auction?itemName=' + itemName + '&sort=unitPrice:asc&apikey=Z1j3BGGZmtlFXXQ16umx15lILiiHsOld';
      // var url = 'https://api.neople.co.kr/df/auction?itemName=%EC%83%9D%EB%AA%85%EC%9D%98%20%EC%88%A8%EA%B2%B0&sort=unitPrice:asc&apikey=Z1j3BGGZmtlFXXQ16umx15lILiiHsOld';
      var data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
      data = JSON.parse(data);

      if(data["rows"].length == 0){
        soldUrl = 'https://api.neople.co.kr/df/auction-sold?itemName=' + itemName + '&apikey=Z1j3BGGZmtlFXXQ16umx15lILiiHsOld';
        var soldData = org.jsoup.Jsoup.connect(soldUrl).ignoreContentType(true).get().text();
        soldData = JSON.parse(soldData);

        if(soldData["rows"].length == 0){
          replier.reply("그런건 없음 ㅋㅋ")
        } else {
          replier.reply(
            "매물이 존재하지 않아 시세 검색 결과로 알려드립니다." + '\n' +
            "거래일시 : " + data["rows"][0]["soldDate"] + '\n' +
            "아이템 명 : " + data["rows"][0]["itemName"] + '\n' +
            "개당 가격 : " + data["rows"][0]["unitPrice"] + '\n' + 
            "총합 가격 : " + data["rows"][0]["averagePrice"] + '\n')
        }

      } else {
        replier.reply(
          "아이템 명 : " + data["rows"][0]["itemName"] + '\n' +
          "최저가 : " + data["rows"][0]["unitPrice"] + '\n' + 
          "평균가 : " + data["rows"][0]["averagePrice"] + '\n')
      }
    }
    catch(e){
      replier.reply("에러 발생")
    }
  }
}
*/