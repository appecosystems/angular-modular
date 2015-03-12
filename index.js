(function(){
var module = {
    name: 'angularModular',
    dependencies: [
        'ui.router',

        'angularModular.header',
        'angularModular.sidebar',
        'angularModular.home',
        'angularModular.about',
        'angularModular.settings'
    ],
    config: {
        providers: ['$stateProvider', '$urlRouterProvider']
    },
    controller: {
        name: 'AppController',
        injectables: []
    }
};

var AppConfig = function($locationProvider, $stateProvider, $urlRouterProvider) {
    // the overall default route for the app. If no matching route is found, then go here
    $urlRouterProvider.otherwise('/app/home');

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/app',
            views: {
                'body': {
                    templateUrl: 'index.tpl.html'
                }
            },
            controller: module.controller.name + ' as app'
    });
};
AppConfig.$provide = module.config.providers;

var AppController = function() {
  this.toggleLeft = function() {
      console.log('toggle the sidebar later on');
  };
};
AppController.$inject = module.controller.injectables;

angular.module(module.name, module.dependencies)
.config(AppConfig)
.controller(module.controller.name, AppController);
}());