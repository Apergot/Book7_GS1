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
        <router-link tag="b-nav-item" to="/signin" class="link">Sign In</router-link>
        <router-link tag="b-nav-item" to="/signup" class="link">Sign Up</router-link>
        <router-link tag="b-nav-item" to="/carlos" class="link">Carlos</router-link>
        <router-link tag="b-nav-item" to="/hector" class="link">Héctor</router-link>
        <router-link tag="b-nav-item" to="/nestor" class="link">Néstor</router-link>
        <router-link tag="b-nav-item" to="/levi" class="link">Levi</router-link>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

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
</style>
