import angular from 'angular';
import list from './list.html';
import './list.css';

const arrText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam assumenda deleniti dignissimos dolore ea, eligendi harum illum in libero maiores molestiae nostrum officia omnis pariatur sit tempora tempore veritatis!'.split(
  ' ',
);

const COUNT = 20;

function prepare(it, i) {
  return {
    id: i,
    iconUrl: it.picture.thumbnail,
    author: `${it.name.first} ${it.name.last}`,
    time: new Date(),
    text: arrText
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.random() * arrText.length + 1)
      .join(' '),
  }
}

export const moduleName = angular
  .module('messages', [])
  .component('messagesList', {
    template: list,
    controller: ['$scope', '$http', ($scope, $http) => {
      $http
        .get(`https://randomuser.me/api/?results=${COUNT}`)
        .then(resp => $scope.messages = resp.data.results.map(prepare));
      //todo sort by date
    }],
  }).name;
