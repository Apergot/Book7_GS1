<template>
  <div v-if="gotResults">
    <ul v-for="(book, index) in books" :key="book.id">
        <li v-if="book.volumeInfo.imageLinks !== undefined">
           <img :src=book.volumeInfo.imageLinks.thumbnail :alt=book.id >
          {{index + book.volumeInfo.imageLinks.thumbnail}}
        </li>
    </ul>
  </div>
</template>

<script>
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
  }
}
</script>
