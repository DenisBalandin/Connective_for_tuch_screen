<!-- Page of flow 2 - step 3 Price-->
<template>
  <div class="step-three">
    <div class="step-inner">
      <div class="info">
        <h3>{{ question }}</h3>
        <form class="customForm">
          <div class="custom_num">
            <input
              type="number"
              name="custom_number"
              id="custom_number"
              placeholder="1"
              required
              v-model="answer"
            />
          </div>
        </form>
        <hr />
      </div>

      <div class="part2">
        <div class="circles">
          <div
            v-for="(num, index) in circles"
            :key="index"
            class="circle"
            @click="answer = num.num"
          >
            <p>{{ num.num }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="button" @click="goPath(4)">
      <button type="submit">NEXT</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "StepTwo",
      question: "How Many Handsets Do You Require",
      answer: "1",
      circles: [
        {
          num: "1"
        },
        {
          num: "2"
        },
        {
          num: "3"
        },
        {
          num: "4"
        },
        {
          num: "5"
        },
        {
          num: "6"
        },
        {
          num: "7"
        },
        {
          num: "8"
        },
        {
          num: "9"
        },
        {
          num: "10"
        }
      ]
    };
  },
  created: function() {},
  methods: {
    goPath(i) {
      this.$parent.currentPage = i;
      this.$parent.addAnswer(this.answer, this.question);
    }
  }
};
</script>

<style scoped>
.step-three {
  max-width: 1920px;
  padding: 50px;
  background: rgb(223, 224, 224);
  background: linear-gradient(
    180deg,
    rgba(223, 224, 224, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
.step-inner {
  height: 731px;
  width: 100%;
  /*display: grid;*/
  border-radius: 30px;
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
.info {
  padding-top: 60px;
}
.customForm {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
::placeholder {
  font-family: "Libre Franklin", sans-serif;
  font-size: 1.5rem;
  color: #00468b;
}

input {
  width: 120px;
  height: 60px;
  border: 1px solid #ffffff;
  border-radius: 30px;
  background: #ffffff;
  padding: 0 20px;
  font-family: "Libre Franklin", sans-serif;
  font-size: 1.5rem;
  color: #00468b;
}

input:focus {
  outline: none;
  background: #ffffff;
}

input[type="radio"] {
  display: none;
}
input.checked[type="radio"] {
  display: none;
}

.custom-button {
  width: 260px;
  text-align: center;
  font-family: "Libre Franklin", sans-serif;
  color: #00468b;
  padding: 20px 0;
  margin: 0 15px;
  border: none;
  border-radius: 40px;
  font-size: 1.5rem;
  /*font-weight: bold;*/
  color: #ffffff;
  background: #00306c;
  box-shadow: 5px 8px 16px -8px #000000;
}
hr {
  margin-top: 30px;
  border: 1px solid #ffffff;
  width: 600px;
}

.circles {
  margin: 60px 200px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr 1fr;
  grid-gap: 30px;
  justify-items: center;
}
.circle {
  background: #ffffff;
  border: 5px solid transparent;
  border-radius: 50%;
  /*box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);*/
  height: 120px;
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: border .3s;
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-size: 68px;
  color: #00306c;
}
.circle:active,
.circle:focus {
  border: 5px solid #00306c;
}

.circles .circle p {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-size: 68px;
  color: #00306c;
}
</style>
