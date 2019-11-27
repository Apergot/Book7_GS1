<template>
  <div>
  <b-navbar toggleable="lg" class="navbar">
    <router-link to="/" tag="b-navbar-brand">
      <img src="../../assets/logo.png" alt="" style="width:100px; height:40px;">
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <router-link tag="b-nav-item" to="/levi" class="link">Search</router-link>
        <div v-if="this.$route.path != '/signup'">
          <b-button @click="showModal" id="show-btn">Sign in</b-button>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <b-modal
          ref="signInModal"
          hide-footer
          hide-header
          centered
          hide-backdrop
          title="Sign into your account"
          @show="resetModal"
          @hidden="resetModal"
  >
    <div class="signin-form">
      <b-form @submit.prevent="onSubmitSignIn">
        <h2 class="title">Sign in</h2>
        <b-form-group class="input">
          <p v-if="!correctLogIn" class="incorrect"> Incorrect email/password, try again</p>
          <b-form-input
                  type="email"
                  id="email"
                  v-model="email"
                  placeholder="Email"
                  required
          ></b-form-input>
        </b-form-group>
        <b-form-group class="input">
          <b-form-input
                  type="password"
                  id="password"
                  v-model="password"
                  placeholder="Password"
                  required
          ></b-form-input>
        </b-form-group>
        <div>
          <b-button class="submit" type="submit">Submit</b-button>
        </div>
        <div @click="hideModal">
          <router-link tag="a" to="/signup" class="link">
          <p class="signinLink">New user? Sign up to create an account!</p>
        </router-link>
        </div>
      </b-form>
    </div>
  </b-modal>
</div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      correctLogIn: true
    }
  },
  methods: {
    onSubmitSignIn () {
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$store.dispatch('login', { email: formData.email, password: formData.password })
        .then(response => {
          if (response.status === 200) {
            this.correctLogIn = true
            this.$refs['signInModal'].hide()
          }
        })
        .catch(reject => {
          this.resetModal()
          this.correctLogIn = false
        })
    },
    resetModal () {
      this.email = ''
      this.password = ''
      this.correctLogIn = true
    },
    showModal () {
      this.$refs['signInModal'].toggle('#toggle-btn')
    },
    hideModal () {
      this.$refs['signInModal'].hide()
    }
  }
}
</script>

<style scoped>
  .logo{
    width: 5%;
    height: 5%;
  }

  .navbar{
    background-color: #c98261;
  }

  .link{
    font-weight: 700;
  }

  .submit{
    width: 33%;
    margin: 5% 33%;
  }

  .signinLink{
    text-align: center;
  }

  .incorrect{
    color: red;
  }

  .input{
    width: 75%;
    margin-left: 12.5%;
  }

  .title{
    margin-bottom: 5%;
    text-align: center;
  }
</style>
