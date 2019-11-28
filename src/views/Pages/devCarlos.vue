<template>
<div>
    <h3>Contactanos</h3>
    <p>Para cualquier duda, sugerencia, o señalizar errores o erratas en la web, 
    puede ponerse en contacto con nosotros a traves del siguiente formulario</p>
    <form>
    Nombre:<br>
    <input type="text" name="firstname"><br>
    Correo:<br>
    <input type="text" name="lastname">
    Asunto:<br>
    <input type="text" name="issue">
    Mensaje:<br>
    <textarea cols="60" rows="3" name="message">
    </form>
</div>
</template>

<script>
export default {
  data () {
    return {
      books: [],
      gotResults: false
    }
  }
}
</script>
