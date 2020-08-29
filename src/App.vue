<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/"></router-link>-->
<!--      <router-link to="/about"></router-link>-->
<!--      <router-link to="/price"></router-link>-->
<!--    </div>-->
    <router-view />
  </div>
</template>

<style lang="css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*#nav {*/
/*  padding: 30px;*/

/*  a {*/
/*    font-weight: bold;*/
/*    color: #2c3e50;*/

/*    &.router-link-exact-active {*/
/*      color: #80cbc4;*/
/*    }*/
/*  }*/
/*}*/

html {
  /* min-width: 1920px;
  height: 1080px; */
  /*box-sizing: border-box;*/
}

body {
  font-size: 16px;
  color: #2c3e50;
  /*background-color: #2c3e50;*/
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


h1,
h2,
h3,
h4,
h5 {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin: 0;
  line-height: 1.3 !important;
}

p {
  font-family: "Libre Franklin", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin: 0;
}

h1 {
  font-size: 74px;
  line-height: 74px;
}

h2 {
  font-size: 60px;
  line-height: 63px;
}

h3 {
  font-size: 48px;
  line-height: 48px;
}

h4 {
  font-size: 36px;
  line-height: 36px;
}

p {
  font-size: 2rem;
  line-height: 2rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.flipper, .flip-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 265px!important;
    height: 200px;
    margin-bottom: 1%;
}

.front {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4abeb7;
    color: white;
        width: 100%!important;
    height: 200px;
}

.back {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: white;
        width: 100%!important;
    height: 200px;
}

.back div, .front div {
    width: 100%;
    height: 100%;
}

.back .card_content {
    background-blend-mode: multiply;
    background-color: rgba(30, 121, 196, 0.43);
}

</style>
