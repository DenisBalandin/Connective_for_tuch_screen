<!-- Page of flow 1 - step 3 Price-->
<template>
  <div class="step-five">
    <div class="step-inner">
      <div class="info">
        <form class="customForm">
          <div v-for="(answer, index) in answers" :key="index" class="option1">
            <h3>
              {{ answer.question }}
            </h3>
            <div class="custom_num">
              <label>
                <input
                  type="number"
                  placeholder="amount..."
                  required
                  v-model="answers[index].answer"
                />
              </label>
            </div>
            <hr />
          </div>
        </form>
      </div>
    </div>
    <transition name='fade'>
      <div v-if='complete' class="button" @click="multAnswers(6)">
        <button type="submit">NEXT</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "StepFive",

      answers: [
        {
          question: "Number of Workstations?",
          answer: ""
        },
        {
          question: "Number of Servers?",
          answer: ""
        },
        {
          question: "Number of Employees?",
          answer: ""
        }
      ]
    };
  },
  computed:{
    complete(){
      let vm = this;
      let valid = true;
      this.answers.forEach(function(ans){
        if (ans.answer.length < 1) {
          valid = false;
        }
      });
      if (valid) return true;
      else return false;
    }
  },
  created: function() {},
  methods: {
    multAnswers(i) {
      let vm = this;
      this.$parent.currentPage = i;

      this.answers.forEach(function(ans, index) {
        // // eslint-disable-next-line no-debugger
        // debugger;
        vm.$parent.addAnswer(ans[index], ans.question);
      });
    }
  }
};
</script>

<style scoped>
.step-five {
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
.info {
  padding-top: 30px;
}
h3 {
  padding: 30px 0;
}
.customForm {
  display: flex;
  flex-direction: column;
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

hr {
  margin-top: 40px;
  border: 1px solid #ffffff;
  width: 600px;
}
hr:last-child {
  /*display: none;*/
  color: red;
}
.customForm .option1:last-child hr{
  display: none;
}
</style>
