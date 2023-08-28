import Vue from "vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Blog from "@/views/Blog.vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "@/views/Login.vue";
import MyVideos from "@/views/MyVideos.vue";
import SinglePost from "@/views/SinglePost.vue";
import PersonalDiary from "@/views/PersonalDiary.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/",
    name: "home_view",
    component: HomeView,
  },
  {
    path: "/about_view",
    name: "about_view",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/myvideos",
    name: "myvideos",
    component: MyVideos,
  },

  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },

  {
    path: "/about",
    name: "about",
    component: About,
  },


  {
    path: "/PersonalDiary",
    name: "PersonalDiary",
    component: PersonalDiary,
  },

  {
    path: "/blog/:id",
    name: "SinglePost",
    component: SinglePost,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
