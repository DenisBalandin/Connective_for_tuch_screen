<template>
  <div class="PriceBuild">
    <Header />
    <transition name="fade">
      <StepOne v-if="currentPage == 1" />
    </transition>
    <transition name="fade">
      <StepTwo v-if="currentPage == 2" />
    </transition>
    <transition name="fade">
      <StepThree v-if="currentPage == 3" />
    </transition>
    <transition name="fade">
      <StepFour v-if="currentPage == 4" />
    </transition>
    <transition name="fade">
      <StepFive v-if="currentPage == 5" />
    </transition>
    <transition name="fade">
      <StepSix v-if="currentPage == 6" />
    </transition>
    <transition name="fade">
      <StepSeven v-if="currentPage == 7" />
    </transition>
    <transition name="fade">
      <StepFinal v-if="currentPage == 8" />
    </transition>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import StepOne from "@/components/Price/StepOne";
import StepTwo from "@/components/Price/StepTwo";
import StepThree from "@/components/Price/StepThree";
import StepFour from "@/components/Price/StepFour";
import StepFive from "@/components/Price/StepFive";
import StepSix from "@/components/Price/StepSix";
import StepSeven from "@/components/Price/StepSeven";
import StepFinal from "@/components/Price/StepFinal";


export default {
  data() {
    return {
      name: "PriceBuild",
      currentPage: 1,
      answers: []
    };
  },
  components: {
    Header,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    StepSix,
    StepSeven,
    StepFinal
  },
  methods: {
    addAnswer(ans, question) {
      // eslint-disable-next-line no-unused-vars
      let obj = {
        answer: ans,
        question: question
      };
      this.answers.push(obj);
    }
  }
};
</script>

<style scoped>

</style>
