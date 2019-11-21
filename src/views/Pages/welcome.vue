<template>
  <div>
    <ul v-for="(item, index) in items" :key="item.id">
      <li >{{index + item.volumeInfo.infoLink}}</li>
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
    getInitialPresentation: async function () {
      var result
      await this.$http.get(`https://www.googleapis.com/books/v1/volumes?q=-term&orderBy=newest&key=${process.env.VUE_APP_GOOGLE_BOOKS_API_KEY}`)
        .then(resp => {
          result = resp.data.items
        })
        .catch(err => {
          console.log(err)
        })
      console.log('Este es el bueno', result)
      this.items = JSON.parse(JSON.stringify(result))
    }
  },
  created () {
    this.getInitialPresentation()
  }
}
</script>
