(function(){
var module = {
    name: 'angularModular.about',
    dependencies: [],
    config: {
        providers: ['$stateProvider', '$urlRouterProvider']
    },
    aboutController: {
        name: 'AboutController',
        injectables: []
    }
};

var AboutConfig = function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state( 'app.about', {
            url: '/about',
            templateUrl: 'about/index.tpl.html',
            controller: module.aboutController.name + ' as about'
    });
};
AboutConfig.$provide = module.config.providers;


var AboutController = function() {
    var self = this;
};
AboutController.$inject = module.aboutController.injectables;


angular.module(module.name, module.dependencies)
.config(AboutConfig)
.controller(module.aboutController.name, AboutController);
}());