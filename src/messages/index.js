import angular from 'angular';
import list from './list.html';
import './list.css';

const arrText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam assumenda deleniti dignissimos dolore ea, eligendi harum illum in libero maiores molestiae nostrum officia omnis pariatur sit tempora tempore veritatis!'.split(
  ' ',
);

export const moduleName = angular
  .module('messages', [])
  .component('messagesList', {
    template: list,
    controller: $scope => {
      $scope.messages = new Array(20).fill(true).map((_, i) => ({
        id: i,
        iconUrl: 'https://randomuser.me/api/portraits/women/60.jpg',
        author: 'Genesis Arnold',
        time: new Date(),
        text: arrText
          .sort(() => Math.random() - 0.5)
          .slice(0, Math.random() * arrText.length + 1)
          .join(' '),
      }));
      //todo sort by date
    },
  }).name;
