<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './views/Components/Header'
import Footer from './views/Components/Footer'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>

    body {
      height: 100%;
      min-height: 100%;
      padding: 0;
      margin: 0;
    }

    body::after {
      content: '';
      display: block;
      height: 100%;
    }

    .slide-enter-active{
        animation: slide-in 350ms ease-out forwards;
    }

    .slide-leave-active{
        animation: slide-out 350ms ease-out forwards;
    }

    @keyframes slide-in {
        from{
            transform: translateY(-30px);
            opacity: 0;
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from{
            transform: translateY(0);
            opacity: 1;
        }
        to{
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
