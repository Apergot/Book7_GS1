<template lang='pug'>
#MyFirstSlideshow
  .eg-slideshow
    slide
      h1 Hi there !
      h4 This is your first slideshow !

    slide(enter='bounceInRight' leave='fadeOut')
      h3 Hey modify me !
      p.
        Come on modify me ! If you are running the development server,
        you will see the changes take effect immediately

    slide(enter='fadeIn')
      h3 Want cool effects?
      p.
        Code your own, or try stealing for the other slideshows !
</template>
<script>
export default {
  props: ['books']
}
</script>
<style>
    .book{
        display: block;
    }
</style>
