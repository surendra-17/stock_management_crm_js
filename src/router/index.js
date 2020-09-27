import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import ProductCategoryListing from '../views/product-category/Listing'
import ProductCategoryManage from '../views/product-category/Manage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/product_category/listing',
    name: 'product_category_listing',
    component: ProductCategoryListing
  },
  {
    path: '/product_category/manage',
    name: 'product_category_manage',
    component: ProductCategoryManage
  }
]

const router = new VueRouter({
  routes
})

export default router
