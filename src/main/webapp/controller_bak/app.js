mgWebApp
    .controller("MainCtrl", function($scope, $routeParams){
      this.products = [
        { name: 'Some Awesome Product', price: 123.45,
          images: [
            { full: 'product01-image01-full.jpg', thumb: 'product01-image01-thumb.jpg' },
            { full: 'product01-image02-full.jpg', thumb: 'product01-image02-thumb.jpg' },
            { full: 'product01-image03-full.jpg', thumb: 'product01-image03-thumb.jpg' },
          ],
          description: "This product is awesome!",
          specifications: "Filled with Awesome",
          reviews: [
            { body: "This product is awesome!", stars: 5, author: "fanboy@apple.com" },
            { body: "Would not buy again...", stars: 1, author: "hater@losers.com" },
          ],
        },
        { name: 'Some Other Awesome Product', price: 123.45,
          images: [
            { full: 'product02-image01-full.jpg', thumb: 'product02-image01-thumb.jpg' },
            { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
          ],
          description: "This product is ALSO awesome!",
          specifications: "Filled with Awesome",
          reviews: [ ]
        },
      ];
    
    $scope.company = {
        title : "monogon",
        desc : "WE DESIGN GAMES."
    };
    
    if ( typeof($routeParams.pofolId) === 'undefined' )
        $scope.pofolId = 1;
    else
        $scope.pofolId = $routeParams.pofolId;
    
    
//    $scope.setId = function (id) {
//        $scope.pofolId = id;
//        console.log($scope.pofolId);
//        angular.element("#pofolSec"+id).trigger('click');
//    };
//    
//    $scope.getPofolId = function() {
//        return $scope.pofolId;
//    };
    
    })
    .directive("topMenu", function(){
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
//        controller : function ( $scope ) {
//            $scope.pofolId = 1;
////            $scope.pofolId = $routeParams.pofolId;
////            
////            if ( typeof($scope.pofolId) === 'undefined' )
////                $scope.pofolId = 1;
////            
////            console.log($scope.pofolId);
//            
//            this.getId = function () {
//                return $scope.pofolId;
//            };
//            
//            $scope.setId = function (id) {
//                $scope.pofolId = id;
//                console.log($scope.pofolId);
//                angular.element("#pofolSec"+id).trigger('click');
//            };
//        }
          link : function ( $scope, element, attrs ) {
              element.on( 'click', function ( event ) {
                  console.log(element.id);
                
              });
          }
      };
    })
    .directive("aboutSection", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'resources/templates/about-section.html',
      };
    })
    .directive("teamSection", function(){
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'resources/templates/team-section.html',
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
//        require : 'portfolioSection',
//        link : function( $scope, $emelent, $attrs, ctrl ) {
//            $scope.pofolId = ctrl.getId();
//            console.log($scope.pofolId);
//        }
      };
    })

//    .config ( function ( $stateProvider ) {
//        $stateProvider
//            .state('index', {
//                url : "",
//                views : {
//                    "top-menu" : { templateUrl : "resources/templates/top-menu.html" }
//                }
//            })
//    })

//    .config(function ($routeProvider) {
//        $routeProvider
////            .when('/books', {templateUrl: '/views/books/list.html', controller: BookListController})
//            .when('/portfolioModal/:pofolId', {templateUrl: 'resources/templates/portfolio-modal.html', controller: PofolCtrl});
//    });
; // END module(store)

function PofolCtrl($scope, $routeParams, $location) {
    var pofolId = $routeParams.pofolId;

    $scope.pofolId = pofolId;
    
//    $scope.save = function () {
//        if ($scope.book.isNew()) {
//            $scope.book.$save(function (book, headers) {
//                toastr.success("Created");
//                var location = headers('Location');
//                var id = location.substring(location.lastIndexOf('/') + 1);
//                $location.path('/books/' + id);
//            });
//        } else {
//            $scope.book.$update(function() {
//                toastr.success("Updated");
//            });
//        }
//    };
}