import angular from 'angular';
import template from './user.html';
import './user.css';

export const moduleName = angular.module('user', []).component('user', {
  template,
  controller: [
    '$scope',
    '$rootScope',
    'user',
    function($scope, $rootScope, user) {
      const avatar = $rootScope.user.default_avatar_id;
      $scope.avatar = `https://avatars.yandex.net/get-yapic/${avatar}/islands-34`;
      this.onLogout = () => user.logout();
    },
  ],
}).name;
