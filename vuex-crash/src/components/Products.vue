<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.title }} - {{ product.price }}</li>
    </ul>
  </div>
</template>

<script>
import shop from '@/api/shop'
import store from '@/store/index'

export default {
  data(){
    return {
  
    }
  },
  computed: {
    products(){
      // return store.state.products
      return store.getters.availableProducts
    }
  },
  created(){
    shop.getProducts(products => {
      // this.products = products
      store.commit('setProducts', products)
    })
  }
}
</script>