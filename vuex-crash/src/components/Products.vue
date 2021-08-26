<template>
  <div>
    <h1>Products</h1>
    
    <img src="https://i.imgur.com/TfCj0e7.gif" width="400" v-if="loading" />
    
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} 
        - {{ $filters.currency(product.price) }} 
        - {{ product.inventory }}

        <button @click="addProductToCart(product)" :disabled="!isProductInStock(product)">
          <font-awesome-icon icon="cart-plus" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return {
      loading: false
    }
  },
  methods:{
    // addProductToCart(product){
    //   this.$store.dispatch('addProductToCart', product)
    // },
    ...mapActions({
      addProductToCart: 'addProductToCart',
      fetchProducts: 'fetchProducts',
    })
  },
  computed: {
    ...mapState({
      // products: 'products',
      products: state => state.products.items,
      firstProduct : state => state.products[0],
    }),

    ...mapGetters({
      isProductInStock: 'isProductInStock'
    })
  },
  // {
  //   products(){
  //     // return store.state.products
  //     // return this.$store.getters.availableProducts
  //     return this.$store.state.products
  //   },

  //   isProductInStock(){
  //     return this.$store.getters.isProductInStock
  //   },
  // },
  created(){
    this.loading = true
    // store.dispatch('fetchProducts', 'toys')
    // this.$store.dispatch('fetchProducts')
    this.fetchProducts()
      .then(() => {
        this.loading = false
      })
  }
}
</script>

<style lang="scss">
  button[disabled]{
    background-color: #eee;
  }
</style>