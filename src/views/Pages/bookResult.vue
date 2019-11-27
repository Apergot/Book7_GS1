<template>
    <div>
        <h1>this is book result</h1>
        <p>{{ book.volumeInfo.title }}</p>
    </div>
</template>
<script>
export default {
  props: ['book']
}
</script>
