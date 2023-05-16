<template>
  <nav>
    <router-link to="/">Log in</router-link>
    <router-link to="/register">Sign up</router-link>
  </nav>
  <div class="flex">
  <div class="register">
    <h1>Sign up !</h1>
    <div class="signup_form">
      <label><b>Username</b></label>
      <input type="text" v-model="username" placeholder="Enter Username" name="username" required>

      <label><b>E-mail address</b></label>
      <input type="email" v-model="email" placeholder="Enter Email" name="email" required>

      <label><b>Password</b></label>
      <input type="password" v-model="password" placeholder="Enter Password" name="password" required>


      <button id="signupButton" @click="register">Sign up</button>
    </div>
  </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "RegisterView",
  data : function(){
    return {
      username : '',
      email : '',
      password : ''
    }
  },
  methods : {
    register(){
      console.log("logges")
      let NewUser = {
        username : this.username,
        email : this.email,
        password : this.password,
        roles : ['user']
      }
      console.log(NewUser)
      axios.post("http://localhost:5000/api/auth/signup", NewUser)
          .then(response =>{
            if (response.status  === 200){
              this.$router.push('/')
            }

          }),
          error => {
            console.log(error)
          }

    }
  }

}
</script>
<style>

.register{
  display : flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin-top : 120px;
}


.signup_form{
  border-radius : 10px;
  display : flex;
  flex-direction: column;
  text-align: left;
  row-gap : 5px;
  width : 470px;
  background-color: #F4F7F9;
  padding : 40px 50px;
  box-shadow: 10px 5px 5px rgba(10,10,10,0.5);
}

#birthday{
  margin : 10px 0;
}


#signupButton{
  margin-top : 20px;
  padding : 20px 60px;
  font-size : 14px;
}


</style>

