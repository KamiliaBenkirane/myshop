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
  <div>
    <div class="home">
      <div class="allProducts">
        <div class="itemProducts" v-for="item in items" :key="item.id">
          <div>

            <img class="imgProducts" :src=" require(`@/assets/${item.name}.jpg`)" >

          </div>

          <div class="info">

          <div style="font-weight: bold; font-size : 20px; padding-top : 10px">{{ item.name }}</div><br>

          <div>Rating : <span v-for="i in item.rating" :key="i"><font-awesome-icon icon="fa-solid fa-star" style="color: #fab700" /></span>
            <span v-for="i in (5-item.rating)" :key="i"><font-awesome-icon icon="fa-regular fa-star" style="color: #fab700"/></span></div>
          <div style="display: flex; gap : 5px"><p v-bind:style="[item.account>0 ? {'text-decoration-line' : 'line-through', 'color': 'grey'} : {'text-decoration': 'none', 'color': 'black'}] ">{{ item.price }}$</p>
            <p v-show="item.account>0">{{ discountedPrice(item.price, item.account) }}$</p>
          </div>
            Description : {{item.description}}
            <p v-if="item.account>0" class="discount">{{ item.account }}% off!</p>
            <p v-else class="discount no">No discount</p>
          </div>

          <button id="productsButton" @click= "addToBasket(item.id)">Add to Cart <font-awesome-icon icon="fa-solid fa-cart-plus" /></button>

        </div>
      </div>
    </div></div>
</template>

<script>
// @ is an alias to /src
import {useSessionStore} from "@/stores/session";
import HelloWorld from '@/components/HelloWorld.vue';
import axios from "axios";

export default {
  name: 'ProductsView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld
  },
  data() {
    return {
      items : [],
      columns : ['Item', 'Price', 'Quantity', 'Total'],
      nbItemsCart : this.store.getNbItems(),
      priceCart : this.store.getPrice(),
      basket : []
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
    retrieveItems() {
      axios.get("http://localhost:5000/api/items/all")
          .then(response => {
            if (response.status === 200) {
              console.log(response.data)
              console.log(response.data[0].price)
              this.items = response.data;
              //this.dataItems = response.data
              //console.log(this.dataItems[0].price)
            }

          }),
          error => {
            console.log(error)
          }
    },
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
    discountedPrice(price, discount){
      if (discount>0){
        return price-((price*discount)/100)
      }
      else{
        return price
      }
    },
    addToBasket(id) {
      axios.post("http://localhost:5000/api/items/one", {'id': id }, { headers: {'Content-Type': 'application/json'}} )
          .then(response => {
            if (response.status === 200) {
              console.log(response.data)
              this.item = response.data;
            }
          }),
          error => {
            console.log(error)
          }
      if (this.item) {
        this.priceCart = this.store.incrementPrice(this.discountedPrice(this.item.price, this.item.account))
        console.log(this.store.getPrice())
      }

      this.nbItemsCart = this.store.incrementNbItems()
    },
  }
}
</script>

<style>
.logo{
  font-size : 10px;
}

.basket{
  padding : 10px;
  border : solid 1px white;
  border-radius: 10px;
}

.allProducts{
  margin : 30px;
  display : flex;
  flex-direction: column;
  gap : 30px;
  flex-wrap: wrap;
  padding : 0 20px;
}

.imgProducts{
  height : auto;
  width : 225px;
}

.itemProducts {
  display : flex;
  flex-direction: row;
  gap : 30px;
  text-align : left;
  background-color: #F4F7F9;
  color : black;
  padding : 10px 20px;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgba(10,10,10,0.5);
}

.discount{
  text-align: left;
  color : brown;
  font-weight: bold;
}



.info {
  text-align : left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
 #productsButton{
   margin-left : auto;
 }

</style>