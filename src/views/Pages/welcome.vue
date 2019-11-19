<template>
  <div>
    <ul v-for="(item, index) in items" :key="item">
      <li >{{index + item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    getInitialPresentation: function () {
      var result = this.items
      this.$http.get(`https://www.googleapis.com/books/v1/volumes?q=-term&orderBy=newest&key=${process.env.VUE_APP_GOOGLE_BOOKS_API_KEY}`)
        .then(resp => {
          result = resp.data.items
          console.log(result)
        })
        .catch(err => {
          console.log(err)
        })
      console.log(result)
    }
  },
  created () {
    this.getInitialPresentation()
  }
}
</script>
