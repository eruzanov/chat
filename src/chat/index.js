import angular from 'angular';
import chatList from './chat-list.html';
import './chat-list.css';

export const moduleName = angular.module('chat', []).component('chatList', {
  template: chatList,
  controller: $scope => {
    $scope.list = [
      'angular',
      'jobs',
      'nodejs',
      'offtopic',
      'react',
      'typescript',
      'vue',
    ];
  },
}).name;
