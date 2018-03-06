//
// This script registers the components with the Vue.s runtime.
// By including this script in a page, all the components are registered with
// the Vue.js runtime and can be used within a Vue component.
//

import HelloComponent from './components/HelloComponent.vue';
import Hello2Component from './components/Hello2Component.vue';
import SimpleCounter from './components/SimpleCounter.vue';
import SimpleContact from './components/SimpleContact.vue';

import Vue from 'vue';

Vue.component('hello-component', HelloComponent);
Vue.component('hello2-component', Hello2Component);
Vue.component('simple-counter', SimpleCounter);
Vue.component('simple-contact', SimpleContact);

