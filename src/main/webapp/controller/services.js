(function() {

  "use strict";

  var App = angular.module("App.services",[]);

  App.value('version', '0.1');

  // here is a declaration of simple utility function to know if an given param is a String.
  App.service("UtilSrvc", function () {
    return {
      isAString: function(o) {
          return typeof o == "string" || (typeof o == "object" && o.constructor === String);
      },
      helloWorld : function(name) {
      	var result = "Hum, Hello you, but your name is too weird...";
      	if (this.isAString(name)) {
      		result = "Hello, " + name;
      	}
      	return result;
      }
    }
  });
 

       
    App.service('PjtSrvc', ['$sce', function ($sce) {
        return {
            pjtList : function() {
                return [{
                            id : 1,
                            img_path : "resources/img/portfolio/bloodywarz/title.png",
                            slides : [
                                { 
                                    src : "resources/img/portfolio/bloodywarz/title.png",
                                    title : 'title'
                                }
                                ,{ 
                                    src : "resources/img/portfolio/bloodywarz/title.png",
                                    title : 'title'
                                }
                            ],
                            pjt_name : "Blood Warz",
                            pjt_genre : "SNG 전략시뮬레이션",
                            bind_html : $sce.trustAsHtml('<p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>' +
                                    '<p>' +
                                        '<strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p>')
                        }
                       ,{
                            id : 2,
                            img_path : "resources/img/portfolio/deepabyss/title.png",
                            slides : [
                                { 
                                    src : "resources/img/portfolio/deepabyss/main.png",
                                    title : 'title'
                                }
                                ,{ 
                                    src : "resources/img/portfolio/deepabyss/pvp.png",
                                    title : 'title'
                                }
                            ],
                            pjt_name : "DeepAbyss",
                            pjt_genre : "퍼즐 RPG"
                       }
                       ,{
                            id : 3,
                            img_path : "resources/img/portfolio/stardust/main.jpg",
                            slides : [
                                { 
                                    src : "resources/img/portfolio/bloodywarz/title.png",
                                    title : 'title'
                                }
                                ,{ 
                                    src : "resources/img/portfolio/bloodywarz/title.png",
                                    title : 'title'
                                }
                            ],
                            pjt_name : "Stardust Stories",
                            pjt_genre : "RPG"
                       }
//                       ,{
//                            id : 4,
//                            img_path : "resources/img/portfolio/golden.png",
//                            main_img_list : [
//                                "resources/img/portfolio/golden-preview.png",
//                            ],
//                            pjt_name : "Golden",
//                            pjt_genre : "Website Design"
//                       }
//                       ,{
//                            id : 5,
//                            img_path : "resources/img/portfolio/escape.png",
//                            main_img_list : [
//                                "resources/img/portfolio/escape-preview.png",
//                            ],
//                            pjt_name : "Escape",
//                            pjt_genre : "Website Design"
//                       }
//                       ,{
//                            id : 6,
//                            img_path : "resources/img/portfolio/dreams.png",
//                            main_img_list : [
//                                "resources/img/portfolio/dreams-preview.png",
//                            ],
//                            pjt_name : "Dreams",
//                            pjt_genre : "Website Design"
//                       }
                       ];
            } // End of pjtList..
            
            
        }
                
    }]); // End of PjtSrvc.. 
    
    // About Service
    App.service('AboutSrvc', ['$sce', function ($sce) {
        return {
            histories : function() {
                return [
                    {
                        img_path : 'resources/img/about/1.jpg',
                        date : '2012년 4월',
                        subheading : '모노곤의 창업멤버들이 소호사무실에 모이다!',
                        desc : $sce.trustAsHtml('<p class="text-muted">HTML5 베이스의 하이브리드(웹&네이티브)게임 <b>블러디워즈</b> 개발착수</p>')
                    }
                    ,{
                        img_path : 'resources/img/about/2.jpg',
                        date : '2012년 8월',
                        subheading : '주식회사 블랙위키드 설립',
                        desc : $sce.trustAsHtml('<p class="text-muted"><a href="http://www.actoz.com/" target="_blank">액토즈소프트</a>와 <b>블러디워즈(BloodyWars)</b> 개발 계약 체결<br/>일본 <b>아사쿠사게임즈</b> 의 <b>격전 삼국연의</b> 게임내 카드일러스트 개발 계약 체결 <small>(2013년 NEO CYON 을 통해 한국런칭- 국내 런칭명 <b>삼국영웅콜렉션</b>)</small></p>')
                    }
                    ,{
                        img_path : 'resources/img/about/3.jpg',
                        date : '2013년',
                        subheading : '퍼즐RPG게임 <a href="https://play.google.com/store/apps/details?id=com.skns.g.deepabyss&hl=ko" target=_blank">딥어비스(DEEP ABYSS)</a> 개발 Start!',
                        desc : $sce.trustAsHtml('<p class="text-muted"><b>6월</b> <a href="http://www.sknservice.com/" target="_black">SKNS</a>와 퍼즐RPG게임 <b>딥어비스(DEEP ABYSS)</b> 개발 계약 체결</p>'
                                + '<p class="text-muted"><b>8월</b> 엑토즈소프트 <b>블러디워즈</b> 국내런칭 (구글 / T스토어)</p>'
                                + '<p class="text-muted">일본 <b>아사쿠사게임즈</b> 의 <b>격전 삼국연의</b> 게임내 카드일러스트 개발 계약 체결 <small>(2013년 NEO CYON 을 통해 한국런칭- 국내 런칭명 <b>삼국영웅콜렉션</b>)</small></p>'
                                + '<p class="text-muted">월넛스튜디오 <b>패왕삼국</b> 게임내 카드일러스트 개발계약 체결</p>')
                    }
                    ,{
                        img_path : 'resources/img/about/4.jpg',
                        date : '2014년',
                        subheading : '블랙위키드에서 <b>모노곤(Monogon)</b>으로 사명 변경',
                        desc : $sce.trustAsHtml('<p class="text-muted"><b>9월</b> <a href="http://www.kibo.or.kr/go_page.asp" target="_black">기술보증기금</a>으로부터 추가 1억원 지원. <small>(총 1.5억원)</small></p>'
                                + '<p class="text-muted">자체 개발 프로젝트 <b>천년전쟁(가칭)</b> 개발 개시</p>'
                                + '<p class="text-muted">일본개발사 <b>GLAMBOX</b> + 한국개발사 <b>ROCKET PUNCH GAMES</b>와 함께 왕도 RPG 게임 <b>스타더스트 스토리즈</b> 공동 개발 계약 체결</p>')
                    }
                    ,{
                        img_path : 'resources/img/about/4.jpg',
                        date : '2015년',
                        subheading : '두개의 게임 런칭!',
                        desc : $sce.trustAsHtml('<p class="text-muted"><b>1월</b> <a href="https://play.google.com/store/apps/details?id=com.skns.g.deepabyss&hl=ko" target=_blank">딥어비스 for kakao</a> 국내 Google play / 네이버마켓 런칭</p>'
                                + '<p class="text-muted"><b>2월</b> <b>스타더스트 스토리즈</b> 일본 Google play / 앱스토어 런칭 </p>')
                    }
                ];
            }, // End of hystories function..
            
            
//            toggleClass : function ( index ) {
//                var classNm = "timeline-image";
//
//                if ( index % 2 != 0 )
//                    classNm = "timeline-inverted";
//
//                return classNm;
//            } // Enf of toggleClass function..
            
        }
    }]); // End of AboutSrvc
    
    // Team Service
    App.service('TeamSrvc', ['$sce', function ($sce) {
        return {
            teams : function() {
                return [
                        {
                            img_path : 'resources/img/team/head.jpg',
                            name : 'Edward Lee',
                            position : $sce.trustAsHtml('CEO <small>- Art Director</small>'),
                            twitter : '',
                            facebook : '',
                            linkedin : ''
                        }
                        ,{
                            img_path : 'resources/img/team/vision.jpg',
                            name : 'Joshua Kim',
                            position : $sce.trustAsHtml('CSO <small>- 사업전략</small>'),
                            twitter : '',
                            facebook : '',
                            linkedin : ''
                        }
                        ,{
                            img_path : 'resources/img/team/broom.jpg',
                            name : 'Roger Jo',
                            position : $sce.trustAsHtml('CTO <small>- Software/System Architecture, Back-end</small>'),
                            twitter : '',
                            facebook : '',
                            linkedin : ''
                        }
                        ,{
                            img_path : 'resources/img/team/cape.jpg',
                            name : 'bongho Beak',
                            position : $sce.trustAsHtml('Server Programmer <small>- Front-end, Back-end, DataBase</small>'),
                            twitter : '',
                            facebook : '',
                            linkedin : ''
                        }
                        ,{
                            img_path : 'resources/img/team/magic.jpg',
                            name : 'duckjin Park',
                            position : $sce.trustAsHtml('Client Programmer <small>- Unity3D, C#</small>'),
                            twitter : '',
                            facebook : '',
                            linkedin : ''
                        }
                        ,{
                            img_path : 'resources/img/team/taburi.jpg',
                            name : 'taburi Kim',
                            position : $sce.trustAsHtml('Designer <small>- Animation, UI, Effect</small>'),
                            twitter : '',
                            facebook : '',
                            linkedin : ''
                        }
                        ,{
                            img_path : 'resources/img/team/mom.jpg',
                            name : 'Merilin Jeong',
                            position : $sce.trustAsHtml('Our Mom!!'),
                            twitter : '',
                            facebook : '',
                            linkedin : ''
                        }
                    ];
            }
        };
    }]); // End of TeamSrvc
    
}());