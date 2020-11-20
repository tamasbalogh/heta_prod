import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import Products from '../views/Products.vue'


export const routes = [
    {
        path: "/",
        component: Home,
        meta: {
            isHome: true
        }
    },
    {
        path: "/products",
        component: Products,
        meta: {
            isHome: true
        }
    },
    {
        path: "/order",
        component: Order
    }
]