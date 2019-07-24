import angular from 'angular';
import template from './login.html';
import './login.css';

export const moduleName = angular.module('login', []).component('loginForm', {
  template,
  controller: [
    'user',
    function(user) {
      this.onLogin = () => user.login();
    },
  ],
}).name;
