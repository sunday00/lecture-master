import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      products: []
    }
  },

  getters : {
    availableProducts(state){
      return state.products.filter(p => p.inventory > 0)
    },
  },

  actions: {
    fetchProducts(){
      // ajax call
    }
  },

  mutations: {
    setProducts(state, products){
      // updates states
      state.products = products
    }
  }
})

