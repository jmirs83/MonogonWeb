(function() {

  "use strict";

  var App = angular.module("App.directives",[]);

  App.directive('inputtext', function ($timeout) {
    return {
      restrict:'E',
      replace:true,
      template:'<input type="text"/>',
      scope: {
      	//if there were attributes it would be shown here
      },
      link:function (scope, element, attrs, ctrl) {
      	// DOM manipulation may happen here.
      }
    }
  });

  App.directive('version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });

    // you may add as much directives as you want below
    
    App.directive("topMenu", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'resources/templates/top-menu.html',
      };
    })
    .directive("mgHeader", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'resources/templates/mg-header.html',
      };
    })
    .directive("serviceSection", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'resources/templates/service-section.html',
      };
    })
    .directive("portfolioSection", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'resources/templates/portfolio-section.html',
      };
    })
    .directive("aboutSection", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'resources/templates/about-section.html',
        controller : 'AboutCtrl'
      };
    })
    .directive("teamSection", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'resources/templates/team-section.html',
        controller : 'TeamCtrl'
      };
    })
    .directive("contactSection", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'resources/templates/contact-section.html',
      };
    })
    .directive("portfolioModal", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'resources/templates/portfolio-modal.html',
//        scope:{
//            images: '='
//        },
//        link: function (scope, elem, attrs) {
//
//            scope.currentIndex = [];
//            
//            for ( var i = 0; i < scope.images.length; i++ )
//            {
//                scope.currentIndex.push( 0 );
//            }
//
//            scope.next=function(index){
//                scope.currentIndex[index] < scope.images[index].main_img_list.length - 1 ? scope.currentIndex[index]++ : scope.currentIndex[index] = 0;
//            };
//
//            scope.prev=function(index){
//                scope.currentIndex[index] > 0 ? scope.currentIndex--:scope.currentIndex=scope.images[index].main_img_list.length-1;
//            };
//
//            scope.$watch('currentIndex',function(){
//                scope.images.forEach(function(image){
//                    image.visible=false;
//                });
//                scope.images[index].main_img_list[scope.currentIndex].visible=true;
//            });
//
//            /* Start: For Automatic slideshow*/
//
//            var timer;
//
//            var sliderFunc=function(){
//                timer=$timeout(function(){
//                    scope.next();
//                    timer=$timeout(sliderFunc,5000);
//                },5000);
//            };
//
//            sliderFunc();
//
//            scope.$on('$destroy',function(){
//                $timeout.cancel(timer);
//            });
//
//            /* End : For Automatic slideshow*/
//
//        }
      };
    })

}());