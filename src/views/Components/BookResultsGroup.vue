<template>
    <carousel class="slideshow">
        <slide v-for="book in books" :key="book.id">
            <img @click="pushBookToRouter(book)"
                v-if="book.volumeInfo.imageLinks !== undefined"
                :src=book.volumeInfo.imageLinks.thumbnail img-alt="Card image"
            class="slideshow-item">
        </slide>
    </carousel>
</template>
<script>
export default {
  props: ['books'],
  methods: {
    pushBookToRouter: function (book) {
      this.$router.push({
        name: 'bookpage',
        params: {
          book
        }
      })
    }
  }
}
</script>
<style>
    .VueCarousel-pagination{
        margin-top: 0!important;
        display: none !important;
    }

    .VueCarousel-dot--active{
        color: #c98261 !important;
    }
    .slideshow-item{
        max-width: 10rem;
        min-height: 15rem;
        max-height: 15rem;
        margin-right: 15px !important;
        border-radius: 5px;
    }/*
    .VueCarousel-inner{
        flex-basis: auto !important;
    }*/
</style>
