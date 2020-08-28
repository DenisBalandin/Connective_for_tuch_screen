<template>
  <div class="price-inner">
    <div class="card-option">
      <div class="container">
        <h2>{{ question }}</h2>

        <ul>
          <li @click="goPath(8)">
            <input type="radio" id="a-option" name="selector" />
            <label ref="8" for="a-option">I am sure what I need</label>
            <div class="check"></div>
            <hr />
          </li>
          <li @click="goPath(2)">
            <input type="radio" id="b-option" name="selector" />
            <label ref="2" for="b-option"
              >Get The Latest Feature Rich Cloud Business Phone System</label
            >
            <div class="check"><div class="inside"></div></div>
            <hr />
          </li>

          <li @click="goPath(5)">
            <input type="radio" id="c-option" name="selector" value="3" />
            <label ref="5" for="c-option">MSP Tailored for Nonprofits</label>
            <div class="check"><div class="inside"></div></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: "StepOne",
      question: "Build a Quote"
    };
  },
  created: function() {},
  methods: {
    goPath(i) {
      this.$parent.currentPage = i;
      let ans = this.$refs[i].innerHTML;
      this.$parent.addAnswer(ans, this.question);
    }
  }
};
</script>

<style scoped>
.price-inner {
  max-width: 1920px;
  padding: 50px;
  background: rgb(223, 224, 224);
  background: linear-gradient(
    180deg,
    rgba(223, 224, 224, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
.card-option {
  height: 731px;
  width: 100%;
  display: flex;
  border-radius: 30px;
  box-shadow: 5px 8px 16px -8px #000000;
  background-image: url("../../assets/bgGradient.png");
  background-size: cover;
  /*background: rgb(0, 184, 176);*/
  /*background: linear-gradient(*/
  /*  90deg,*/
  /*  rgba(0, 184, 176, 1) 0%,*/
  /*  rgba(157, 210, 156, 1) 100%*/
  /*);*/
}

h2 {
  padding-top: 30px;
}
hr {
  margin: 40px 0;
  border: 1px solid #ffffff;
  width: 800px;
}
.container {
  display: block;
  position: relative;
  margin: auto auto;
  width: 800px;
}

.container ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  /*overflow: auto;*/
}

ul li {
  margin: 40px 0;
  display: block;
  position: relative;
  float: left;
  width: 100%;
  height: 100px;
  /*border-bottom: 1px solid #ffffff;*/
}

ul li input[type="radio"] {
  position: absolute;
  visibility: hidden;
}

ul li label {
  display: block;
  position: relative;
  font-family: "Libre Franklin", Helvetica, Arial, sans-serif;
  font-size: 32px;
  line-height: 36px;
  color: #ffffff;
  max-width: 500px;
  padding: 25px 25px 25px 50px;
  margin: auto auto;
  /*height: 40px;*/
  z-index: 9;
  cursor: pointer;
  -webkit-transition: all 0.25s linear;
}

ul li:hover label {
  color: #ffffff;
}

ul li .check {
  display: block;
  position: absolute;
  border: 5px solid #ffffff;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  top: 30px;
  left: 20px;
  z-index: 5;
  transition: border 0.25s linear;
  -webkit-transition: border 0.25s linear;
}

ul li:hover .check {
  /*border: 5px solid #ffffff;*/
}

ul li .check::before {
  display: block;
  position: absolute;
  content: "";
  border-radius: 100%;
  height: 15px;
  width: 15px;
  top: 5px;
  left: 5px;
  margin: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
}

input[type="radio"]:checked ~ .check {
  border: 5px solid #ffffff;
}

input[type="radio"]:checked ~ .check::before {
  background: #ffffff;
}

input[type="radio"]:checked ~ label {
  color: #ffffff;
}
</style>
