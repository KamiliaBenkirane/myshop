<template>
  <nav>
    <router-link to="/">Log in</router-link>
    <router-link to="/register">Sign up</router-link>
  </nav>
  <div class="flex">
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
  </div>
</template>

<style>
h1{
  color : white;
}
html{
  background: rgb(87,0,115);
  background: linear-gradient(90deg, rgba(87,0,115,1) 4%, rgba(86,43,152,1) 47%, rgba(38,46,127,1) 80%, rgba(9,48,112,1) 100%);
}

input[type=text], input[type=password], input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.login{
  margin-top : 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login_form{
  border-radius : 15px;
  width : 470px;
  background-color: #F4F7F9;
  padding : 40px 50px;
  box-shadow: 10px 5px 5px rgba(10,10,10,0.5);
}

button{
  background-color: #262e7f;
  color : white;
  padding : 10px 20px;
  border : none;
  cursor: pointer;
  border-radius : 5px;
}

button:hover{
  background-color: black;
}

.flex{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      //console.log("logges")
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