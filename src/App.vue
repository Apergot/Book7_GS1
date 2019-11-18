<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './views/Components/Header'

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>

</style>
