<template>
  <nav>
    <router-link to="/home">Home</router-link>
    <router-link to="/basket">Basket</router-link>
    <router-link to="/">Log in</router-link>
    <router-link to="/register">Sign up</router-link>
    <div><button @click="logout">Log out</button></div>
  </nav>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {useSessionStore} from "@/stores/session";
import axios from "axios";

export default {
  name: 'HomeView',
  setup () {
    const store = useSessionStore()
    return{store}
  },
  components: {
    HelloWorld
  },
  methods : {
    retrieveItems() {
      axios.get("http://localhost:5000/api/items/all")
          .then(response => {
            if (response.status === 200) {
              console.log(response.data)
              console.log(response.data[0].price)
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
    }
  },

  created() {
    this.checkConnection()
  }

}
</script>
