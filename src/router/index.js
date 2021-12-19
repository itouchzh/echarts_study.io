import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import BasicBar from '../components/ECharts/Bar/BasicBar'
import DynamicSortingBar from '../components/ECharts/Bar/DynamicSortingBar'
import LadderWaterfallBar from '../components/ECharts/Bar/LadderWaterfallBar'
import StackedColumnBar from '../components/ECharts/Bar/StackedColumnBar'
import BasicLine from '../components/ECharts/Line/BasicLine'
import AreaLine from '../components/ECharts/Line/AreaLine'
import LadderLine from '../components/ECharts/Line/LadderLine'
import SmoothLine from '../components/ECharts/Line/SmoothLine'
import StackedLine from '../components/ECharts/Line/StackedLine'
import BasicPie from '../components/ECharts/Pie/BasicPie'
import CirclularPie from '../components/ECharts/Pie/CirclularPie'
import RosePie from '../components/ECharts/Pie/RosePie'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '/basicBar', component: BasicBar },
        { path: '/dynamicSortingBar', component: DynamicSortingBar },
        { path: '/ladderBar', component: LadderWaterfallBar },
        { path: '/stackedColumnBar', component: StackedColumnBar },
        { path: '/basicLine', component: BasicLine },
        { path: '/stackedLine', component: StackedLine },
        { path: '/areaLine', component: AreaLine },
        { path: '/smoothLine', component: SmoothLine },
        { path: '/ladderLine', component: LadderLine },
        { path: '/basicPie', component: BasicPie },
        { path: '/circlularPie', component: CirclularPie },
        { path: '/rosePie', component: RosePie },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
