angular.module( 'angularModular.header', [
])

.directive('header', function() {
    var templatePath,
        linkMethod,
        controllerMethod;

    templatePath = 'header/index.tpl.html';

    linkMethod = function(scope, element, attributes) {
    };

    controllerMethod = function($scope) {
        $scope.appName = 'Angular Modular';
    };

    return {
        restrict: 'E',
        templateUrl: templatePath,
        link: linkMethod,
        controller: controllerMethod
    };
});