<template>
    <b-container id="signup" class="signup">
    <div class="signup-form">
      <b-form @submit.prevent="onSubmit">
        <img src="../../assets/logo.png" alt="logo" class="logo">
        <b-form-group
          label="Your email address"
          description="We'll never share your email with anyone else"
        >
          <b-form-input
                  class="input"
                  type="email"
                  id="email"
                  required
                  v-model="email"
                  placeholder="Enter mail"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Password"
          description="You'll need it later to log in"
        >
          <b-form-input
                  class="input"
                  type="password"
                  id="password"
                  v-model="password"
                  placeholder="Enter password"
                  required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Confirm password"
          description="We need to be sure you got it right!"
        >
          <b-form-input
                  class="input"
                  type="password"
                  id="confirm-password"
                  v-model="confirmPassword"
                  placeholder="Enter your password again"
                  required
          ></b-form-input>
        </b-form-group>

        <b-form inline>
          <b-form-select
                  class="input-inline"
                  id="country"
                  v-model="country"
                  :options="countries">
          </b-form-select>
          <b-input
                  placeholder="Your age"
                  class="input-inline"
                  type="number"
                  id="age"
                  v-model.number="age"
          ></b-input>
        </b-form>

        <b-form-checkbox
          class="checkbox"
          id="terms"
          v-model="terms"
        >Accept Terms of Use</b-form-checkbox>
        <div>
          <b-button class="submit" type="submit" color="primary">Submit</b-button>
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
      age: null,
      password: '',
      confirmPassword: '',
      country: null,
      hobbyInputs: [],
      terms: false,
      countries: [{ text: 'Select your country', value: null }, 'United States', 'United Kingdom', 'Spain', 'Germany', 'France']
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        country: this.country,
        hobbies: this.hobbyInputs.map(hobby => hobby.value),
        terms: this.terms
      }
      console.log(formData)
      this.$store.dispatch('signup', formData)
    }
  }
}
</script>

<style scoped>
  @media(min-width: 768px) {
    .logo{
      width: 35%;
      height: 5%;
      margin-left: 33%;
    }
    .signup-form{
      margin-top: 2%;
      width: 40%;
      margin-left: 30%;
      box-sizing: border-box;
      box-shadow: 5px 10px 18px #888888;
      border-radius: 5px;
      border: 1px solid #c0c2c4;
      padding: 10px;
    }
    .submit{
      width: 33%;
      margin-left: 33%;
    }
    .input{
      width: 100%;
    }
    .input-inline{
      width: 46%;
      margin: 0 2%;
    }
    .checkbox{
      margin: 5% 0;
    }
  }

  @media(max-width: 768px) {

    .logo{
      width: 35%;
      height: 5%;
      margin-left: 33%
    }
    .input-inline{
      margin-top: 5%;
      margin-right: 2%;
    }
    .checkbox{
    margin: 5% 0;
    }
    .submit{
      width: 80%;
      margin: 0 10%;
    }
  }
</style>
