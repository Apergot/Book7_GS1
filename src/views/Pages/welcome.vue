<template>
  <b-container v-if="gotResults">
      <app-book-result :books="books"></app-book-result>
  </b-container>
</template>

<script>
import BookGroup from '../Components/BookResultsGroup'

export default {
  data () {
    return {
      books: [],
      gotResults: false
    }
  },
  methods: {
    getInitialPresentation: async function () {
      await this.$http.get(`https://www.googleapis.com/books/v1/volumes?q=-term&orderBy=newest&key=${process.env.VUE_APP_GOOGLE_BOOKS_API_KEY}`)
        .then((data) => {
          this.books = data.body.items
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  async created () {
    await this.getInitialPresentation()
    this.gotResults = true
    console.log(this.books)
  },
  components: {
    appBookResult: BookGroup
  }
}
</script>
