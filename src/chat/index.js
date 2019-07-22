import angular from 'angular';
import chatList from './chat-list.html';
import './chat-list.css';

export const moduleName = angular.module('chat', []).component('chatList', {
  template: chatList,
  controller: function($scope) {
    $scope.chatList = [
      'angular',
      'jobs',
      'nodejs',
      'offtopic',
      'react',
      'typescript',
      'vue',
    ];

    this.selected = $scope.chatList[0];

    this.onSelect = chat => (this.selected = chat);
  },
}).name;
