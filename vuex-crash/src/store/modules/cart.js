import shop from '@/api/shop'

export default {
  state:{ 
    items: [],
    checkoutStatus: null,
  },

  getters: {
    cartProducts(state, getters, rootState){
      return state.items.map(cartItem => {
        const product = rootState.products.items.find( p => p.id === cartItem.id )
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
  },

  mutations: {
    pushProductToCart(state, productId){
      state.items.push({
        id: productId,
        quantity: 1
      })
    },

    incrementCartQuantity(state, product){
      product.quantity++
    },

    setCheckoutStatus(state, status){
      state.checkoutStatus = status
    },

    emptyCart(state){
      state.items = []
    },
  },

  actions: {
    addProductToCart({getters, state, commit}, product){
      if( getters.isProductInStock(product) ){
        const cartItem = state.items.find(item => item.id === product.id)
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
}