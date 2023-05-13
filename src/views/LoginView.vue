<template>
  <div class="login">
    <h1>Log in</h1>
    <form class="login_form">
      <label><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="username" required>

      <label><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="password" required>

      <button type="submit">Login</button>
    </form>
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
