import IphoneItem from '@/components/electronics/Iphone/IphoneItem.vue'
import IpadItem from '@/components/electronics/Ipad/IpadItem.vue'
import MacbookItem from '@/components/electronics/Macbook/MacbookItem.vue'
import VisionProItem from '@/components/electronics/VisionPro/VisionProItem.vue'
import HomePage from '@/components/HomePage'
import PlacingInOrder from '@/components/placingOrder/PlacingInOrder.vue'

const uuidv4 = function () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export const routesNames = {
  IphoneItem: uuidv4(),
  IpadItem: uuidv4(),
  MacbookItem: uuidv4(),
  VisionProItem: uuidv4(),
  PlacingInOrder: uuidv4()
}
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/iphone',
    name: routesNames.IphoneItem,
    component: IphoneItem
  },
  {
    path: '/macbook',
    name: routesNames.MacbookItem,
    component: MacbookItem
  },
  {
    path: '/ipad',
    name: routesNames.IpadItem,
    component: IpadItem
  },
  {
    path: '/visionPro',
    name: routesNames.VisionProItem,
    component: VisionProItem
  },
  {
    path: '/placingAnOrder',
    name: routesNames.PlacingInOrder,
    component: PlacingInOrder
  }
]

export default routes
