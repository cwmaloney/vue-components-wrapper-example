(function(angular) {
  'use strict';

// Register our sampleComponentsAngular.js module
angular.module('componentWrappers', [])
  .directive('simpleCounterWrapper', function () {
    return {
      restrict: 'E', // match element only

      scope: {
        count: '=initialCount'
      },

      template: '<div>\n' +
                '  <div ng-non-bindable>' +
                '    <div id="wrapper">' +
                '      <simple-counter' +
                '        v-bind:initial-count="initialValueFromWrapper"' +
                '        v-on:count-updated="onCountUpdated"' +
                '        >' +
                '      </simple-counter>' +
                '    </div>' +
                '  </div>' +
                '  Angular wrapper $scope value: {{count}}\n' +
                '</div>',

      link: function (scope, $element) {
        // Create our root instance
        scope.vue = new Vue({
          el: '#wrapper',
          data: function () {
            return {
              initialValueFromWrapper: scope.count
            }
          },
          methods: {
            onCountUpdated: function (newCount) {
              console.log('onCountUpdated' + newCount);
              scope.$apply(function () {
                scope.count = newCount;
              });
            }
          }
        });
        console.log("scope.count=" + scope.count)
      }
    }
  });
})(window.angular);
