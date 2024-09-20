import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "@/Views/HomeViews.vue";
import JobViews from "@/Views/JobViews.vue";
import NotfoundView from "@/Views/NotfoundView.vue";
import JobView from "@/Views/JobView.vue";
import Addjob from "@/Views/Addjob.vue";
import EditjobVue from "@/Views/EditjobVue.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViews,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobViews,
    },
    {
      path:"/job/:id",
      name:"job",
      component: JobView,
    },
    {
      path:"/jobs/add",
      name:'add-job',
      component:Addjob,
    },
    {
       path:"/jobs/edit/:id",
       name:'edit-job',
       component: EditjobVue,
    },
    {
      path:"/:catchAll(.*)",
      name:"not-found",
      component:NotfoundView
    }
  ],
});

export default router;
