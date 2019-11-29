<template>
    <b-container style="margin-bottom: 30px">
        <form @submit.prevent="createMessage">
            <div class="form-group">
              <input type="text" name="message" id="" class="form-control" placeholder="Enter message..." v-model="newMessage">
              <p class="text-danger" v-if="errorText">{{ errorText }}</p>
            </div>
            <b-button class="btn btn-primary" type="submit" name="action">Submit</b-button>
        </form>
    </b-container>
</template>
<script>
import fb from './../../firebase/init'

export default {
  name: 'CreateMessage',
  props: ['email'],
  data () {
    return {
      newMessage: null,
      errorText: null
    }
  },
  methods: {
    createMessage () {
      if (this.newMessage) {
        fb.collection('messages').add({
          message: this.newMessage,
          email: this.email,
          timestamp: Date.now()
        }).catch(err => {
          console.log(err)
        })
        this.newMessage = null
        this.errorText = null
      } else {
        this.errorText = 'A message must be entered first!'
      }
    }
  }
}
</script>
