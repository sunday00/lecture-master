<template>
  <div>
    <h1>Products</h1>
    
    <img src="https://i.imgur.com/TfCj0e7.gif" width="400" v-if="loading" />
    
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} 
        - {{ $filters.currency(product.price) }} 
        - {{ product.inventory }}

        <button @click="addProductToCart(product)">
          <font-awesome-icon icon="cart-plus" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      loading: false
    }
  },
  methods:{
    addProductToCart(product){
      this.$store.dispatch('addProductToCart', product)
    },
  },
  computed: {
    products(){
      // return store.state.products
      return this.$store.getters.availableProducts
    }
  },
  created(){
    this.loading = true
    // store.dispatch('fetchProducts', 'toys')
    this.$store.dispatch('fetchProducts')
      .then(() => {
        this.loading = false
      })
  }
}
</script>