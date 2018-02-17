import { levenDistCtrl } from './levenDist.controller.js';

angular
  .module(`levenDist`, [`ngRoute`])
  .config([`$routeProvider`, config])
  .controller(`levenDistCtrl`, levenDistCtrl);

function config($routeProvider) {
  $routeProvider
    .when(`/`, {
      templateUrl: `levenDist.view.html`,
      controller: `levenDist`,
    })
}

