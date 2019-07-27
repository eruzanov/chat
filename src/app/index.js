import angular from 'angular';
import { moduleName as messages } from '../messages';
import { moduleName as chat } from '../chat';
import { moduleName as user } from '../user';
import template from './app.html';
import './app.css';

export const moduleName = angular
  .module('app', [user, messages, chat])
  .component('app', { template }).name;
