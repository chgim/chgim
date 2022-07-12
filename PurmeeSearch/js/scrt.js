

function show() {
    document.querySelector(".background").className = "background show";//팝업 창 생성 함수 classname을 backgroundshow-> 팝업창 띄움  동작.
  }
  function show1() {
    document.querySelector(".background").className = "background show1";//동작
  }

  function close() {
    document.querySelector(".background").className = "background";//팝업 창 닫기 함수 classname을 background->팝업창 닫기
  }
  document.querySelector(".show1").addEventListener("click", show1);//메뉴에서 팝업창 띄울 수 있게
  document.querySelector(".show").addEventListener("click", show);//show에 클릭 이벤트 등록(호출)
  document.querySelector(".close").addEventListener("click", close);//close에 클릭 이벤트 등록(호출)
//전체페이지 팝업

  function bten(){
    location.href  ="Service.html"; //버튼 누를 시 고객센터 페이지 이동(메인페이지)
}



function sch(){//가맹점 조회 완료 alert(가맹점 조회 페이지)
    alert('가맹점 조회 완료');
    
}



function btn(){//질문 등록 alert+고객센터 페이지로 이동(질문페이지)
    alert('질문이 보내졌습니다.');
    location.href  ="Service.html";
}




function mobile_keyup(obj){//전화번호 사이에 하이픈(질문하기 페이지)
    let mobile_len=obj.value.length;
    console.log(mobile_len)
    if(event.keyCode==8){
        obj.value=obj.value.slice(0,mobile_len); 
        return 0; 
    }else if (mobile_len==3 || mobile_len==8){
        obj.value += '-';
    }
}




$(function(){//(가맹점 조회 페이지) 셀렉션 연동
    areaSelectMaker("select[name=addressRegion]");
});

var areaSelectMaker = function(target){
    if(target == null || $(target).length == 0){
        console.warn("Unkwon Area Tag");
        return;
    }

    var area = {
       
        "인천광역시" :{
            "계양구" : [ "효성1동","효성2동","계산1동","계산2동","계산3동","계산4동","작전1동","작전2동","작전서운동","계양1동","계양2동","계양3동" ], 
             "서구":["가정1동","가정2동","가정3동","가좌1동","가좌2동","가좌3동","가좌4동","검단동","검암경서동","당하동","마전동","불로대곡동","석남1동","석남2동","석남3동","신현원창동","아라동","연희동","오류왕길동","원당동","청라1동","청라2동","청라3동"],
             "동구":["금창동","만석동","송림1동","송림2동","송림3·5동","송림4동","송림6동","송현1·2동","송현3동","화수1·화평동","화수2동"],
             "중구":["개항동","도원동","동인천동","신포동","신흥동","연안동","율목동","영종동","영종1동","운서동","용유동"],  
             "미추홀구":["관교동","도화1동","도화2.3동","문학동","숭의1.3동","숭의2동","숭의4동","용현1.4동","용현2동","용현3동","용현5동","주안1동","주안2동","주안3동","주안4동","주안5동","주안6동","주안7동","주안8동","학익1동","학익2동"],  
             "연수구":["동춘1동","동춘2동","동춘3동","선학동","송도1동","송도2동","송도3동","송도4동","송도5동","연수1동","연수2동","연수3동","옥련1동","옥련2동","청학동"],
             "남동구":["간석1동","간석2동","간석3동","간석4동","구월1동","구월2동","구월3동","구월4동","남촌도림동","논현1동","논현2동","논현고잔동","만수1동","만수2동","만수3동","만수4동","만수5동","만수6동","서창2동","장수서창동"],
             "부평구":["갈산1동","갈산2동","부개1동","부개2동","부개3동","부평1동","부평2동","부평3동","부평4동","부평5동","부평6동","산곡1동","산곡2동","산곡3동","산곡4동","삼산1동","삼산2동","십정1동","십정2동","일신동","청천1동","청천2동"],
             "강화군":[	"강화읍","교동면","길상면","내가면","불은면","삼산면","서도면","선원면","송해면","양도면","양사면","하점면","화도면"],
             "옹진군":["북도면","백령면","대청면","덕적면","영흥면","자월명","연평면"],
        },
         "강원도":{
           "춘천시":["교동","조운동","약사명동","근화동","소양동","후평1동","후평2동","후평3동","효자1동","효자2동","효자3동","석사동","퇴계동","강남동","신사우동"],
           "속초시":["교동","노학동","조양동","청호동","대포동","영랑동","동명동","금호동"],
           "강릉시":["교동"],
           "동해시":["교동"],
           "원주시":["교동"],
           "철원군":["교동"],
           "홍천군":["교동"],
           "영월군":["교동"],
           "인제군":["교동"]
        },
         "광주광역시":{"서구":["양동"]},
         "경상남도":{"거창군":["거창읍"]},
         "울산광역시":{"중구":["반구1동"]},
         "전라북도":{"익산시":["함열읍"]},
         "전주시":{"완산구":["중앙동"]},
         "전라남도":{"순천시":["승주읍"]},
         "충청북도":{"충주시":["주덕읍"]},
         "청주시":{"흥덕구":["가경동"]},
         "충청남도":{"아산시":["염치읍"]},
         "경상남도(바우처)":{"창녕군":["고암면"]},
         "경상북도(바우처)":{"영덕군":["영덕읍"]},
         "전라북도(바우처)":{"군산시":["옥구읍"]},
         "전주시(바우처)":{"완산구":["중앙동"]}
        
    };

    for(i=0; i<$(target).length; i++){
        (function(z){
            var a1 = $(target).eq(z);
            var a2 = a1.next();
            var a3 = a2.next();

            //초기화
            init(a1, true);

            //권역 기본 생성
            var areaKeys1 = Object.keys(area);
            areaKeys1.forEach(function(Region){
                a1.append("<option value="+Region+">"+Region+"</option>");
            });

            //변경 이벤트
            $(a1).on("change", function(){
                init($(this), false);
                var Region = $(this).val();
                var keys = Object.keys(area[Region]);
                keys.forEach(function(Do){
                    a2.append("<option value="+Do+">"+Do+"</option>");    
                });
            });

            $(a2).on("change", function(){
                a3.empty().append("<option value=''>선택</option>");
                var Region = a1.val();
                var Do = $(this).val();
                var keys = Object.keys(area[Region][Do]);
                keys.forEach(function(SiGunGu){
                    a3.append("<option value="+area[Region][Do][SiGunGu]+">"+area[Region][Do][SiGunGu]+"</option>");    
                });
            });
        })(i);        

        function init(t, first){
            first ? t.empty().append("<option value=''>선택하세요</option>") : "";
            t.next().empty().append("<option value=''>선택하세요</option>");
            t.next().next().empty().append("<option value=''>선택하세요</option>");
        }
    }
}





new Swiper('.swiper-container', {//(메인페이지) 슬라이드
            
    slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
    spaceBetween : 30, // 슬라이드간 간격
    slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  
    // 그룹수가 맞지 않을 경우 빈칸으로 메우기
    // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
    loopFillGroupWithBlank : true,
  
    loop : true, // 무한 반복
  
    pagination : { // 페이징
      el : '.swiper-pagination', //e1->swiper-pagination 호출
      clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },
    navigation : { // 네비게이션
      nextEl : '.swiper-button-next', // 다음 버튼 클래스명
      prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
    },
  });
