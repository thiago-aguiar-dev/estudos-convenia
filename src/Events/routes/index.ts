import type { RouteRecordRaw } from 'vue-router'
import * as types from '@Events:routes/names'

const eventRoutes: RouteRecordRaw[] = [
  {
    name: types.EVENTS_HOME,
    path: '/events',
    component: () => import('@Events:components/container/EventsHome.vue'),
  },
]

export default eventRoutes
