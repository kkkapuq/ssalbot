const APIkey = 'Z1j3BGGZmtlFXXQ16umx15lILiiHsOld';

const cannotFindItemMsg = "존재하지 않는 아이템이거나 매물이 없습니다.\n" +
                          "혹은 부정확한 단어검색으로 검색대상이 많아 조회가 안될 수 있습니다.\n" + 
                          "존재하고 확실한 아이템명이라면 ?시세/아이템명 을 입력해주세요.\n\n" + 
                          "?템 명령어로 검색 명령어 사용법을 참고하시면 검색이 용이해집니다.";
const cannotFindOptionItemMsg = "해당 카드, 칭호 옵션의 아이템 매물이 존재하지 않습니다.";

const foodList = ["청국장찌개", "순두부찌개", "고추장찌개","부대찌개","김치찌개","된장찌개","비지찌개","전찌개","동태찌개","갈비찜",
              "닭볶음탕","스테이크","아귀찜","삼계탕","수육","월날쌈","불고기","찜닭","제육덮밥","비빔밥","오므라이스","카레덮밥",
              "김치볶음밥","오징어덮밥","짜장밥","야채볶음밥","간장계란밥","육개장","떡국","미역국","콩나물국","북엇국","소고기무국",
              "시래깃국","된장국","감잣국","튀김","소시지야채볶음","골뱅이소면","부침개","어묵탕","닭똥집볶음","순대볶음","토스트",
              "또띠아","떡꼬치","쿠키","떡볶이","호떡","샌드위치","시리얼","팝시클","라면","토마토스파게티","크림스파게티","봉골레스파게티",
              "잔치국수","비빔국수","우동","볶음우동","콩국수","전복죽","추어탕","장어구이","낙지연포탕","갈비탕","훈제오리","닭죽",
              "삼계탕","더덕구이","오니기리","캘리포니아롤","스시","유부초밥","밥버거","스팸","볶음밥","투움바파스타","김밥","알로하김밥",
              "호두크림치즈김밥","닭가슴살샐러드","치즈김밥","단호박스프","양배추스프","두부스테이크","연어덮밥","장어덮밥",
              "불고기브리또","샐러드파스타","크로크무슈","몬테크리스토","팬케이크","치킨마요덮밥","오믈렛","프렌치토스트","조개스프",
              "만둣국","떡국","라자냐","칠리새우","잡채","누룽지","고추장찌개","포테이토피자","냉채라면","짜파구리","진라면","달걀","야채볶음",
              "계란말이","계란찜","깐풍기","탕수육","두루치기","제육볶음","동파육","중국집볶음밥","잡채밥",
              "짬뽕밥","짬뽕","삼선짜장","삼선짬뽕","쟁반짜장","닭갈비","치킨까스","돈까스","치즈돈까스","고구마치즈돈까스","주먹밥","리조또",
              "크로켓","덴푸라","가츠동","하이라이스","오코노미야끼","미소시루","우동","규동","라멘","마파두부","고추잡채","곱창","막창","대창",
              "해물파전","파전","쌈밥","칼국수","수제비","팥죽","그라탕","나폴리피자","팟타이","나시고랭","쌀국수","연유라떼","분짜","짜조","반미(바게트샌드위치)","필라프",
              "맥앤치즈","핫도그","햄버거","불고기버거","빅맥","상하이버거","미트로프","후라이드치킨","양념치킨","간장치킨","닭강정", "프렌치토스트","레드망고","좆데리아","맥도날드","치즈버거",
              "버거킹","족발","백숙","삼겹살","보쌈","육회","육사시미","육회비빔밥","순대","홍어회","물회","굴비","매운탕","북엇국","해물찜","오징어볶음",
              "아귀찜","골뱅이무침","빈대떡","호박전","육전","동래파전","수제비","떡국","떡만둣국","시래기국","선지국","순댓국","소머리국밥","콩나물국밥",
              "화채","토란국","재첩국","곰탕","닭곰탕","설렁탕","연포탕","닭도리탕","고기국수","막국수","비빔국수","김치말이국수","칼국수","초계국수",
              "도토리묵","밀면","냉면","찹쌀도넛","회오리감자","너비아니","뒷고기","전복죽","야채죽","서브웨이","한솥","이삭토스트","덮밥종류","미소야","김밥천국",
              "홍루이젠","백철판","홍콩반점","새마을식당","돼지껍데기","짜파게티"];

const channelList = [
  "벨마이어 공국 북부 1", "벨마이어 공국 북부 2", "벨마이어 공국 북부 3", "벨마이어 공국 북부 4", "벨마이어 공국 북부 5", 
  "벨마이어 공국 북부 6", "벨마이어 공국 북부 7", "벨마이어 공국 북부 8", "벨마이어 공국 북부 9", "벨마이어 공국 북부 10", 
  "벨마이어 공국 북부 11", "벨마이어 공국 북부 12", 

  "벨마이어 공국 남부 16", "벨마이어 공국 남부 17", "벨마이어 공국 남부 18", "벨마이어 공국 남부 19", "벨마이어 공국 남부 20", 
  "벨마이어 공국 남부 21", "벨마이어 공국 남부 22", "벨마이어 공국 남부 23", "벨마이어 공국 남부 24", "벨마이어 공국 남부 25", 

  "흑요정 왕국 26", "흑요정 왕국 27", "흑요정 왕국 28", "흑요정 왕국 29", "흑요정 왕국 30", 
  "흑요정 왕국 31", "흑요정 왕국 32", "흑요정 왕국 33", "흑요정 왕국 34", "흑요정 왕국 35", 

  "미러 아라드 1", "미러 아라드 2", "미러 아라드 3", "미러 아라드 4", "미러 아라드 5", 
  "미러 아라드 6", "미러 아라드 7", "미러 아라드 8", "미러 아라드 9", "미러 아라드 10", 

  "황도 11", "황도 12", "황도 13", "황도 14", "황도 15", 
  "황도 16", "황도 17", "황도 18", "황도 19", "황도 20", 

  "수쥬 21", "수쥬 22", "수쥬 23", "수쥬 24", "수쥬 25", 
  "수쥬 26", "수쥬 27", "수쥬 28", "수쥬 29", "수쥬 30", 

  "이튼 공업지대 1", "이튼 공업지대 2", "이튼 공업지대 3", "이튼 공업지대 4", "이튼 공업지대 5", 
  "이튼 공업지대 6", "이튼 공업지대 7", "이튼 공업지대 8", "이튼 공업지대 9", "이튼 공업지대 10", 

  "센트럴파크 11", "센트럴파크 12", "센트럴파크 13", "센트럴파크 14", "센트럴파크 15", 
  "센트럴파크 16", "센트럴파크 17", "센트럴파크 18", "센트럴파크 19", "센트럴파크 20", 

  "할렘 21", "할렘 22", "할렘 23", "할렘 24", "할렘 25", 
  "할렘 26", "할렘 27", "할렘 28", "할렘 29", "할렘 30", 

  "데 로스 제국 1", "데 로스 제국 2", "데 로스 제국 3", "데 로스 제국 4", "데 로스 제국 5", 
  "데 로스 제국 6", "데 로스 제국 7", "데 로스 제국 8", "데 로스 제국 9", "데 로스 제국 10", 
  "데 로스 제국 11", "데 로스 제국 12", "데 로스 제국 13", "데 로스 제국 14", "데 로스 제국 15", 
  "데 로스 제국 16", "데 로스 제국 17", "데 로스 제국 18", "데 로스 제국 19", "데 로스 제국 20", 

  "비공정 1", "비공정 2", "비공정 3", "비공정 4", "비공정 5", 
  "비공정 6", "비공정 7", "비공정 8", "비공정 9", "비공정 10" 

]

function findItem(itemName, replier, cardUpgradeValue, skillName, enchantValue) {

  var url = '';
  //카드 찾기
  if (cardUpgradeValue != 999) {
    var cardArray = new Array();
    url = 'https://api.neople.co.kr/df/auction?itemName=' + itemName + '&wordType=front&limit=400&sort=unitPrice:asc&apikey=' + APIkey;
    var data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
    data = JSON.parse(data)

    if (data["rows"].length == 0) {
      replier.reply(cannotFindItemMsg);
    } else {
      for (var i = 0; i < data["rows"].length; i++) {
        var obj = data["rows"][i];
        if (obj.hasOwnProperty('upgrade') && obj["upgrade"] == cardUpgradeValue) {
          cardArray.push(obj);
        }
      }

      if (cardArray.length == 0) {
        replier.reply(cannotFindOptionItemMsg);
        return;
      }

      replier.reply(
        "아이템 명 : " + cardArray[0]["itemName"] + '\n' +
        "개수 : " + cardArray[0]["count"] + '\n' +
        "총 가격 : " + cardArray[0]["currentPrice"] + '\n' +
        "개당 가격(최저가) : " + cardArray[0]["unitPrice"] + '\n' +
        "평균가 : " + cardArray[0]["averagePrice"] + '\n' +
        "업그레이드 수치 : " + cardArray[0]["upgrade"]);
    }
  } else if (skillName != '') {
    //칭호 찾기
    var titleArray = new Array();
    url = 'https://api.neople.co.kr/df/auction?itemName=' + itemName + '&wordType=front&limit=400&sort=unitPrice:asc&apikey=' + APIkey;
    var data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
    data = JSON.parse(data);

    var reinforceSkillName;
    var skillValue;

    skillName = decodeURI(skillName);
    enchantValue = decodeURI(enchantValue);

    // replier.reply(skillName);
    // replier.reply(enchantValue);

    if (data["rows"].length == 0) {
      replier.reply(cannotFindItemMsg);
    } else {
      //칭호 마부된 스킬과 수치 가져오기
      // replier.reply(data["rows"][0]["enchant"]["reinforceSkill"][0]["skills"][0]["name"]);
      // replier.reply(data["rows"][0]["enchant"]["reinforceSkill"][0]["skills"][0]["name"]);
      // replier.reply(data["rows"][0]["enchant"]["reinforceSkill"][0]["skills"][0]["value"]);

      for (var i = 0; i < data["rows"].length; i++) {
        var obj = data["rows"][i];

        if (obj.hasOwnProperty('enchant')) {
          reinforceSkillName = obj["enchant"]["reinforceSkill"][0]["skills"][0]["name"];
          skillValue = obj["enchant"]["reinforceSkill"][0]["skills"][0]["value"];

          // replier.reply(reinforceSkillName);
          // replier.reply(skillValue);

          if (reinforceSkillName == skillName && skillValue == enchantValue) {
            titleArray.push(obj);
          }
        } else {
          continue;
        }
      }
      // replier.reply(titleArray[0]);

      if (titleArray.length == 0) {
        replier.reply(cannotFindOptionItemMsg);
        return;
      }

      replier.reply(
        "아이템 명 : " + titleArray[0]["itemName"] + '\n' +
        "개수 : " + titleArray[0]["count"] + '\n' +
        "총 가격 : " + titleArray[0]["currentPrice"] + '\n' +
        "개당 가격(최저가) : " + titleArray[0]["unitPrice"] + '\n' +
        // "평균가 : " + titleArray[0]["averagePrice"] + '\n' +
        "마부 스킬 :  " + titleArray[0]["enchant"]["reinforceSkill"][0]["skills"][0]["name"] + " + " + titleArray[0]["enchant"]["reinforceSkill"][0]["skills"][0]["value"]);
    }
  } else {
    //일반 검색
    url = 'https://api.neople.co.kr/df/auction?itemName=' + itemName + '&wordType=front&sort=unitPrice:asc&apikey=' + APIkey;
    var data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
    data = JSON.parse(data);

    if (data["rows"].length == 0) {
      replier.reply(cannotFindItemMsg);
    } else {
      replier.reply(
        "아이템 명 : " + data["rows"][0]["itemName"] + '\n' +
        "개수 : " + data["rows"][0]["count"] + '\n' +
        "총 가격 : " + data["rows"][0]["currentPrice"] + '\n' +
        "개당 가격(최저가) : " + data["rows"][0]["unitPrice"] + '\n' +
        "평균가 : " + data["rows"][0]["averagePrice"])
    }
  }
}

//시세 검색
function soldItem(itemName, replier) {
  url = 'https://api.neople.co.kr/df/auction-sold?itemName=' + itemName + '&wordType=front&apikey=' + APIkey;
  data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
  data = JSON.parse(data);

  if (data["rows"].length == 0) {
    replier.reply("그런건 없음 ㅈㅅ");
  } else {
    replier.reply(
      "거래일시 : " + data["rows"][0]["soldDate"] + '\n' +
      "아이템 명 : " + data["rows"][0]["itemName"] + '\n' +
      "개당 가격 : " + data["rows"][0]["unitPrice"] + '\n' +
      "총합 가격 : " + data["rows"][0]["price"])
  }
}

//캐릭터 검색
function findChar(serverName, charName, replier){
  url = 'https://api.neople.co.kr/df/servers/' + serverName + '/characters?characterName=' + charName + '&apikey=' + APIkey;
  data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
  data = JSON.parse(data);

  if (data["rows"].length == 0) {
    replier.reply("캐릭터가 존재하지 않습니다. 서버명, 캐릭터명을 확인해주세요.");
  } else {

    var charId = data["rows"][0]["characterId"];

    replier.reply(
      "https://dunfaoff.com/SearchResult.df?server=" + serverName + "&characterid=" + charId
    );
  }
}


/*
 * 
 * 아래 response 함수가 메인이라고 생각하는게 편함
 * 
 */


function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
  var replyMsg = '';

  replier.markAsRead()

  //명령어 리스트
  if (msg == "?명령어") {
    try {
      replier.reply(
        "1. 경매장 아이템 실시간 검색 : ?템\n" + 
        "2. 캐릭터 검색(던옵 링크) : ?캐릭\n" + 
        "3. 타임라인 검색(미구현) : ?타임라인\n" + 
        "4. 랜덤 채널추천 : ?채널\n" + 
        "5. 오늘의 등급(던옵 링크) : ?등급\n" +
        "6. 부가기능 : ?기타\n")
    }
    catch (e) {
      replier.reply("에러 발생\n" + e)
    }
  }

  if(msg == "?템"){
    replier.reply(
      "경매장 아이템 실시간 검색 명령어" + '\n' +
      "☞ 기본 검색 : ?템/아이템명, ?ㅌ/아이템명" + '\n' +
      "☞ 시세 검색 : ?시세/아이템명, ?ㅅㅅ/아이템명" + '\n' +
      "☞ 카드 상세검색 : ?템/카드/카드명/업글단계" + '\n' +
      "Ex)?템/카드/드루이드 미아/1" + '\n' +
      "Ex)?ㅌ/ㅋㄷ/드루이드 미아/1" + '\n' +
      "☞ 칭호 상세검색 : ?템/칭호/칭호명/마부스킬명/스킬레벨" + '\n' +
      "Ex)?템/칭호/기사의 맹세[불]/영광의 축복/2"+ '\n' +
      "Ex)?ㅌ/ㅊㅎ/기사의 맹세[불/영광의 축복/2"+ '\n' + '\n' +
      "모든 검색은 기본적으로 단어 검색 위주이나, API 특성상 정확하게 입력해주시는 편이 좋습니다. (공백, 특문 등)" + '\n' +
      "인게임에서 검색 시, 자동완성 결과가 하나만 있을 때 정도까지 쳐주시면 됩니다." + '\n' + '\n' +
      "아이템은 최저가 기준으로 정렬되서 1개만 검색됩니다."
      // "복수의 매물을 검색하고 싶다면" + '\n' +
      // "?템/아이템명/원하는개수 로 입력해주세요."
    )
  }

  if(msg == "?캐릭"){
    replier.reply(
      "?캐릭/서버/캐릭터명 으로 검색해주세요 \n" +
      "Ex) ?ㅋㄹ/ㅍㄹㅇ/꼬또농♡\n" +
      "Ex) ?캐릭/프레이/꼬또농♡\n\n" + 
      "서버, 캐릭터명을 정확히 모른다면\n" + 
      "?캐릭/캐릭터명 으로 검색해주세요.\n" +
      "Ex) ?ㅋㄹ/꼬또"
    )
  }

  if(msg == "?기타"){
    replier.reply(
      "오늘의 점심추천 : ?점심, ?ㅈㅅ"
    )
}


  //아이템 검색
  if (msg.includes("?템/") || msg.includes("?ㅌ/")) {
    try {
      var flag = msg.split("/")[1];
      var itemName = '';
      var cardUpgradeValue = 999;
      var skillName = '';
      var enchantValue = 0;

      if (flag == '카드' || flag == 'ㅋㄷ') {
        itemName = encodeURI(msg.split("/")[2]);
        cardUpgradeValue = msg.split("/")[3];
        findItem(itemName, replier, cardUpgradeValue, skillName, enchantValue);
      } else if (flag == '칭호' || flag == 'ㅊㅎ') {
        itemName = encodeURI(msg.split("/")[2]);
        skillName = encodeURI(msg.split("/")[3]);
        enchantValue = msg.split("/")[4];
        findItem(itemName, replier, cardUpgradeValue, skillName, enchantValue);
      } else {
        itemName = encodeURI(flag);
        findItem(itemName, replier, cardUpgradeValue, skillName, enchantValue);
      }

    }
    catch (e) {
      replier.reply("에러 발생" + e);
    }
  }

  //시세 검색
  if (msg.includes("?시세/") || msg.includes("?ㅅㅅ/")) {
    try {
      var itemName = msg.split("/")[1];
      itemName = encodeURI(itemName);

      soldItem(itemName, replier);
    }
    catch (e) {
      replier.reply("에러 발생");
    }
  }

  //오늘의 등급
  if (msg == "?등급" || msg == "?ㄷㄱ") {

    replier.reply("https://dunfaoff.com/Grade.df");

  //   try {
  //     url = 'https://dunfaoff.com/Main.df';
  //     // var data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
  //     var data = Utils.parse(url).select("div.col-sm-12 col-md-12 col-xl-8 col-lg-8 > div > div > div");
  //     Elements 

  //     replier.reply(data);




  //   }
  //   catch (e) {
  //     replier.reply("에러 발생");
  //   }
  // }
  }

  //캐릭터 검색
  if (msg.includes("?캐릭/") || msg.includes("?ㅋㄹ/")) {
    try {
      var serverName = msg.split("/")[1];
      var charName = msg.split("/")[2];
      charName = encodeURI(charName);

      if(serverName == '카인' || serverName == 'ㅋㅇ'){
        serverName = 'cain'
      } else if(serverName == '디레지에' || serverName == 'ㄷㄹㅈㅇ'){
        serverName = 'diregie'
      } else if(serverName == '시로코' || serverName == 'ㅅㄹㅋ'){
        serverName = 'siroco'
      } else if(serverName == '프레이' || serverName == 'ㅍㄹㅇ'){
        serverName = 'prey'
      } else if(serverName == '카시야스' || serverName == 'ㅋㅅㅇㅅ'){
        serverName = 'casillas'
      } else if(serverName == '힐더' || serverName == 'ㅎㄷ'){
        serverName = 'hilder'
      } else if(serverName == '안톤' || serverName == 'ㅇㅌ'){
        serverName = 'anton'
      } else if(serverName == '바칼' || serverName == 'ㅂㅋ'){
        serverName = 'bakal'
      } else {
        charName = serverName;
        charName = encodeURI(charName);
        replier.reply(
          'https://dunfaoff.com/CharacterSearchList.df?server=all&id=' + charName
        );
        return;
      }

      findChar(serverName, charName, replier);
    }
    catch (e) {
      replier.reply("에러 발생");
    }
  }

  //오늘의 점심 추천
  if (msg == "?점심" || msg == "?ㅈㅅ") {
    var rannum = Math.floor(Math.random()*foodList.length);
    replier.reply(foodList[rannum] + " 드쉴?");
  }

  //채널 추천
  if (msg == "?채널" || msg == "?ㅊㄴ") {
    var rannum = Math.floor(Math.random()*channelList.length);
    replier.reply(channelList[rannum] + " 채널은 어떠신가요? 느낌이 좋아요!");
  }

}