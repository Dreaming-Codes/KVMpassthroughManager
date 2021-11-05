import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HelloWorld,
        }
    ]
});
