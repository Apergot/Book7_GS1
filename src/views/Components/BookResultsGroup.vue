<template>
    <carousel class="slideshow" :navigationEnabled="true" :mouseDrag="false" :perPageCustom="[[240, 2],[480, 3], [768, 5]]">
        <slide v-for="book in books" :key="book.id">
            <img @slideclick="handleSlideClick"
                @click="pushBookToRouter(book)"
                v-if="book.volumeInfo.imageLinks !== undefined"
                :src=book.volumeInfo.imageLinks.thumbnail img-alt="Card image"
            class="slideshow-item bookimg">
            <img @slideclick="handleSlideClick"
                @click="pushBookToRouter(book)"
                v-else
                src="./../../assets/no-img.jpg" img-alt="No image"
            class="slideshow-item bookimg">
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
    },
    handleSlideClick: (dataset) => {
      console.log(dataset.index, dataset.name)
    }
  }
}
</script>
<style>
    .slideshow {
      margin: 3% 2%;
      padding: 5px;
    }

    .VueCarousel-pagination{
        margin-top: 0!important;
        display: none !important;
    }

    .VueCarousel-dot--active{
        color: #c98261 !important;
    }
    .slideshow-item{
        width: 128px;
        border-top-width: 1px;
        border-right-width: 1px;
        border-bottom-width: 1px;
        border-left-width: 1px;
        border-top-style: solid;
        border-bottom-style: solid;
        border-left-style: solid;
        border-right-style: solid;
        padding: 1px;
        min-height: 12rem;
        max-height: 12rem;
    }

    .bookimg {
      margin-left: 15%;
    }
</style>
