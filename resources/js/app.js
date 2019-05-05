require('./bootstrap');
window.Vue = require('vue');
window.Vuetify = require('vuetify');

import router from '@/js/routes.js'
import App from '@/js/views/App'

Vue.use(Vuetify);

Vue.component('Home', require('./components/Home.vue').default);
Vue.component('About', require('./components/About.vue').default);


const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});

export default app;
