<template>
    <div>
        <b-container :data="book" class="bookrescont">
            <table id="summary_content_table" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td id="bookinfo">
                <h1 class="booktitle"><span class="fn"><span dir="ltr">{{ book.volumeInfo.title }}</span></span><span class="subtitle"></span></h1>
                <div class="bookcover"><img class="thumbnail" :src="book.volumeInfo.imageLinks.thumbnail" alt="Front Cover" title="Front Cover" width="128" border="1" id="summary-frontcover"></div>
                <div class="bookinfo_sectionwrap">
                    <div v-for="author in book.volumeInfo.authors" :key="author"><span dir="ltr">{{author}}</span></div>
                    <div><span v-if="book.volumeInfo.publisher !== undefined" dir="ltr">{{ book.volumeInfo.publisher }}</span>, <span v-if="book.volumeInfo.publishedDate !== undefined" dir="ltr">{{ book.volumeInfo.publishedDate }}</span> - <span dir="ltr">{{ book.volumeInfo.categories[0] }}</span> - <span dir="ltr">{{ book.volumeInfo.pageCount }} pages</span></div>
                    <div class="reviewaggregate hreview-aggregate"><a href="https://books.google.es/books?id=nqRlPwAACAAJ&amp;dq=inauthor:%22J.K.+Rowling%22&amp;sitesec=reviews" aria-label="Average user rating - 18820 stars"><span class="gb-star-on goog-inline-block rating"><span class="value-title" title="4.0"></span></span><span class="gb-star-on goog-inline-block"></span><span class="gb-star-on goog-inline-block"></span><span class="gb-star-on goog-inline-block"></span><span class="gb-star-off goog-inline-block"></span></a> <span class="num-ratings"><a href="https://books.google.es/books?id=nqRlPwAACAAJ&amp;dq=inauthor:%22J.K.+Rowling%22&amp;sitesec=reviews" class="sbs-count secondary"><span class="count"></span></a>
                        </span>
                    </div>
                </div>
                <div id="synopsis">
                    <div id="synopsis-window" style="height: 5.85em; overflow: hidden;">
                        <div v-if="book.volumeInfo.description !== undefined" id="synopsistext" dir="ltr" class="sa">{{ book.volumeInfo.description }}</div>
                    </div><a class="secondary" style="cursor: pointer; padding-top: 6px;"></a></div>
                <div class="search_box_wrapper">
                    <b-button @click="joinBookChat" :disabled="loggedUser" style="rigth:10px;">Join Book Chat</b-button>
                </div>
            </td>
        </tr>
    </tbody>
</table>
        </b-container>
    </div>
</template>
<script>
export default {
  props: ['book'],
  data () {
    return {
      loggedUser: false
    }
  },
  computed: {
    email () {
      return !this.$store.getters.user ? false : this.$store.getters.user.email
    }
  },
  created () {
    this.$store.dispatch('fetchUser')
  },
  methods: {
    joinBookChat () {
      if (this.$store.getters.user) {
        this.loggedUser = true
        this.$router.push({ name: 'chat', params: { email: this.$store.getters.user.email, bookId: this.book.id, bookTitle: this.book.volumeInfo.title } })
      }
    }
  }
}
</script>
<style>
    #volume-main {
        position: relative;
        line-height: 1.2em;
        clear: both;
        border-top: 1px solid #ebebeb
    }

    .bookrescont {
        margin-bottom: 20%;
    }

    table {
        display: table;
        border-collapse: separate;
        border-color: grey;
        border-style:none;
        margin:0;
        border-spacing: 2px;
    }

    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }

    td {
        display: table-cell;
    }

    #bookinfo {
        vertical-align: top;
    }

    h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }

    .booktitle{
        margin-top: 0;
        margin-bottom: 21px;
    }

    .booktitle .subtitle {
        font-size: 60%;
        font-weight: normal;
    }

    div {
        display: block;
    }

    .bookcover {
        float: left;
        margin-right: 12px;
    }

    .thumbnail {
        width: 128px;
        border-top-width: 1px;
        border-right-width: 1px;
        border-bottom-width: 1px;
        border-left-width: 1px;
        border-top-style: solid;
        border-bottom-style: solid;
        border-left-style: solid;
        border-right-style: solid;
    }

    .bookcover img {
        padding: 1px;
    }
</style>
