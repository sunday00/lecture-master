import shop from '@/api/shop'

export default {
  namespaced: true,
  
  state: {
    items: [],
  },
  
  getters: {
    availableProducts(state){
      return state.items.filter(p => p.inventory > 0)
    },

    isProductInStock () {
      return (product) => product.inventory > 0
    },
  },

  mutations: {
    setProducts(state, products){
      // updates states
      state.items = products
    },
    
    decrementProductFromInventory(state, product){
      product.inventory--
    },
  },
  
  actions: {
    fetchProducts({commit}){
      console.log('modules/products/fetchProducts');
      // ajax call
      return new Promise((resolve) => {
        shop.getProducts(products => {
          // this.products = products
          commit('setProducts', products)
          resolve()
        })
      })
    },
  }
}