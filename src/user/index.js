import angular from 'angular';
import template from './user.html';
import './user.css';

export const moduleName = angular.module('user', []).component('user', {
  template,
  controller: [
    'user',
    function(user) {
      this.onLogout = () => user.logout();
    },
  ],
}).name;
