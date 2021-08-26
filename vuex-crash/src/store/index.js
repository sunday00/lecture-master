import { createStore } from 'vuex'
import actions from './actions'

import cart from '@/store/modules/cart';
import products from '@/store/modules/products';

export default createStore({
  modules:{
    cart, products
  },

  state: {
    
  },

  getters: {
    

  },

  actions,

  mutations: {
    
  }
})

