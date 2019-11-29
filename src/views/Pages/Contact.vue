<template>
  <div class="contac-form">
    <h3>Contact</h3>
    <p>For any questions, suggestions or errors on the web,
      You can contact us through the following form:</p>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        label="Email address:"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          class="input"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Name:" label-for="input-2">
        <b-form-input
          class="input"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Subject:" label-for="input-3">
        <b-form-input
          class="input"
          v-model="form.subject"
          required
          placeholder="Enter subject"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Message:" label-for="input-4">
        <b-col sm="10">
          <b-form-textarea
            class="textarea-default"
            placeholder="Write a message"
          ></b-form-textarea>
        </b-col>
      </b-form-group>

      <b-form-group>
        <b-form-checkbox-group v-model="form.checked" class="checkbox">
          <b-form-checkbox value="subscribe">Yes! Send me promotions by email</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group>
      <b-button type="send" variant="primary" class="submit">Send</b-button>
      <b-button type="reset" variant="danger" class="submit">Reset</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        subject: '',
        checked: []
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.email = ''
      this.form.name = ''
      this.form.subject = ''
      this.form.checked = []
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
<style scoped>
  @media(min-width: 768px) {
    .contac-form{
      margin-top: 2%;
      width: 40%;
      margin-left: 30%;
      box-sizing: border-box;
      box-shadow: 5px 10px 18px #888888;
      border-radius: 5px;
      border: 1px solid #c0c2c4;
      padding: 10px;
    }
    .submit{
      width: 33%;
    }
    .input{
      width: 100%;
    }
    .checkbox{
      margin: 5% 0;
    }
  }
  @media(min-width: 992px) {
    .submit{
      display: inline-block;
    }

    .contac-form{
      margin-top: 2%;
      width: 40%;
      margin-left: 30%;
      box-sizing: border-box;
      box-shadow: 5px 10px 18px #888888;
      border-radius: 5px;
      border: 1px solid #c0c2c4;
      padding: 10px;
    }
  }
  @media(max-width: 768px) {
    .checkbox{
      margin: 5% 0;
    }
  }
</style>
