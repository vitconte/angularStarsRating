var app = angular.module('tryStarsRating', []);
app.directive('starsRating', function () {
    return {
       
        restrict: 'E',
        template: '<div class="rating"><ul>' +
                    '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                      '\u2605' +
                    '</li>' +
                  '</ul></div>',
        scope: {
            ratingValue: '=',
            max: '=',
            readonly: '@'
        },
            
        controller: function ($scope) {
          
        },

        link: function (scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({ filled: i < scope.ratingValue });
                }
            };

            scope.toggle = function (index) {
                if (scope.readonly && scope.readonly === 'true') {
                    return;
                }
                scope.ratingValue = index + 1;            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});
