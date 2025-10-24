import {createRouter, createWebHistory} from "vue-router";
import MainComponent from "./components/MainComponent.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue";

const rutas=[
    {path:'/',component:MainComponent},
    {path:"/hello",component:HelloWorld},
    {path:'/*',component:NotFoundComponent},
]

const routes=createRouter({

    history:createWebHistory(),
    routes:rutas,
})

export default routes
