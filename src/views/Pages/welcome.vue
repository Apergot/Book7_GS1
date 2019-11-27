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
        <app-book-result :books="fictionBooks"></app-book-result>
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
      fictionBooks: [],
      gotResults: false
    }
  },
  methods: {
    getInitialPresentation: function () {
      this.$http.get(`https://www.googleapis.com/books/v1/volumes?q=-term&orderBy=newest&maxResults=20&key=${process.env.VUE_APP_GOOGLE_BOOKS_API_KEY}`)
        .then((data) => {
          this.freshBooks = data.body.items
        })
        .catch(err => {
          console.log(err)
        })
      this.$http.get(`https://www.googleapis.com/books/v1/volumes?q=subject:"JUVENILE+FICTION"&maxResults=20&key=${process.env.VUE_APP_GOOGLE_BOOKS_API_KEY}`)
        .then((data) => {
          this.fictionBooks = data.body.items
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  async created () {
    this.getInitialPresentation()
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
