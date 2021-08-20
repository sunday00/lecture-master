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

    <button v-if="products.length" @click="$store.dispatch('checkout')">checkout</button>
    <p v-if="$store.state.checkoutStatus">{{ $store.state.checkoutStatus }}</p>
  </div>
</template>

<script>
export default {
  computed : {
    products(){
      return this.$store.getters.cartProducts
    },

    total(){
      return this.$store.getters.cartTotal
    },
  }
}
</script>

