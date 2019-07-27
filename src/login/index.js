import angular from 'angular';
import template from './login.html';
import './login.css';

const APP_ID = '3d6a2058bee1415daee6165b1b534dd3';

export const moduleName = angular.module('login', []).component('loginForm', {
  template,
  controller: ['$window',
    function($window) {
      this.onLogin = () => {
        $window.open(
          `https://oauth.yandex.ru/authorize?response_type=token&client_id=${APP_ID}`,
        );
        $window.close();
      };
    },
  ],
}).name;
