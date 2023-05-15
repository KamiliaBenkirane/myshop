<template>
  <nav>
    <router-link to="/">Log in</router-link>
    <router-link to="/register">Sign up</router-link>
  </nav>
  <div class="login">
    <h1>Log in</h1>
    <div class="login_form">
      <label><b>Username</b></label>
      <input type="text" v-model="username" placeholder="Enter Username" name="username" required>

      <label><b>Password</b></label>
      <input type="password" v-model="password" placeholder="Enter Password" name="password" required>

      <button @click="login()">Login</button>
    </div>
  </div>
</template>

<style>
h1{
  color : white;
}
html{
  background-color: #2c3e50;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.login{
  margin-top : 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login_form{
  border-radius : 10px;
  width : 470px;
  background-color: #cccccc;
  padding : 40px 50px;
  box-shadow: 10px 5px 5px rgba(10,10,10,0.5);
}

button{
  background-color: #2c3e50;
  color : white;
  padding : 10px 20px;
  border : none;
  cursor: pointer;
  border-radius : 5px;
  margin-top : 8px;
}

button:hover{
  background-color: black;
}

</style>

<script>
import axios from "axios";
import { useSessionStore} from "@/stores/session";

export default {
  name: "LoginView",
  setup () {
    const store = useSessionStore()
    return{store}
  },
  data : function(){
    return {
      username : '',
      password : ''
    }
  },
  methods : {
    login(){
      console.log("logges")
      let User = {
        username : this.username,
        password : this.password
      }
      axios.post("http://localhost:5000/api/auth/signin", User)
      .then(response =>{
        console.log(response)
        if (response.status  === 200){
          this.store.setToken(response.data.accessToken)
          this.$router.push('/home')
        }

      }),
          error => {
        console.log(error)
          }
    },
    logout(){
      this.store.$reset()
    },
    checkConnection(){
      if (this.store.getToken() !== ''){
        this.$router.push('/home')
      }
      else{
        this.store.$reset()
      }
    }
    },
    created() {
    this.checkConnection()
  }


}
</script>