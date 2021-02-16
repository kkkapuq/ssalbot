const APIkey = 'Z1j3BGGZmtlFXXQ16umx15lILiiHsOld';

const cannotFindItemMsg = "존재하지 않는 아이템이거나 매물이 없습니다." + '\n' +
  "존재하는 아이템이라면 ?시세/아이템명 을 입력해주세요.";
const cannotFindOptionItemMsg = "해당 옵션의 아이템 매물이 존재하지 않습니다.";

// function cannotFindItemMsg(replier) {
//   replier.reply("존재하지 않는 아이템이거나 매물이 없습니다." + '\n' +
//     "존재하는 아이템이라면 ?시세/아이템명 을 입력해주세요.");
// }

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

function soldItem(itemName, replier) {
  url = 'https://api.neople.co.kr/df/auction-sold?itemName=' + itemName + '&wordType=front&apikey=' + APIkey;
  data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
  data = JSON.parse(data);

  if (data["rows"].length == 0) {
    replier.reply("그런건 없음 ㅋㅋ");
  } else {
    replier.reply(
      "거래일시 : " + data["rows"][0]["soldDate"] + '\n' +
      "아이템 명 : " + data["rows"][0]["itemName"] + '\n' +
      "개당 가격 : " + data["rows"][0]["unitPrice"] + '\n' +
      "총합 가격 : " + data["rows"][0]["price"])
  }
}


function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
  var replyMsg = '';

  replier.markAsRead()

  //명령어 리스트
  if (msg.includes("?명령어")) {
    try {
      replier.reply(
        "1. 경매장 아이템 실시간 검색 : " + '\n' +
        "기본 검색 : ?템/아이템명" + '\n' +
        "카드 상세검색 : ?템/카드/카드명/업글단계" + '\n' +
        "칭호 상세검색 : ?템/칭호/칭호명/마부스킬명/스킬레벨" + '\n' +
        "아이템은 최저가 기준으로 정렬되서 1개만 검색됩니다. 복수의 매물을 검색하고 싶다면" + '\n' +
        "?템/아이템명/원하는개수 로 입력해주세요." + '\n' + '\n' +
        "2. 시세 검색 : ?시세/아이템명" + '\n' + '\n' +
        "3. 캐릭터 검색(미구현) : ?캐릭터/캐릭명" + '\n' + '\n' +
        "4. 타임라인 검색(미구현) : ?타임라인/캐릭명" + '\n' + '\n' +
        "5. 랜덤 채널추천(미구현) : ?채널 " + '\n')
    }
    catch (e) {
      replier.reply("에러 발생\n" + e)
    }
  }

  //아이템 검색
  if (msg.includes("?템/")) {
    try {
      var flag = msg.split("/")[1];
      var itemName = '';
      var cardUpgradeValue = 999;
      var skillName = '';
      var enchantValue = 0;

      if (flag == '카드') {
        itemName = encodeURI(msg.split("/")[2]);
        cardUpgradeValue = msg.split("/")[3];
        findItem(itemName, replier, cardUpgradeValue, skillName, enchantValue);
      } else if (flag == '칭호') {
        itemName = encodeURI(msg.split("/")[2]);
        skillName = encodeURI(msg.split("/")[3]);
        enchantValue = msg.split("/")[4];
        findItem(itemName, replier, cardUpgradeValue, skillName, enchantValue);
      } else {
        // replier.reply("여기들어왔음" + cardUpgradeYn);
        itemName = encodeURI(flag);
        findItem(itemName, replier, cardUpgradeValue, skillName, enchantValue);
      }

    }
    catch (e) {
      replier.reply("에러 발생" + e);
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