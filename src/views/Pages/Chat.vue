<template>
    <b-container class="chat chatcont">
        <h2 class="text-primary text-center" style="margin-bottom:3%;">{{ bookTitle }}</h2>
        <b-card>
            <b-card-text>
                <p class="text-secondary nomessages" v-if="messages.length == 0">
                    [No messages yet!]
                </p>
                <div class="messages" v-chat-scroll="{ always: false, smooth: true }">
                    <div v-for="message in messages" :key="message.id">
                        <span class="text-info">[{{ message.email }}]: </span>
                        <span>{{ message.message }}</span>
                        <span class="text-secondary time">{{ message.timestamp }}</span>
                    </div>
                </div>
            </b-card-text>
            <b-card-footer>
              <div class="card-action">
                    <CreateMessage :propCreated="this.propCreated" />
                </div>
            </b-card-footer>
        </b-card>
    </b-container>
</template>
<script>
import CreateMessage from './../Components/CreateMessage'
import fb from './../../firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props: ['email', 'bookId', 'bookTitle'],
  components: {
    CreateMessage
  },
  data () {
    return {
      propCreated: {
        email: `${JSON.stringify(this.email)}`,
        bookId: `${JSON.stringify(this.bookId)}`
      },
      messages: []
    }
  },
  created () {
    console.log('Esto es lo que quiero pasar', this.propCreated.bookId, this.propCreated.email)
    let ref = fb.collection(`messages${this.propCreated.bookId}`).orderBy('timestamp')

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            email: doc.data().email,
            message: doc.data().message,
            timestamp: moment(doc.data().timestamp).format('LTS')
          })
        }
      })
    })
  }
}
</script>
<style>

    .chatcont {
      margin-bottom: 20%;
    }

    .chat h2{
        font-size: 2.6em;
        margin-bottom: 0px;
    }
    .chat h5{
        margin-top: 0px;
        margin-bottom: 40px;
    }
    .chat span{
        font-size: 1.2em;
    }
    .chat .time{
        display: block;
        font-size: 0.7em;
    }
    .messages{
        max-height: 300px;
        overflow: auto;
    }
</style>
