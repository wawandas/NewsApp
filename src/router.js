import { createRouter, createWebHistory } from "vue-router";

import EditNews from "./views/EditNews.vue";
import NHome from "./views/NHome.vue";
import NewsOverview from "./views/NewsOverview.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/edit/:id",
      name: "edit",
      component: EditNews,
      props: true
    },
    {
      path: "/overview",
      name: "overview",
      component: NewsOverview
    },
    {
      path: "/:pathMatch(.*)",
      component: NHome
    }
  ]
});
