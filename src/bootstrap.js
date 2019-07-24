import angular from 'angular';
import { moduleName as login } from './login';
import { moduleName as app } from './app';
import './styles.css';

angular
  .module('bootstrap', [login, app])
  .run([
    '$location',
    '$http',
    'user',
    ($location, $http, user) => {
      try {
        const accessToken = /access_token=([^&]+)/.exec($location.hash())[1];
        if (accessToken) {
          $http
            .get(`https://login.yandex.ru/info?oauth_token=${accessToken}`)
            .then(resp => {
              user.login(JSON.stringify(resp.data));
              $location.url('/');
            })
            .catch(console.log);
        }
      } catch (e) {
        console.log(e);
      }
    },
  ])
  .factory('user', [
    '$rootScope', '$location',
    function($rootScope, $location) {
      const getInfo = () => JSON.parse(localStorage.getItem('user'));
      $rootScope.user = getInfo();
      return {
        getInfo,
        login: function(data) {
          localStorage.setItem('user', data);
          $rootScope.user = this.getInfo();
        },
        logout: function() {
          localStorage.setItem('user', false);
          $rootScope.user = this.getInfo();
          $location.url('/');
        },
      };
    },
  ]);
