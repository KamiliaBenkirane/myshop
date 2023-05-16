<template>
  <nav>
    <router-link to="/home">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/basket">
      <div class="basket">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        {{ nbItemsCart }}| ${{ priceCart }}
      </div>

    </router-link>
    <div><button @click="logout">Log out</button></div>
  </nav>
  <div class="basket" style="margin-top : 100px;">
    <table class="table">
      <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index"> {{column}}</th>
      </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  </div>
  </template>


<script>
// @ is an alias to /src
import {useSessionStore} from "@/stores/session";
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'BasketView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld
  },
  data() {
    return {
      columns : ['Item', 'Price', 'Quantity', 'Total'],
      nbItemsCart : this.store.getNbItems(),
      priceCart : this.store.getPrice(),
    }
  },
  setup () {
    const store = useSessionStore()
    return{store}
  },
  created() {
    this.checkConnection()
  },
  methods : {
    retrieveItems() {HelloWorld.methods.retrieveItems()},
    //discountedPrice(price, discount){HelloWorld.methods.discountedPrice()},
    logout() {
      this.store.$reset()
      this.$router.push('/')
    },
    checkConnection() {
      if (this.store.getToken() === '') {
        this.$router.push('/')
      } else {
        this.retrieveItems()
      }
    },
  }
}
</script>