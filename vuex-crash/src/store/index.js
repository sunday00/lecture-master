import { createStore } from 'vuex'
import shop from '@/api/shop'

export default createStore({
  state() {
    return {
      products: [],
      cart: [],
      checkoutStatus: null,
    }
  },

  getters : {
    availableProducts(state, getters){
      console.log(getters)
      return state.products.filter(p => p.inventory > 0)
    },
    
    cartProducts(state){
      return state.cart.map(cartItem => {
        const product = state.products.find( p => p.id === cartItem.id )
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },

    cartTotal(state, getters){
      return getters.cartProducts.reduce((t, p) => t + p.price * p.quantity, 0)
    },

    isProductInStock () {
      return (product) => product.inventory > 0
    },

  },

  actions: {
    fetchProducts({commit}){
      // ajax call
      return new Promise((resolve) => {
        shop.getProducts(products => {
          // this.products = products
          commit('setProducts', products)
          resolve()
        })
      })
    },

    addProductToCart({getters, state, commit}, product){
      if( getters.isProductInStock(product) ){
        const cartItem = state.cart.find(item => item.id === product.id)
        if( !cartItem ){
          commit('pushProductToCart', product.id)
        } else {
          commit('incrementCartQuantity', cartItem)
        }
      }

      commit('decrementProductFromInventory', product)
    },

    checkout({state, commit}){
      shop.buyProducts(
        state.cart, () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'fail')
        }
      )
    },
  },

  mutations: {
    setProducts(state, products){
      // updates states
      state.products = products
    },
    pushProductToCart(state, productId){
      state.cart.push({
        id: productId,
        quantity: 1
      })
    },
    incrementCartQuantity(state, product){
      product.quantity++
    },
    decrementProductFromInventory(state, product){
      product.inventory--
    },

    setCheckoutStatus(state, status){
      state.checkoutStatus = status
    },

    emptyCart(state){
      state.cart = []
    },
  }
})

