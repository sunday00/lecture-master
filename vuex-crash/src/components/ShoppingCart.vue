<template>
  <div>
    <h1>
      <font-awesome-icon icon="shopping-cart" />
      Cart
    </h1>

    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} 
        - {{ $filters.currency(product.price) }} 
        - {{ product.quantity }}
      </li>
    </ul>
    <p>{{ $filters.currency(total) }}</p>

    <button v-if="products.length" @click="checkout">checkout</button>
    <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed : {
    // products(){
    //   return this.$store.getters.cartProducts
    // },

    // total(){
    //   return this.$store.getters.cartTotal
    // },
    ...mapState('cart', {
      checkoutStatus: 'checkoutStatus'
    }),

    ...mapGetters('cart',{
      products: 'cartProducts',
      total: 'cartTotal',
    })
  },
  methods: {
    ...mapActions('cart', ['checkout']),
  },
}
</script>

