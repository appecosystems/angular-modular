angular.module( 'angularModular.sidebar', [
])

.directive('sidebar', function() {
    var templatePath,
        linkMethod,
        controllerMethod;

    templatePath = 'sidebar/index.tpl.html';

    linkMethod = function(scope, element, attributes) {
    };

    controllerMethod = function($scope, $location, $state) {
        $scope.$state = $state;
        var navItems = [];

        navItems.push({title: 'Home', state: 'app.home', cssClass: 'fa fa-home'});
        navItems.push({title: 'About', state: 'app.about', cssClass: 'fa fa-info-circle'});
        navItems.push({title: 'Settings', state: 'app.settings', cssClass: 'fa fa-cogs'});

        $scope.sidebar = {
            navItems: navItems
        };
    };

    return {
        restrict: 'E',
        templateUrl: templatePath,
        link: linkMethod,
        controller: controllerMethod
    };
});