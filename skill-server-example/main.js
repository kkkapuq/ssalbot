const APIkey = 'Z1j3BGGZmtlFXXQ16umx15lILiiHsOld';

const cannotFindItemMsg = "존재하지 않는 아이템이거나 매물이 없습니다.\n" +
    "혹은 부정확한 단어검색으로 검색대상이 많아 조회가 안될 수 있습니다.\n\n" +
    "아이템 명을 잘 모르신다면 ?사전 기능을 이용해주세요.\n\n" +
    "존재하고 확실한 아이템명이라면 ?시세/아이템명 을 입력해주세요.\n\n" +
    "?템 명령어로 검색 명령어 사용법을 참고하시면 검색이 용이해집니다.";

const cannotFindOptionItemMsg = "해당 카드, 칭호, 강화/증폭/개조 옵션의 아이템 매물이 존재하지 않습니다.";

const coffeeList = ["에스프레소", "아메리카노", "카페라떼", "카푸치노", "카페모카", "마끼아또", "에스프레소 콘파냐", "아포카토", "더치커피", "콜드브루",
    "헤즐넛라떼", "바나나라떼", "화이트 초콜릿 모카", "카라멜코오카", "모카치노", "커피 프라푸치노", "카라멜 마끼아또", "모카 프라푸치노", "에스프레소 프라푸치노", "카라멜 프라푸치노",
    "자바 칩 프라푸치노", "그린 티 크림 프라푸치노", "카라멜 모카", "화이트 모카", "민트 모카", "헤이즐넛 아메리카노", "바닐라 아메리카노", "메가리카노",
    "고구마라떼", "티라미수라떼", "연유라떼", "큐브라떼", "곡물라떼", "녹차라떼", "딸기라떼", "로얄밀크티", "토피넛라떼"];

const juiceList = ["체리콕", "자몽 에이드", "레몬 에이드", "청포도 에이드", "라임 모히또", "청포도 모히또", "자몽 모히또", "플레인 요거트 스무디", "딸기 요거트 스무디",
    "망고 요거트 스무디", "쿠키 프라페", "민트 프라페", "녹차 프라페", "딸기주스", "바나나 주스", "사과 주스", "수박 주스", "토마토 주스", "키위 주스", "초코바나나 주스",
    "오렌지 주스", "파인애플 주스", "망고 주스", "자몽 주스", "블루베리 주스"];

const teaList = ["대추차", "계피차", "유자차", "모과차", "오미자차", "복분자차", "국화차", "녹차", "캐모마일", "쌍화차", "수정과", "얼그레이", "루이보스", "페퍼민트"];


const foodList = ["청국장찌개", "순두부찌개", "고추장찌개", "부대찌개", "김치찌개", "된장찌개", "비지찌개", "전찌개", "동태찌개", "갈비찜",
    "닭볶음탕", "스테이크", "아귀찜", "삼계탕", "수육", "월날쌈", "불고기", "찜닭", "제육덮밥", "비빔밥", "오므라이스", "카레덮밥",
    "김치볶음밥", "오징어덮밥", "짜장밥", "야채볶음밥", "간장계란밥", "육개장", "떡국", "미역국", "콩나물국", "북엇국", "소고기무국",
    "시래깃국", "된장국", "감잣국", "튀김", "소시지야채볶음", "골뱅이소면", "부침개", "어묵탕", "닭똥집볶음", "순대볶음", "토스트",
    "또띠아", "떡꼬치", "쿠키", "떡볶이", "호떡", "샌드위치", "시리얼", "팝시클", "라면", "토마토스파게티", "크림스파게티", "봉골레스파게티",
    "잔치국수", "비빔국수", "우동", "볶음우동", "콩국수", "전복죽", "추어탕", "장어구이", "낙지연포탕", "갈비탕", "훈제오리", "닭죽",
    "삼계탕", "더덕구이", "오니기리", "캘리포니아롤", "스시", "유부초밥", "밥버거", "스팸", "볶음밥", "투움바파스타", "김밥", "알로하김밥",
    "호두크림치즈김밥", "닭가슴살샐러드", "치즈김밥", "단호박스프", "양배추스프", "두부스테이크", "연어덮밥", "장어덮밥",
    "불고기브리또", "샐러드파스타", "크로크무슈", "몬테크리스토", "팬케이크", "치킨마요덮밥", "오믈렛", "프렌치토스트", "조개스프",
    "만둣국", "떡국", "라자냐", "칠리새우", "잡채", "누룽지", "고추장찌개", "포테이토피자", "냉채라면", "짜파구리", "진라면", "달걀", "야채볶음",
    "계란말이", "계란찜", "깐풍기", "탕수육", "두루치기", "제육볶음", "동파육", "중국집볶음밥", "잡채밥",
    "짬뽕밥", "짬뽕", "삼선짜장", "삼선짬뽕", "쟁반짜장", "닭갈비", "치킨까스", "돈까스", "치즈돈까스", "고구마치즈돈까스", "주먹밥", "리조또",
    "크로켓", "덴푸라", "가츠동", "하이라이스", "오코노미야끼", "미소시루", "우동", "규동", "라멘", "마파두부", "고추잡채", "곱창", "막창", "대창",
    "해물파전", "파전", "쌈밥", "칼국수", "수제비", "팥죽", "그라탕", "나폴리피자", "팟타이", "나시고랭", "쌀국수", "연유라떼", "분짜", "짜조", "반미(바게트샌드위치)", "필라프",
    "맥앤치즈", "핫도그", "햄버거", "불고기버거", "빅맥", "상하이버거", "미트로프", "후라이드치킨", "양념치킨", "간장치킨", "닭강정", "프렌치토스트", "레드망고", "좆데리아", "맥도날드", "치즈버거",
    "버거킹", "족발", "백숙", "삼겹살", "보쌈", "육회", "육사시미", "육회비빔밥", "순대", "홍어회", "물회", "굴비", "매운탕", "북엇국", "해물찜", "오징어볶음",
    "아귀찜", "골뱅이무침", "빈대떡", "호박전", "육전", "동래파전", "수제비", "떡국", "떡만둣국", "시래기국", "선지국", "순댓국", "소머리국밥", "콩나물국밥",
    "화채", "토란국", "재첩국", "곰탕", "닭곰탕", "설렁탕", "연포탕", "닭도리탕", "고기국수", "막국수", "비빔국수", "김치말이국수", "칼국수", "초계국수",
    "도토리묵", "밀면", "냉면", "찹쌀도넛", "회오리감자", "너비아니", "뒷고기", "전복죽", "야채죽", "서브웨이", "한솥", "이삭토스트", "덮밥종류", "미소야", "김밥천국",
    "홍루이젠", "백철판", "홍콩반점", "새마을식당", "돼지껍데기", "짜파게티", "맘스터치", "똠양꿍", "BHC", "반올림피자", "우주인피자", "피자헛", "파파존스",
    "비비큐", "네네치킨", "호식이 두마리치킨", "노랑통닭", "치킨마루", "처갓집치킨", "옛날통닭", "돼지갈비", "수비드", "닭꼬치", "굶어시발"];

const channelList = [
    "벨마 북부 1", "벨마 북부 2", "벨마 북부 3", "벨마 북부 4", "벨마 북부 5",
    "벨마 북부 6", "벨마 북부 7", "벨마 북부 8", "벨마 북부 9", "벨마 북부 10",
    "벨마 북부 11", "벨마 북부 12",

    "벨마 남부 16", "벨마 남부 17", "벨마 남부 18", "벨마 남부 19", "벨마 남부 20",
    "벨마 남부 21", "벨마 남부 22", "벨마 남부 23", "벨마 남부 24", "벨마 남부 25",

    "흑요정 26", "흑요정 27", "흑요정 28", "흑요정 29", "흑요정 30",
    "흑요정 31", "흑요정 32", "흑요정 33", "흑요정 34", "흑요정 35",

    "미러 아라드 1", "미러 아라드 2", "미러 아라드 3", "미러 아라드 4", "미러 아라드 5",
    "미러 아라드 6", "미러 아라드 7", "미러 아라드 8", "미러 아라드 9", "미러 아라드 10",

    "황도 11", "황도 12", "황도 13", "황도 14", "황도 15",
    "황도 16", "황도 17", "황도 18", "황도 19", "황도 20",

    "수쥬 21", "수쥬 22", "수쥬 23", "수쥬 24", "수쥬 25",
    "수쥬 26", "수쥬 27", "수쥬 28", "수쥬 29", "수쥬 30",

    "이튼 1", "이튼 2", "이튼 3", "이튼 4", "이튼 5",
    "이튼 6", "이튼 7", "이튼 8", "이튼 9", "이튼 10",

    "센트럴파크 11", "센트럴파크 12", "센트럴파크 13", "센트럴파크 14", "센트럴파크 15",
    "센트럴파크 16", "센트럴파크 17", "센트럴파크 18", "센트럴파크 19", "센트럴파크 20",

    "할렘 21", "할렘 22", "할렘 23", "할렘 24", "할렘 25",
    "할렘 26", "할렘 27", "할렘 28", "할렘 29", "할렘 30",

    "데 로스 1", "데 로스 2", "데 로스 3", "데 로스 4", "데 로스 5",
    "데 로스 6", "데 로스 7", "데 로스 8", "데 로스 9", "데 로스 10",
    "데 로스 11", "데 로스 12", "데 로스 13", "데 로스 14", "데 로스 15",
    "데 로스 16", "데 로스 17", "데 로스 18", "데 로스 19", "데 로스 20",

    "비공정 1", "비공정 2", "비공정 3", "비공정 4", "비공정 5",
    "비공정 6", "비공정 7", "비공정 8", "비공정 9", "비공정 10"

]

//천단위 ',' 찍는 정규식 함수
function commaNumberToString(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//결과값 null, undefined 체크
function isEmpty(str) {

    if (typeof str == "undefined" || str == null || str == "")
        return true;
    else
        return false;
}

//카드 상세검색
function findCardDetail(itemName, replier, cardUpgradeValue) {
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

        var resultString = "";

        resultString += "아이템 명: " + cardArray[0]["itemName"] + '\n' +
            "개수 : " + commaNumberToString(cardArray[0]["count"]) + '\n' +
            "총 가격 : " + commaNumberToString(cardArray[0]["currentPrice"]) + '\n' +
            "개당 가격(최저가) : " + commaNumberToString(cardArray[0]["unitPrice"]) + '\n' +
            "평균가 : " + commaNumberToString(cardArray[0]["averagePrice"]) + '\n' +
            "업그레이드 수치 : " + cardArray[0]["upgrade"];

        replier.reply(resultString);
    }
}

//칭호 상세검색
function findEntitleDetail(itemName, replier, skillName, enchantValue) {
    var titleArray = new Array();
    url = 'https://api.neople.co.kr/df/auction?itemName=' + itemName + '&wordType=front&limit=400&sort=unitPrice:asc&apikey=' + APIkey;
    var data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
    data = JSON.parse(data);

    var reinforceSkillName;
    var skillValue;

    skillName = decodeURI(skillName);
    enchantValue = decodeURI(enchantValue);

    if (data["rows"].length == 0) {
        replier.reply(cannotFindItemMsg);
    } else {

        for (var i = 0; i < data["rows"].length; i++) {
            var obj = data["rows"][i];

            if (obj.hasOwnProperty('enchant')) {
                reinforceSkillName = obj["enchant"]["reinforceSkill"][0]["skills"][0]["name"];
                skillValue = obj["enchant"]["reinforceSkill"][0]["skills"][0]["value"];

                if (reinforceSkillName == skillName && skillValue == enchantValue) {
                    titleArray.push(obj);
                }
            } else {
                continue;
            }
        }

        if (titleArray.length == 0) {
            replier.reply(cannotFindOptionItemMsg);
            return;
        }

        var resultString = "";

        resultString += "아이템 명 : " + titleArray[0]["itemName"] + '\n' +
            "개수 : " + commaNumberToString(titleArray[0]["count"]) + '\n' +
            "총 가격 : " + commaNumberToString(titleArray[0]["currentPrice"]) + '\n' +
            "개당 가격(최저가) : " + commaNumberToString(titleArray[0]["unitPrice"]) + '\n' +
            "마부 스킬 : " + titleArray[0]["enchant"]["reinforceSkill"][0]["skills"][0]["name"] + " + " + titleArray[0]["enchant"]["reinforceSkill"][0]["skills"][0]["value"]

        replier.reply(resultString);
    }

}

//일반 검색
function findItem(itemName, replier, reinforceCnt) {

    var url = '';
    var findFlag = '0';
    if (isEmpty(reinforceCnt)) {
        url = 'https://api.neople.co.kr/df/auction?itemName=' + itemName + '&wordType=front&sort=unitPrice:asc&apikey=' + APIkey;
    } else {
        url = 'https://api.neople.co.kr/df/auction?itemName=' + itemName + '&wordType=front&q=minReinforce:' + reinforceCnt + ',maxReinforce:' +
            reinforceCnt + 'sort=unitPrice:asc&apikey=' + APIkey;
        findFlag = '1';
    }
    var data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
    data = JSON.parse(data);
    replier.reply(url);

    if (data["rows"].length == 0) {
        replier.reply(cannotFindItemMsg);
    } else if(data["rows"].length == 0 && !isEmpty(reinforceCnt)){
        replier.reply(cannotFindOptionItemMsg);
    } else {
        var resultString = "";

        resultString += "아이템 명 : " + data["rows"][0]["itemName"] + '\n' +
            "개수 : " + commaNumberToString(data["rows"][0]["count"]) + '\n' +
            "총 가격 : " + commaNumberToString(data["rows"][0]["currentPrice"]) + '\n' +
            "개당 가격(최저가) : " + commaNumberToString(data["rows"][0]["unitPrice"]) + '\n' +
            "평균가 : " + commaNumberToString(data["rows"][0]["averagePrice"])

        if (findFlag == '1' || data["rows"][0]["itemType"] == '방어구' || data["rows"][0]["itemType"] == '무기' || !isEmpty(data["rows"][0]["remodelInfo"])) {
            var reinforce = data["rows"][0]["reinforce"];
            resultString += '\n' + "강화/증폭/개조 수치 : " + reinforce
        }


        replier.reply(resultString);
    }
}

//시세 검색
function soldItem(itemName, replier, reinforceCnt) {
    var url = '';
    var findFlag = '0';

    if(isEmpty(reinforceCnt)){
        url = 'https://api.neople.co.kr/df/auction-sold?itemName=' + itemName + '&wordType=front&apikey=' + APIkey;
    } else {
        url = 'https://api.neople.co.kr/df/auction-sold?itemName=' + itemName + '&wordType=front&q=minReinforce:' + reinforceCnt + ',maxReinforce:' +
            reinforceCnt + 'sort=unitPrice:asc&apikey=' + APIkey;
    }
    

    data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
    data = JSON.parse(data);

    var resultString = "";

    if (data["rows"].length == 0) {
        replier.reply("그런건 없음 ㅈㅅ\n" +
            "?사전/템이름 으로 검색 후 이용 권장드려용");
    } else {
        replier.reply("아이템 명 : " + data["rows"][0]["itemName"]);

        var tmp = 0;
        for (var i = 0; i < data["rows"].length; i++) {
            resultString = "";
            if (tmp == 3) {
                break;
            } else {

                resultString += "거래일시 : " + data["rows"][i]["soldDate"] + '\n' +
                                "개당 가격 : " + commaNumberToString(data["rows"][i]["unitPrice"]) + '\n' +
                                "총합 가격 : " + commaNumberToString(data["rows"][i]["price"] + '\n')
                
                if (findFlag == '1' || data["rows"][0]["itemType"] == '방어구' || data["rows"][0]["itemType"] == '무기' || !isEmpty(data["rows"][0]["remodelInfo"])) {
                        if(data["rows"][0]["remodelInfo"] != null){
                            resultString += '\n' + data["rows"][0]["remodelInfo"]["explain"];
                            resultString += '\n' + "개조 단계 : " + data["rows"][0]["reinforce"];
                        }
                        
                        var reinforce = data["rows"][0]["reinforce"];
                        resultString += '\n' + "강화/증폭 수치 : " + reinforce
                    }

                replier.reply(resultString);

                tmp++;
            }
        }
    }
}

//캐릭터 검색
function findChar(serverName, charName, replier) {
    var url = 'https://api.neople.co.kr/df/servers/' + serverName + '/characters?characterName=' + charName + '&apikey=' + APIkey;

    var data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
    var damage = "";
    var buff = "";
    var resultString = "";

    data = JSON.parse(data);

    if (data["rows"].length == 0) {
        replier.reply("캐릭터가 존재하지 않습니다. 서버명, 캐릭터명을 확인해주세요.");
    } else {

        var charId = data["rows"][0]["characterId"];

        // var dunfaoffUrl = "https://dunfaoff.com/SearchResult.df?server=" + serverName + "&characterid=" + charId;
        // data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
        // data = JSON.parse(data);
        var dunfaoffUrl = "https://dunfaoff.com/CharacterSearchList.df?server=" + serverName + "&id=" + charName;
        
        // var tempUrl = "https://dunfaoff.com/resources/js/char_info/holyCal.js?ver=2";

        // data = org.jsoup.Jsoup.connect(tempUrl)
        //         .header("referer", dunfaoffUrl)
        //         .header("user-agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36 NetHelper70")
        //         .ignoreContentType(true)
        //         .maxBodySize(0)
        //         .post()
        //         .text();

        
        data = org.jsoup.Jsoup.connect(dunfaoffUrl).ignoreContentType(true).get();

        var jobData = data.select("div.card-footer a span").attr("data-jobgrowname");
        // replier.reply(jobData);
        resultString += "직업 : " + jobData + '\n';

        data = data.select("div.card-footer a span").text();
        // replier.reply(data);

        damage = data.split("B")[0];
        // replier.reply(damage);

        if(!isEmpty(damage)){
            damage.replace(" ", "");
            resultString += "딜(오즈마 1시) : " + damage + '\n';
        }
        buff = data.split("B")[1];
        // replier.reply(buff);

        if(!isEmpty(buff)){
            buff.replace(" ","");
            resultString += "버프력 : " + buff + '\n';
        }

        resultString += '\n' + "https://dunfaoff.com/SearchResult.df?server=" + serverName + "&characterid=" + charId;

        replier.reply(resultString);

        // data = data.select("span.bg-light");

    
        // replier.reply(
        //     "https://dunfaoff.com/SearchResult.df?server=" + serverName + "&characterid=" + charId
        // );
    }
}

//사전 검색
function findItemDic(itemName, replier) {
    url = 'https://api.neople.co.kr/df/items?itemName=' + itemName + '&wordType=full&limit=30&apikey=' + APIkey;
    data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
    data = JSON.parse(data);

    if (data["rows"].length == 0) {
        replier.reply("그런 템은 없네요.. ㅎㅎ..ㅈㅅ;;ㅋㅋ!!");
    } else {

        var itemArr = new Array();

        for (var i = 0; i < 5; i++) {
            if (isEmpty(data["rows"][i]))
                break;

            itemArr.push(data["rows"][i]["itemName"]);

        }

        var resultString = "";

        for (var i = 0; i < itemArr.length; i++) {
            resultString = resultString + itemArr[i] + '\n';
        }

        replier.reply(
            resultString + "\n↑ 찾으시는 아이템 목록이에요! ↑"
        );
    }
}

//로또 추첨
function lottoNum(array) {
    if (!array) {
        var array = [];
    }
    let n = Math.floor(Math.random() * 45) + 1;
    if (array.length < 6 && array.indexOf(n) < 0) {
        array.push(n);
        return lottoNum(array);
    } else if (array.length > 5) {
        return array;
    }
    else
        return lottoNum(array);
}






/*
 * 
 * 아래 response 함수가 메인이라고 생각하는게 편함
 * 
 */


function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    var replyMsg = '';

    // replier.markAsRead()

    //명령어 리스트
    if (msg == "?명령어") {
        try {
            replier.reply(
                "0. 명령어는 밑에 나온거 그대로 입력해주세요. 상세 설명있습니다.\n" +
                "★사용법 정독 권장!!★\n\n" +
                "1. 경매장 아이템 실시간 검색 : ?템\n" +
                "2. 경매장 아이템 실시간 검색(카드 상세검색) : ?카드\n" +
                "3. 경매장 아이템 실시간 검색(칭호 상세검색) : ?칭호\n" +
                "4. 캐릭터 검색(던옵 링크) : ?캐릭\n" +
                "5. 타임라인 검색(던셋 링크) : ?타임\n" +
                "6. 아이템 사전 검색 : ?사전\n" +
                "7. 랜덤 채널추천 : ?채널\n" +
                "8. 오늘의 등급(던옵 링크) : ?등급\n" +
                "9. 부가기능 : ?기타")
        }
        catch (e) {
            replier.reply("에러 발생\n" + e)
        }
    }

    if (msg == "?템") {
        replier.reply(
            "경매장 아이템 실시간 검색 명령어" + '\n' +
            "☞ 기본 검색 : ?템/아이템명, ?ㅌ/아이템명" + '\n' +
            "☞ 강화/증폭/개조 검색옵션 : ?템/아이템명/강화수치, ?ㅌ/아이템명/강화수치" + '\n' +
            "☞ 시세 검색 : ?시세/아이템명, ?ㅅㅅ/아이템명" + '\n' +
            "시세는 최근 3개 거래만 조회됩니다.\n" +
            "모든 검색은 기본적으로 앞자리 단어 검색 위주이나, API 특성상 정확하게 입력해주시는 편이 좋습니다. (공백, 특문 등)" + '\n' +
            "인게임에서 검색 시, 자동완성 결과가 하나만 있을 때 정도까지 쳐주시면 됩니다." + '\n' + '\n' +
            "아이템은 최저가 기준으로 정렬되서 1개만 검색됩니다."
        )
    }

    if (msg == "?카드") {
        replier.reply(
            "☞ 카드 상세검색 : ?카드/카드명/업글단계" + '\n' +
            "Ex)?카드/드루이드 미아/1" + '\n' +
            "Ex)?ㅋㄷ/드루이드 미아/1" + '\n' +
            "모든 검색은 기본적으로 앞자리 단어 검색 위주이나, API 특성상 정확하게 입력해주시는 편이 좋습니다. (공백, 특문 등)" + '\n' +
            "인게임에서 검색 시, 자동완성 결과가 하나만 있을 때 정도까지 쳐주시면 됩니다." + '\n' + '\n' +
            "아이템은 최저가 기준으로 정렬되서 1개만 검색됩니다."
        )
    }

    if (msg == "?칭호") {
        replier.reply(
            "☞ 칭호 상세검색 : ?칭호/칭호명/마부스킬명/스킬레벨" + '\n' +
            "Ex)?칭호/기사의 맹세[불]/영광의 축복/2" + '\n' +
            "Ex)?ㅊㅎ/기사의 맹세/영광의 축복/2" + '\n' +
            "스킬의 이름을 '정확히' 입력해주셔야됩니다. (공백 유의)" + '\n' + '\n' +
            "모든 검색은 기본적으로 앞자리 단어 검색 위주이나, API 특성상 정확하게 입력해주시는 편이 좋습니다. (공백, 특문 등)" + '\n' +
            "인게임에서 검색 시, 자동완성 결과가 하나만 있을 때 정도까지 쳐주시면 됩니다." + '\n' + '\n' +
            "아이템은 최저가 기준으로 정렬되서 1개만 검색됩니다."
        )
    }

    if (msg == "?캐릭") {
        replier.reply(
            "?캐릭/서버/캐릭터명 으로 검색해주세요 \n" +
            "Ex) ?ㅋㄹ/ㅍㄹㅇ/꼬또농♡\n" +
            "Ex) ?캐릭/프레이/꼬또농♡\n\n" +
            "서버, 캐릭터명을 정확히 모른다면\n" +
            "?캐릭/캐릭터명 으로 검색해주세요.\n" +
            "Ex) ?ㅋㄹ/꼬또"
        )
    }

    if (msg == "?타임") {
        replier.reply(
            "?타임/캐릭터명 으로 검색해주세요, 던셋 링크로 연결됩니다. \n" +
            "Ex) ?ㅌㅇ/꼬또농♡\n" +
            "Ex) ?타임/꼬또농♡"
        )
    }

    if (msg == "?사전") {
        replier.reply(
            "?사전/아이템명 으로 입력해주시면, 최대 5개 종류의 아이템이 검색됩니다.\n" +
            "핵심 단어 단위로 검색하면 정확성이 높아집니다.\n" +
            "Ex) ?ㅅㅈ/프레이 카드\n" +
            "Ex) ?사전/사도 미친"
        )
    }

    if (msg == "?기타") {
        replier.reply(
            "오늘의 점심추천 : ?점심, ?ㅈㅅ\n" +
            "마실거리 추천   : ?커피, ?주스, ?차\n" +
            "로또 추천번호   : ?로또, ?ㄹㄸ\n" +
            "개발자 용돈주기 : ?용돈"
        )
    }


    //아이템 검색
    if (msg.includes("?템/") || msg.includes("?ㅌ/")) {
        try {
            var itemName = msg.split("/")[1];
            var reinforceCnt = msg.split("/")[2];

            if (isEmpty(itemName)) {
                replier.reply("입력 형식을 확인해주세요.\n" +
                    "도움말 : ?템");
                return;
            }

            itemName = encodeURIComponent(itemName);
            findItem(itemName, replier, reinforceCnt);


        }
        catch (e) {
            replier.reply("에러 발생" + e);
        }
    }

    //카드 상세 검색
    if (msg.includes("?카드/") || msg.includes("?ㅋㄷ/")) {
        try {
            var itemName = msg.split("/")[1];
            var cardUpgradeValue = msg.split("/")[2];

            if (isEmpty(itemName) || isEmpty(cardUpgradeValue)) {
                replier.reply("입력 형식을 확인해주세요.\n" +
                    "도움말 : ?카드");
                return;
            } else {
                itemName = encodeURIComponent(itemName);
                findCardDetail(itemName, replier, cardUpgradeValue);
            }
        }
        catch (e) {
            replier.reply("에러 발생" + e);
        }
    }

    //칭호 상세 검색
    if (msg.includes("?칭호/") || msg.includes("?ㅊㅎ/")) {
        try {
            var itemName = msg.split("/")[1];
            var skillName = msg.split("/")[2];
            var enchantValue = msg.split("/")[3];

            if (isEmpty(itemName) || isEmpty(skillName) || isEmpty(enchantValue)) {
                replier.reply("입력 형식을 확인해주세요.\n" +
                    "도움말 : ?칭호");
                return;
            } else {
                itemName = encodeURIComponent(itemName);
                findEntitleDetail(itemName, replier, skillName, enchantValue);
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
            var reinforceCnt = msg.split("/")[2];

            if (isEmpty(itemName)) {
                replier.reply("입력 형식을 확인해주세요.\n" +
                    "도움말 : ?템");
                return;
            }

            itemName = encodeURIComponent(itemName);
            soldItem(itemName, replier, reinforceCnt);
        }
        catch (e) {
            replier.reply("에러 발생\n" + e);
        }
    }

    //오늘의 등급
    if (msg == "?등급" || msg == "?ㄷㄱ") {
        replier.reply("https://dunfaoff.com/Grade.df");
    }

    //캐릭터 검색
    if (msg.includes("?캐릭/") || msg.includes("?ㅋㄹ/")) {
        try {
            var serverName = msg.split("/")[1];
            var charName = msg.split("/")[2];
            charName = encodeURIComponent(charName);

            if (serverName == '카인' || serverName == 'ㅋㅇ') {
                serverName = 'cain'
            } else if (serverName == '디레지에' || serverName == 'ㄷㄹㅈㅇ') {
                serverName = 'diregie'
            } else if (serverName == '시로코' || serverName == 'ㅅㄹㅋ') {
                serverName = 'siroco'
            } else if (serverName == '프레이' || serverName == 'ㅍㄹㅇ') {
                serverName = 'prey'
            } else if (serverName == '카시야스' || serverName == 'ㅋㅅㅇㅅ') {
                serverName = 'casillas'
            } else if (serverName == '힐더' || serverName == 'ㅎㄷ') {
                serverName = 'hilder'
            } else if (serverName == '안톤' || serverName == 'ㅇㅌ') {
                serverName = 'anton'
            } else if (serverName == '바칼' || serverName == 'ㅂㅋ') {
                serverName = 'bakal'
            } else {
                charName = serverName;
                charName = encodeURIComponent(charName);
                replier.reply(
                    'https://dunfaoff.com/CharacterSearchList.df?server=all&id=' + charName
                );
                return;
            }

            findChar(serverName, charName, replier);
        }
        catch (e) {
            replier.reply("에러 발생\n" + e);
        }
    }

    //던셋 검색
    if (msg.includes("?타임/") || msg.includes("?ㅌㅇ/")) {
        try {
            var charName = msg.split("/")[1];

            charName = encodeURIComponent(charName);
            replier.reply(
                'http://dfset.me/?serverId=all&charName=' + charName
            );
            return;
        }

        catch (e) {
            replier.reply("에러 발생\n" + e);
        }
    }

    //사전 검색
    if (msg.includes("?사전/") || msg.includes("?ㅅㅈ/")) {
        try {
            var itemName = msg.split("/")[1];

            itemName = encodeURIComponent(itemName);
            findItemDic(itemName, replier);
            return;
        }

        catch (e) {
            replier.reply("에러 발생\n" + e);
        }
    }


    //오늘의 점심 추천
    if (msg == "?점심" || msg == "?ㅈㅅ") {
        var rannum = Math.floor(Math.random() * foodList.length);

        if (rannum == foodList.length - 1) {
            replier.reply("걍...아무거나..드십쇼..까다롭네..");
        } else {
            replier.reply(foodList[rannum] + " 머글랭?? ( ・ิω・)ノิิิ");
        }
    }

    //사이트 모음
    if (msg == "?사이트" || msg == "?ㅅㅇㅌ") {
        try {
            var siteList =  "https://dunfaoff.com/ 던파 오프" + '\n' +
                            "https://dnfp.xyz/ 던파 프리미엄" + '\n' +
                            "http://dundam.xyz/던담" + '\n' +

                            "https://dnf.akaib.com/던파 아카이브" + '\n' +
                            "http://dfset.me/ 던파셋 헬드랍" + '\n' +
                            "http://duntoki.xyz/ 기린측정" + '\n' +

                            "http://dnfnow.xyz/ 던파 나우 경매장" + '\n' +
                            "https://dfcat.net/던파 캣 기타 이벤트 족보" + '\n' +
                            "http://dunp.net/char/ - 프로필 제작" + '\n' +
                            "https://dnfa.kr/ 던파 어시스트 - 재련 강화 성공실패" + '\n' +

                            "https://drive.google.com/file/d/1p8ZdzW_NzGKHHOtfPTuZSr1YgSEVtYCj/view?usp=drive_open / 컴퓨터용 계산기" + '\n' +

                            "http://df.nexon.com/df/testinfo/notice?p=web 퍼섭공지" + '\n' +

                            "http://df.nexon.com/df/news/event 던파 이벤트" + '\n';
            replier.reply(siteList);
        }
        catch (e) {
            replier.reply("에러 발생" + e);
        }
    }

    //채널 추천
    if (msg == "?채널" || msg == "?ㅊㄴ") {
        var rannum = Math.floor(Math.random() * channelList.length);
        var rannum2 = Math.floor(Math.random() * 5);

        if (rannum2 == 0)
            replier.reply("오빠, " + channelList[rannum] + "채는 어때? ੭╹▿╹)੭⁾⁾");
        else if (rannum2 == 1)
            replier.reply("언니, " + channelList[rannum] + "채가 좋을거같앙 ( ◍•㉦•◍ )");
        else if (rannum2 == 2)
            replier.reply(channelList[rannum] + "채는 어떠십니까 형님 ಠ_ಠ");
        else if (rannum2 == 3)
            replier.reply("신화 ! " + channelList[rannum] + "채에서 뜬다! 기도의 댄스! (._.) ƪ(‘-‘ ƪ)(ʃ ‘-‘)ʃ (/._.)/");
        else if (rannum2 == 4)
            replier.reply(channelList[rannum] + "채 가쉴? ᕦ( ᐛ )ᕡ");
    }

    //커피 추천
    if (msg == "?커피" || msg == "?ㅋㅍ") {
        try {
            var rannum = Math.floor(Math.random() * coffeeList.length);
            replier.reply(coffeeList[rannum] + " 한잔 허쉴?");
        }
        catch (e) {
            replier.reply("에러 발생" + e);
        }
    }

    //주스 추천
    if (msg == "?주스") {
        try {
            var rannum = Math.floor(Math.random() * juiceList.length);
            replier.reply(juiceList[rannum] + " 한잔 허쉴?");
        }
        catch (e) {
            replier.reply("에러 발생" + e);
        }
    }

    //차 추천
    if (msg == "?차" || msg == "?ㅊ") {
        try {
            var rannum = Math.floor(Math.random() * teaList.length);
            replier.reply(teaList[rannum] + " 한잔 허쉴?");
        }
        catch (e) {
            replier.reply("에러 발생" + e);
        }
    }

    //로또 추첨
    if (msg == "?로또" || msg == "?ㄹㄸ") {
        try {
            var lottoArr = new Array();

            lottoArr = lottoNum(lottoArr);

            replier.reply("이번 주 행운의 번호는\n<" + lottoArr + ">이애오");
        }
        catch (e) {
            replier.reply("에러 발생" + e);
        }
    }

    //꼬또농
    if (msg == "?ㄲㄸㄴ" || msg == "?꼬또농") {
        replier.reply("주인님은 일하고 잇서요");
    }

    //용돈
    if (msg == "?용돈") {
        replier.reply("잘 쓰고 계신다면 용돈좀 주십쇼 충성충성 ^^7\n" +
            "프레이/꼬또농♡");
    }
}