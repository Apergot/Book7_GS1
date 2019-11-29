<template>
  <b-container class="container">
    <form @submit.prevent="search">
      <b-row>
        <b-col md="4"></b-col>
        <b-col md="4">
          <b-form-input type="text" v-model.trim="searchTerm"></b-form-input>
        </b-col>
        <b-col md="4">
          <b-button variant="outline-primary" type="submit" value="search" id="search" @click="show">Search</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4"></b-col>
        <b-col md="4">
          <b-form-radio-group v-model="radio" :options="optciones"></b-form-radio-group>
        </b-col>
        <b-col md="4"></b-col>
      </b-row>
    </form>
    <hr />
    <br />
    <div v-if="showbuttons">
    <b-button pill variant="outline-primary" class="pageButton" @click="previousPage">Previous Page</b-button>
    <b-button pill variant="outline-primary" class="pageButton" @click="nextPage">Next Page</b-button>
    </div>
    <table class="table table-striped">
      <tbody>
        <tr v-for="book in searchResults" :key="book.id" @click="pushBookToRouter(book)" class="search-result">
          <td v-if="book.volumeInfo !== undefined">
            <img
              :src="'http://books.google.com/books/content?id=' + book.id + '&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'"
              class="search-result--thumbnail"
            />
          </td>
          <td>
            <div>
              <h3>{{ book.volumeInfo.title }}</h3>
              <h4 v-if="book.volumeInfo.authors">Por {{ bookAuthors(book) }}</h4>
              <p v-if="book.volumeInfo.publishedDate">
                <span>Publicado en</span>
                {{ book.volumeInfo.publishedDate }}
                <span
                  v-if="book.volumeInfo.publisher"
                >por Ed. {{ book.volumeInfo.publisher }}</span>
              </p>
              <span v-if="book.volumeInfo.categories">Categoria: {{ book.volumeInfo.categories }} </span>
            </div>
          </td>
          <div>
          </div>
        </tr>
      </tbody>
    </table>
    <div v-if="showbuttons">
    <b-button class="pageButton" pill variant="outline-primary" @click="previousPage">Previous Page</b-button>
    <b-button class="pageButton" pill variant="outline-primary" @click="nextPage">Next Page</b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      showbuttons: false,
      radio: '',
      texto: '',
      searchTerm: '',
      searchResults: [],
      comp: 0,
      startIndex: 0,
      seen: false,
      optciones: [
        { value: 'intitle', text: 'Título' },
        { value: 'inauthor', text: 'Autor' },
        { value: 'subject', text: 'Categoría' },
        { value: 'isbn', text: 'ISBN' }
      ]
    }
  },
  methods: {
    search () {
      this.$http
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${this.radio}:${this.searchTerm}&maxResults=10&startIndex=${this.startIndex}`)
        .then(response => {
          this.searchResults = response.data.items
          this.showbuttons = true
        })
        .catch(e => {
          console.log(e)
        })
    },
    bookAuthors (book) {
      let authors = book.volumeInfo.authors
      if (authors.length < 3) {
        authors = authors.join(' and ')
      } else if (authors.length > 2) {
        let lastAuthor = ' and ' + authors.slice(-1)
        authors.pop()
        authors = authors.join(', ')
        authors += lastAuthor
      }
      return authors
    },
    nextPage () {
      this.comp = this.startIndex
      if ((this.comp += 10) < 100) {
        this.startIndex += 10
        this.search()
        console.log(this.startIndex)
      }
      this.comp = 0
    },
    previousPage () {
      this.comp = this.startIndex
      if ((this.comp -= 10) >= 0) {
        this.startIndex -= 10
        this.search()
        console.log(this.startIndex)
      }
      this.comp = 0
    },
    show () {
      if (!this.seen) {
        this.seen = !this.seen
      }
    },
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
<style scope>

  .container {
    margin-top: 3%;
  }

  .pageButton {
    margin: 1rem;
    padding: 1rem;
    text-align: center;
    margin-right: 10px;
  }
  .search-result {
    cursor: pointer;
  }

  .review-icon {
    size: 10%;
  }
</style>
