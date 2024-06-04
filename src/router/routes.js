import IphoneItem from '@/components/electronics/IphoneItem.vue'
import HelloWorld from '../components/HelloWorld.vue'
import SmsCreate from '../components/SmsCreate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/sms/create',
    name: 'SmsCreate',
    component: SmsCreate
  },
  {
    path: '/iphone',
    name: 'IphoneItem',
    component: IphoneItem
  },
]

export default routes
