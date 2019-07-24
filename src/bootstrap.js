import angular from 'angular';
import { moduleName as login } from './login';
import { moduleName as app } from './app';
import './styles.css';

angular.module('bootstrap', [login, app]).factory('user', [
  '$rootScope',
  function($rootScope) {
    const getInfo = () => localStorage.getItem('user');
    $rootScope.user = getInfo();
    return {
      getInfo,
      login: function() {
        localStorage.setItem('user', true);
        $rootScope.user = this.getInfo();
      },
      logout: function() {
        localStorage.setItem('user', false);
        $rootScope.user = this.getInfo();
      },
    };
  },
]);
