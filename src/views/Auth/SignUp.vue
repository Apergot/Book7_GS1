<template>
    <div id="signup">
    <div class="signup-form">
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          label="Your email address"
          description="We'll never share your email with anyone else"
        >
          <b-form-input
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
                  type="password"
                  id="confirm-password"
                  v-model="confirmPassword"
                  placeholder="Enter your password again"
                  required
          ></b-form-input>
        </b-form-group>

        <b-form inline>
          <label class="sr-only" for="country">Country</label>
          <b-form-select id="country" v-model="country">
            <option value="SPN">Spain</option>
            <option value="UK">United Kingdom</option>
            <option value="USA">United States</option>
            <option value="GER">Germany</option>
            <template v-slot:first>
            <option :value="null">Choose...</option>
            </template>
          </b-form-select>
          <label class="sr-only" for="age">Your Age</label>
          <b-input
                  type="number"
                  id="age"
                  v-model.number="age"
          ></b-input>
        </b-form>

        <b-form-checkbox
          id="terms"
          v-model="terms"
        >Accept Terms of Use</b-form-checkbox>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      age: null,
      password: '',
      confirmPassword: '',
      country: 'usa',
      hobbyInputs: [],
      terms: false
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
</style>
