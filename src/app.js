import angular from 'angular';
import { moduleName as messages } from './messages';
import { moduleName as chat } from './chat';
import './styles.css';

angular
  .module('app', [messages, chat])
  .controller('header', ['$rootScope', () => {}]);
