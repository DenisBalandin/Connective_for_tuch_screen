<template>
  <div class="price-inner">
    <div class="card-option">
      <div class="container">
        <h3>{{ question }}</h3>
        <ul>
          <li>
            <input
              type="radio"
              id="a-option"
              name="selector"
              value="ASAP"
              v-model="answer"
            />
            <label for="a-option">ASAP</label>
            <div class="check"></div>
            <hr />
          </li>
          <li>
            <input
              type="radio"
              id="b-option"
              name="selector"
              value="In 1 Month"
              v-model="answer"
            />
            <label ref="2" for="b-option">In 1 Month</label>
            <div class="check"><div class="inside"></div></div>
            <hr />
          </li>
          <li>
            <input
              type="radio"
              id="c-option"
              name="selector"
              value="1 to 2 Months"
              v-model="answer"
            />
            <label ref="2" for="c-option">1 to 2 Months</label>
            <div class="check"><div class="inside"></div></div>
            <hr />
          </li>
          <li>
            <input
              type="radio"
              id="d-option"
              name="selector"
              value="2 Months Plus"
              v-model="answer"
            />
            <label ref="2" for="d-option">2 Months Plus</label>
            <div class="check"><div class="inside"></div></div>

          </li>
        </ul>
      </div>
      <transition name='fade'>
        <div v-if='answer' class="button" @click="goPath(8)">
          <button type="submit">NEXT</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: "StepTwo",
      question: "When Do You Need Your New System Installed?",
      answer: ""
    };
  },
  created: function() {},
  methods: {
    goPath(i) {
      // eslint-disable-next-line no-debugger
      // debugger;
      // eslint-disable-next-line no-console
      this.$parent.currentPage = i;
      this.$parent.addAnswer(this.answer, this.question);
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

button {
  position: fixed;
  top: 895px;
  right: 100px;
  padding: 20px 100px;
  border: none;
  border-radius: 40px;
  font-family: "Libre Franklin", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  background: #00306c;
  box-shadow: 5px 8px 16px -8px #000000;
  align-items: flex-end;
}

h3 {
  margin-top: 30px;
}
hr {
  margin: 15px 0;
  border: 1px solid #ffffff;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: 40px auto;
  height: auto;
  width: 1100px;
}

.container ul {
  list-style: none;
  margin: 30px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  /*overflow: auto;*/
}

ul li {
  margin: 10px 0;
  display: block;
  position: relative;
  float: left;
  width: 400px;
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
  line-height: 32px;
  font-weight: 500;
  color: #ffffff;
  padding: 25px 25px 25px 80px;
  margin: 10px auto;
  height: 30px;
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
