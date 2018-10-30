import angular from 'angular';
import './root.component.js';

angular
    .module('app')
    .config(($stateProvider, $locationProvider) => {

        // make sure angular does not rewrite our urls, since they are set by the portal
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false,
        });

        $stateProvider
            .state('root', {
                url: '',
                template: '<root />',
            })
    });
