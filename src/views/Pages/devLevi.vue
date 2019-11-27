<template>
  <div>
    <h1>This is Levi component</h1>
    <form @submit.prevent="search">
      <b-row>
        <b-col md="4"></b-col>
        <b-col md="4">
          <b-form-input type="text" v-model.trim="searchTerm"></b-form-input>
        </b-col>
        <b-col md="4">
          <input type="submit" value="search" id="search"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4"></b-col>
        <b-col md="4">
          <b-form-radio-group v-model="radio" :options="optciones">
          </b-form-radio-group>
        </b-col>
        <b-col md="4"></b-col>
      </b-row>
    </form>
    <hr />
    <br />
    <button @click="nextPage">Next Page</button>
    <button @click="previousPage">Previous Page</button>
    <table class="table table-striped">
      <tbody>
<tr v-for="book in searchResults.items" :key="book.volumeInfo.identifier">
<td>
<img :src="'http://books.google.com/books/content?id=' + book.id + '&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'" class="search-result--thumbnail">
</td>
<td>
<div class="item-info">
<h3>{{ book.volumeInfo.title }}</h3>
<h4 v-if="book.volumeInfo.authors">Por {{ bookAuthors(book) }}</h4>
<p v-if="book.volumeInfo.publishedDate">
<span>Publicado en </span> {{ book.volumeInfo.publishedDate }}
<span v-if="book.volumeInfo.publisher"> por Ed. {{ book.volumeInfo.publisher }}</span>
</p>
<span v-if="book.volumeInfo.categories"> Categoria: {{ book.volumeInfo.categories }}</span>
</div>
</td>
<div>
  <td><a href=""><img src="@/assets/review.png" alt="" width="150"></a></td>
  </div>
</tr>
</tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      comp: 0,
      radio: '',
      texto: '',
      searchTerm: '',
      searchResults: [],
      startIndex: 0,
      optciones: [
        { value: 'intitle', text: 'Título' },
        { value: 'inauthor', text: 'Autor' },
        { value: 'fecha', text: 'Fecha' },
        { value: 'isbn', text: 'ISBN' }
      ]
    }
  },
  methods: {
    search () {
      this.$http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.radio}:${this.searchTerm}&maxResults=10&startIndex=${this.startIndex}`)
        .then(response => {
          this.searchResults = response.data
        })
        .catch(e => {
          console.log(e)
        })
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
    }
  }
}
</script>
