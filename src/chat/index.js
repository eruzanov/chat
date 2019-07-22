import angular from 'angular';
import chatList from './chat-list.html';
import './chat-list.css';

export const moduleName = angular.module('chat', []).component('chatList', {
  template: chatList,
  controller: [
    '$scope',
    '$rootScope',
    function($scope, $rootScope) {
      $scope.chatList = [
        'angular',
        'jobs',
        'nodejs',
        'offtopic',
        'react',
        'typescript',
        'vue',
      ];

      $rootScope.selected = $scope.chatList[0];

      this.onSelect = chat => ($rootScope.selected = chat);
    },
  ],
}).name;
