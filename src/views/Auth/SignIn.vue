<template>
  <b-container id="signin">
    <div class="signin-form">
      <b-form @submit.prevent="onSubmit">
        <h4 class="logo">Sign In</h4>
        <b-form-group class="input">
          <label for="email">Mail</label>
          <b-form-input
                  type="email"
                  id="email"
                  v-model="email"
                  required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <label for="password">Password</label>
          <b-form-input
                  type="password"
                  id="password"
                  v-model="password"
                  required
          ></b-form-input>
        </b-form-group>
        <div>
          <b-button class="submit" type="submit">Submit</b-button>
        </div>
      </b-form>
    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$store.dispatch('login', { email: formData.email, password: formData.password })
    }
  }
}
</script>

<style scoped>
  @media(min-width: 768px) {
    .logo{
      margin: 5%;
      text-align: center;
    }
    .submit{
      width: 33%;
      margin-left: 33%;
    }

    .signin-form{
      margin-top: 2%;
      width: 50%;
      margin-left: 25%;
      box-sizing: border-box;
      box-shadow: 5px 10px 18px #888888;
      border-radius: 5px;
      border: 1px solid #c0c2c4;
      padding: 10px;
    }
  }

   @media(min-width: 992px) {
    .logo{
      margin: 5%;
      text-align: center;
    }
    .submit{
      width: 33%;
      margin-left: 33%;
    }

    .signin-form{
      margin-top: 2%;
      width: 40%;
      margin-left: 30%;
      box-sizing: border-box;
      box-shadow: 5px 10px 18px #888888;
      border-radius: 5px;
      border: 1px solid #c0c2c4;
      padding: 10px;
    }
  }
  @media(max-width: 768px) {
    .logo{
      margin: 5%;
      text-align: center;
    }
    .submit{
      width: 80%;
      margin: 0 10%;
    }
  }
</style>
