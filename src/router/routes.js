import IphoneItem from '@/components/electronics/IphoneItem.vue'
import HomePage from '@/components/HomePage'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/iphone',
    name: 'IphoneItem',
    component: IphoneItem
  },
]

export default routes
