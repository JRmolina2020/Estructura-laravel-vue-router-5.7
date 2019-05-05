import Vue from "vue";
import Vuerouter from "vue-router";
import Home from "@/js/components/Home.vue"
import About from "@/js/components/About.vue"

Vue.use(Vuerouter);

const router = new Vuerouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home

        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
});
export default router;
