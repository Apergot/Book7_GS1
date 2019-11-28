<template>
  <div>
    <b-jumbotron class="jumbotron">
    </b-jumbotron>
    <b-container v-if="gotResults">
    <div>
        <h1>The Newest</h1>
        <app-book-result :books="freshBooks"></app-book-result>
    </div>
      <div>
        <h1>Juvenile fiction</h1>
        <app-book-result :books="juvenileFictionBooks"></app-book-result>
      </div>
    </b-container>
  </div>
</template>

<script>
import BookGroup from '../Components/BookResultsGroup'

export default {
  data () {
    return {
      freshBooks: [],
      juvenileFictionBooks: [],
      gotResults: false
    }
  },
  methods: {
    getFreshBooksPresentation: function () {
      this.$http.get(`https://www.googleapis.com/books/v1/volumes?q=-term&orderBy=newest&maxResults=20&key=${process.env.VUE_APP_GOOGLE_BOOKS_API_KEY}`)
        .then((data) => {
          this.freshBooks = data.body.items
        })
        .catch(err => {
          console.log(err)
        })
    },
    getJuvenileFictionBooks: function () {
      this.$http.get(`https://www.googleapis.com/books/v1/volumes?q=subject:"JUVENILE+FICTION"&maxResults=20&key=${process.env.VUE_APP_GOOGLE_BOOKS_API_KEY}`)
        .then((data) => {
          this.juvenileFictionBooks = data.body.items
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  async created () {
    this.getFreshBooksPresentation()
    this.getJuvenileFictionBooks()
    this.gotResults = true
  },
  components: {
    appBookResult: BookGroup
  }
}
</script>
<style scope>
  .jumbotron{
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1)
    ),url('./../../assets/bibliotheque.jpg');
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    height: 20rem;
  }
</style>
