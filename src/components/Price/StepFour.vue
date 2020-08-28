<!-- Page of flow 3 - step 4 Price-->
<template>
  <div class="step-four step">
    <div class="step-inner">
      <div class="info">
        <h3>
          {{ question }}
        </h3>
        <hr />
      </div>
      <div class="part2">
        <ul class="circles">
          <li
            class="circle"
            @click="addAns('Voicemail')"
            :class="{ chosen: answer.includes('Voicemails') }"
          >
            <div class="icon">
              <img class="voice" src="../../assets/icons/Asset-18.png" />
            </div>
            <div class="feature">Voicemail</div>
          </li>
          <li
            class="circle"
            @click="addAns('Recording')"
            :class="{ chosen: answer.includes('Recording') }"
          >
            <div class="icon">
              <img class="call" src="../../assets/icons/Asset-17.png" />
            </div>
            <div class="feature">Call<br />Recording</div>
          </li>
          <li
            class="circle"
            @click="addAns('Voicemail to Email')"
            :class="{ chosen: answer.includes('Voicemail to Email') }"
          >
            <div class="icon">
              <img class="v-email" src="../../assets/icons/Asset-16.png" />
            </div>
            <div class="feature">
              Voicemail<br />
              to Email
            </div>
          </li>
          <li
            class="circle"
            @click="addAns('Conference Calling')"
            :class="{ chosen: answer.includes('Conference Calling') }"
          >
            <div class="icon">
              <img class="conference" src="../../assets/icons/Asset-19.png" />
            </div>
            <div class="feature">
              Conference<br />
              Calling
            </div>
          </li>
          <li
            class="circle"
            @click="addAns('Extensions on Mobile Phone')"
            :class="{ chosen: answer.includes('Extensions on Mobile Phone') }"
          >
            <div class="icon">
              <img class="phone" src="../../assets/icons/Asset-20.png" />
            </div>
            <div class="feature">
              Extensions on <br />
              Mobile Phone
            </div>
          </li>

          <li
            class="circle"
            @click="addAns('Auto Attendant')"
            :class="{ chosen: answer.includes('Auto Attendant') }"
          >
            <div class="icon">
              <img class="attendant" src="../../assets/icons/Asset-21.png" />
            </div>
            <div class="feature">Auto Attendant</div>
          </li>
        </ul>
      </div>
      <div class="button" @click="goPath(7)">
        <button type="submit">NEXT</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "StepFour",
      question: "Which Features Would You Like?",
      answer: ""
    };
  },
  created: function() {},
  methods: {
    goPath(i) {
      this.$parent.currentPage = i;
      this.$parent.addAnswer(this.answer, this.question);
    },
    addAns(ans){
      console.log(this.answer)
      if (this.answer.includes(ans)){
        this.answer = this.answer.replace(', '+ans, '');
        this.answer = this.answer.replace(ans, '');
      }else {
        if (this.answer.length < 1) {
          this.answer += ans;
        }else {
          this.answer += ", "+ans;
        }
      }
      console.log(this.answer)
    }
  }
};
</script>

<style scoped>
.step-four {
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
  padding-top: 50px;
}
hr {
  margin-top: 30px;
  border: 1px solid #ffffff;
  width: 600px;
}

.circles {
  margin: 60px 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr 1fr;
  grid-gap: 30px;
  align-self: center;
  justify-content: center;
  align-items: center;
}
.circle {
  background: #ffffff;
  border: 5px solid #ffffff;
  border-radius: 50%;
  /*box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);*/
  height: 220px;
  width: 220px;
  display: flex;
  flex-direction: column;
  transition: border .5s;
  justify-content: center;
  align-items: center;
}
.chosen {
  border: 5px solid #00306c;

}

.feature {
  color: #273869;
  font-size: 21px;
  font-weight: 500;
}

i {
  font-size: 60px;
}

img {
  max-width: 100px;
  max-height: 100px;
}
</style>
