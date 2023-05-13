<template>
  <div class="register">
    <h1>Sign up !</h1>
    <form class="signup_form">
      <label><b>Name</b></label>
      <input type="text" placeholder="Enter Name" name="name" required>

      <label><b>Surname</b></label>
      <input type="text" placeholder="Enter Surname" name="surname" required>

      <label><b>E-mail address</b></label>
      <input type="text" placeholder="Enter Email" name="email" required>
      <div id="birthday">
      <label ><b>Birthday date</b></label><br>
      <input type="date" name="date" required><br><br>
      </div>
      <label><b>Gender</b></label>
      <div class="radio">
      <input type="radio" id="woman" name="gender" value="Woman">
      <label for="woman">Woman</label><br>
      <input type="radio" id="man" name="gender" value="Man">
      <label for="man">Man</label><br>
      <input type="radio" id="other" name="gender" value="Other">
      <label for="other">Other</label>
      </div>

      <button id="signupButton" type="submit">Sign up</button>
    </form>
  </div>
</template>

<style>

.register{
  display : flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin-top : 10px;
}


.signup_form{
  border-radius : 10px;
  display : flex;
  flex-direction: column;
  text-align: left;
  row-gap : 5px;
  width : 470px;
  background-color: #cccccc;
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
