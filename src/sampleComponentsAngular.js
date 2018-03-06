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
                '    <simple-counter' +
                '      v-bind:initial-count="initialValueFromWrapper"' +
                '      v-on:count-updated="onCountUpdated">' +
                '    </simple-counter>' +
                '  </div>' +
                '  Angular scope count: {{count}}\n' +
                '</div>',

      link: function (scope, elem) {
        // Create our root instance
        scope.vue = new Vue({
          el: elem[0].querySelector('[ng-non-bindable]'),
          data: function () {
            return {
              initialValueFromWrapper: scope.count
            }
          },
          methods: {
            onCountUpdated: function (newCount) {
              console.log('onCountUpdated=' + newCount);
              scope.$apply(function () {
                scope.count = newCount;
              });
            }
          }
        });
        console.log("scope.count=" + scope.count)
      }
    }
  })
  .directive('simpleContactWrapper', function () {
    return {
      restrict: 'E', // match element only

      scope: {
        contact: '=initialContact'
      },

      template: '<div>\n' +
                '  <div ng-non-bindable>' +
                '    <simple-contact' +
                '      v-bind:initial-contact="initialContactFromWrapper"' +
                '      v-on:contact-updated="onContactUpdated"' +
                '      v-on:cancel="onContactCancel">' +
                '    </simple-contact>' +
                '  </div>' +
                '  Angular scope contact: {{contact}}\n' +
                '</div>',

      link: function (scope, elem) {
        // Create our root instance
        scope.vue = new Vue({
          el: elem[0].querySelector('[ng-non-bindable]'),
          data: function () {
            return {
              initialContactFromWrapper: scope.contact
            }
          },
          methods: {
            onContactUpdated: function (newContact) {
              console.log('onContactUpdated=' + JSON.stringify(newContact));
              scope.$apply(function () {
                scope.contact = newContact;
              });
            },
            onContactCancel: function () {
              console.log('onContactCancel');
            }
          }
        });
        console.log("scope.contact=" + JSON.stringify(scope.contact));
      }
    }
  });
})(window.angular);
