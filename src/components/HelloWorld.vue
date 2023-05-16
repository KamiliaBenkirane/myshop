<template>
  <nav>
    <router-link to="/home">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/basket">
      <div class="basket">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        {{ nbItemsCart }} | ${{ priceCart }}

      </div>

    </router-link>
    <!--<div><input id="search" v-model="input" type="text" placeholder="Search.."></div>-->
    <div><button @click="logout">Log out</button></div>
  </nav>
  <div class="home">
    <div class="allItems">
      <div class="item" v-for="item in items" :key="item.name">
        <p v-if="item.account>0" class="discount">{{ item.account }}% off!</p>
        <p v-else class="discount">No discount</p>
        <img :src=" require(`@/assets/${item.name}.jpg`)" >
        <div style="font-weight: bold; font-size : 20px; padding-top : 10px">{{ item.name }}</div>
        <div>Rating : <span v-for="i in item.rating" :key="i"><font-awesome-icon icon="fa-solid fa-star" style="color: #fab700" /></span>
          <span v-for="i in (5-item.rating)" :key="i"><font-awesome-icon icon="fa-regular fa-star" style="color: #fab700" /></span></div>
        <div style="display: flex; justify-content: center; gap : 5px"><p v-bind:style="[item.account>0 ? {'text-decoration-line' : 'line-through', 'color': 'grey'} : {'text-decoration': 'none', 'color': 'black'}] ">{{ item.price }}$</p>
          <p v-show="item.account>0">{{ discountedPrice(item.price, item.account) }}$</p>
        </div>
        <button @click= "addToBasket(item.id)">Add to Cart <font-awesome-icon icon="fa-solid fa-cart-plus" /></button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {useSessionStore} from "@/stores/session";
import axios from "axios";
import { ref } from "vue";

export default {
  name: 'HomeView',
  data() {
    return {
      items : [],
      nbItemsCart : this.store.getNbItems(),
      priceCart : this.store.getPrice(),
      item : null,
      basket : this.store.getBasket(),
      input : ref("")
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
              this.items = response.data;
              //this.dataItems = response.data
              //console.log(this.dataItems[0].price)
            }

          }),
          error => {
            console.log(error)
          }
    },
    /*filteredItems() {
      return items.filter((item) =>
          item.toLowerCase().includes(input.value.toLowerCase())
      );
    },*/
    discountedPrice(price, discount){
      if (discount>0){
        return price-((price*discount)/100)
      }
      else{
        return price
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
    addToBasket(id) {
      axios.post("http://localhost:5000/api/items/one", {'id': id }, { headers: {'Content-Type': 'application/json'}} )
          .then(response => {
            if (response.status === 200) {
              this.item = response.data;
            }
          }),
          error => {
            console.log(error)
          }
      if (this.item) {
        this.priceCart = this.store.incrementPrice(this.discountedPrice(this.item.price, this.item.account))
        //this.store.getBasket().unshift(this.item)
        //console.log(this.basket2)

      }
        /*this.priceCart += this.discountedPrice(this.item.price, this.item.account);
      this.nbItemsCart+=1;*/
      this.nbItemsCart = this.store.incrementNbItems()
      //console.log(this.basket.length);
      //console.log(`Occurrences of ${this.item.name}: ${count}`);
    }

  }

}

</script>




<style>
.logo{
  font-size : 10px;
}

.home{
  margin-top : 100px;
}

.basket{
  padding : 10px;
  border : solid 1px white;
  border-radius: 10px;
}

.allItems{
  margin : 40px;
  display : flex;
  gap : 30px;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item > img{
  height : 250px;
  width : auto;
}

.item {
  display : flex;
  flex-direction: column;
  background-color: #F4F7F9;
  color : black;
  padding : 10px;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgba(10,10,10,0.5);
}

.discount{
  text-align: left;
  color : brown;
  font-weight: bold;
}
</style>
