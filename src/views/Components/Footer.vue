<template>
  <footer class="footer-distributed">
    <div class="footer-left">
      <h3>
        <img src="./../../assets/logo.png" class="logo">
      </h3>

      <p class="footer-links">
        <router-link tag="a" to="/" class="link">Home</router-link> ·
        <router-link tag="a" to="/search" class="link">Search</router-link>
      </p>

      <p class="footer-company-name">Book7 &copy; 2019</p>
    </div>

    <div class="footer-center">
      <div>
        <font-awesome-icon size="xs" :icon="['fa' , 'map-marker-alt']" class="back-color icons-fab"/>
        <p>
          <span>Las Palmas</span> Gran Canaria, Spain
        </p>
      </div>
      <div>
        <font-awesome-icon :icon="['fa' , 'phone']" class="back-color icons-fab"/>
        <p>+34 606 837 831</p>
      </div>
      <div>
        <font-awesome-icon :icon="['fa' , 'envelope']" class="back-color icons-fab"/>
        <p>
          <a href="mailto:apergot95@gmail.com">apergot95@gmail.com</a>
        </p>
      </div>
    </div>

    <div class="footer-right">
      <p class="footer-company-about">
        <span>Trabajo para Gestión del Software I</span>
      </p>

      <div class="footer-icons">
        <a href="https://twitter.com">
          <font-awesome-icon :icon="['fab' , 'twitter']" class="icon alt" style="color: #1da1f2"/>
        </a>
        <a href="https://www.facebook.com">
          <font-awesome-icon :icon="['fab' , 'facebook-f']" class="icon alt" style="color: #1877f2"/>
        </a>
        <a href="https://github.com/Apergot/Book7_GS1">
          <font-awesome-icon :icon="['fab' , 'github']" class="icon alt" style="color: #000000"/>
        </a>
        <a href="https://www.linkedin.com">
          <font-awesome-icon :icon="['fab' , 'linkedin']" class="icon alt" style="color: #007bb5" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>

.back-color{
    color: #3e275b;
}

.logo{
    width: 130px;
    height: 50px;
}

.footer-distributed {
  background-color: #f8f9fa;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 55px 50px;
  margin-top: 80px;
  bottom: 0;
  width: 100%;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
  width: 40%;
}

.footer-distributed h3 {
  font: normal 36px "Cookie", cursive;
  margin: 0;
}

.footer-distributed h3 span {
  color: #5383d3;
}

.footer-distributed .footer-links {
  margin: 20px 0 12px;
  padding: 0;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center .icons-fab {

  width: 25px;
  height: 25px;

  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center p {
  display: inline-block;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: #5383d3;
  text-decoration: none;
}

.footer-distributed .footer-right {
  width: 20%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons  a{
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #f8f9fa;
  border-radius: 2px;

  font-size: 20px;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}

@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;

  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }
}
</style>
