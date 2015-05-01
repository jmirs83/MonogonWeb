(function() {

  "use strict";

  var App = angular.module("App.controllers", []);

  App.controller("MyCtrl1", ["$scope", "UtilSrvc", function ($scope, UtilSrvc){
    $scope.aVariable = 'anExampleValueWithinScope';
    $scope.valueFromService = UtilSrvc.helloWorld("User");
  }]);

  App.controller("MyCtrl2", ["$scope", function($scope){
      // if you have many controllers, it's better to separate them into files
  }]);

    
  App.controller("MainCtrl", ["$scope", "PjtSrvc", function ($scope, PjtSrvc){
      
    $scope.company = {
        title : "monogon",
        desc : "WE DESIGN GAMES."
    };
      
        $scope.pjtList = PjtSrvc.pjtList();
        $scope.myInterval = 3000;
        $scope.slides = [];
        $scope.next = function() {
            console.log("click next!! = " );
            
            $scope.currentIndex < $scope.sub_images.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
        };

        $scope.showPjt = function ( index ) {
            console.log("click index!! = " + index );
            
//            $scope.currentIndex = $scope.currentIndexes[index];
//            $scope.slides = $scope.pjtList[index].slides;
            $scope.pjtIndex = index;
            
            console.log("pjtIndex index!! = " + $scope.pjtIndex );
//            $scope.sub_images.forEach(function(image) {
//                image.visible = false; // make every image invisible
//            });
//
//            $scope.sub_images[0].visible = true; // make the current image visible
        }
        
//        $scope.prev = function() {
//            console.log("click prev!! = " );
//            $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.sub_images.length - 1;
//        };
        
      
        /*
        $scope.currentIndexes = []; // Initially the index is at the first image
        $scope.sub_images = $scope.pjtList[0].main_img_list; // Initially the index is at the first image
      
        $scope.currentIndex = 0; // Initially the index is at the first image
        $scope.pjtIndex = 0;
 
        for ( var i = 0; i < $scope.pjtList.length; i++ )
        {
            $scope.currentIndexes.push(0);
        }
      
        $scope.showPjt = function ( index ) {
            console.log("click index!! = " + index );
            
//            $scope.currentIndex = $scope.currentIndexes[index];
            $scope.sub_images = $scope.pjtList[index].main_img_list;
            
            $scope.sub_images.forEach(function(image) {
                image.visible = false; // make every image invisible
            });

            $scope.sub_images[0].visible = true; // make the current image visible
        }
        
        $scope.next = function() {
            console.log("click next!! = " );
            
            $scope.currentIndex < $scope.sub_images.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
        };

        $scope.prev = function() {
            console.log("click prev!! = " );
            $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.sub_images.length - 1;
        };
        
        $scope.$watch('currentIndex', function() {
            $scope.sub_images.forEach(function(image) {
                image.visible = false; // make every image invisible
            });

            $scope.sub_images[$scope.currentIndex].visible = true; // make the current image visible
        });
        */
      
  }]); // End of MainCtrl
    
    // About controller
    App.controller("AboutCtrl", ["$scope", 'AboutSrvc', function ($scope, AboutSrvc){

        $scope.about = {
            title : "Who we are!",
            desc : "우리가 걸어온 길."
        };

        $scope.histories = AboutSrvc.histories();
        
        // 연혁 div 태그의 클래스 토글함수
//        $scope.toggleClass = AboutSrvc.toggleClass(index);
        $scope.toggleClass =  function ( index ) {
                var classNm = "timeline-image";

                if ( index % 2 != 0 )
                    classNm = "timeline-inverted";

                return classNm;
            };

    }]); // End of AboutCtrl
    
    // Team controller
    App.controller("TeamCtrl", ["$scope", 'TeamSrvc', function ($scope, TeamSrvc){

        $scope.team = {
            title : "Our Amazing Team",
            subline : "작지만 강한. 병맛같지만 멋진걸 추구합니다.",
            desc : "우리는 게임을 디자인 합니다. 디자인이란 가장 기초적인 부분으로부터 시작됩니다. 게임의 핵심요소가 무엇인지, 당신이 게임의 무엇에 열광하는지 알고 있습니다. 우리는 가장 재미있는 게임을 만들고자 합니다!!"
        };

        $scope.teams = TeamSrvc.teams();

    }]); // End of TeamCtrl
    
}());