(function(){
var module = {
    name: 'angularModular.home',
    dependencies: [],
    config: {
        providers: ['$stateProvider', '$urlRouterProvider']
    },
    homeController: {
        name: 'HomeController',
        injectables: []
    }
};

var HomeConfig = function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state( 'app.home', {
            url: '/home',
            templateUrl: 'home/index.tpl.html',
            controller: module.homeController.name + ' as home'
    });
};
HomeConfig.$provide = module.config.providers;


var HomeController = function() {
    var self = this;
    self.message = 'Hello World!';
};
HomeController.$inject = module.homeController.injectables;


angular.module(module.name, module.dependencies)
.config(HomeConfig)
.controller(module.homeController.name, HomeController);
}());