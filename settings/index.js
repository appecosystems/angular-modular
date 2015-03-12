(function(){
var module = {
    name: 'angularModular.settings',
    dependencies: [],
    config: {
        providers: ['$stateProvider', '$urlRouterProvider']
    },
    settingsController: {
        name: 'SettingsController',
        injectables: []
    }
};

var SettingsConfig = function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state( 'app.settings', {
            url: '/settings',
            templateUrl: 'settings/index.tpl.html',
            controller: module.settingsController.name + ' as settings'
    });
};
SettingsConfig.$provide = module.config.providers;


var SettingsController = function() {
    var self = this;
};
SettingsController.$inject = module.settingsController.injectables;


angular.module(module.name, module.dependencies)
.config(SettingsConfig)
.controller(module.settingsController.name, SettingsController);
}());