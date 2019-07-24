import angular from 'angular';
import chatList from './chat-list.html';
import './chat-list.css';

const chats = [
  'angular',
  'jobs',
  'nodejs',
  'offtopic',
  'react',
  'typescript',
  'vue',
];

export const moduleName = angular.module('chat', []).component('chatList', {
  template: chatList,
  controller: [
    '$scope',
    '$rootScope',
    '$location',
    function($scope, $rootScope, $location) {
      const selected = $location.hash();
      $scope.chatList = chats;
      $rootScope.selected = chats.includes(selected) ? selected : $scope.chatList[0];

      this.onSelect = chat => ($rootScope.selected = chat);
    },
  ],
}).name;
