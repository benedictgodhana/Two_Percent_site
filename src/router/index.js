import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import TheatreofScaleView  from '../views/TheatreofScaleView.vue'
import OutlierCapitalView from '../views/OutlierCapitalView.vue'
import ShortTermFinancingView from '../views/ShortTermFinancingView.vue'
import PartnerWithUsView from '../views/PartnerWithUsView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Theatre_of_scale',
      name: 'TheatreofScale',
      component: TheatreofScaleView
    },

    {
      path: '/Outlier_  Capital',
      name: 'Outlier_Capital',
      component:OutlierCapitalView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/ShortTermFinancing',
      name: 'ShortTermFinancing',
      component: ShortTermFinancingView
    },{
      path: '/PartnerWithUs',
      name: 'PartnerWithUs',
      component:PartnerWithUsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
