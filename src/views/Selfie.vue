<template>
  <div class="selfie">
    <Header />
    <transition name='fade'>
      <step1 v-if='step == "step1"'></step1>
    </transition>
    <transition name='fade'>
      <step2 
      v-if='step == "step2"'
      :img='img'></step2>
    </transition>
    <transition name='fade'>
      <step3 
      v-if='step == "step3"'
      :img='img'></step3>
    </transition>
  </div>
</template>
<script type="text/javascript">
import Header from "@/components/Header.vue";
import Step1 from "@/components/selfie/Step1.vue";
import Step2 from "@/components/selfie/Step2.vue";
import Step3 from "@/components/selfie/Step3.vue";

export default {
  name: "about",
  components: {
    Header,
    'step1': Step1,
    'step2': Step2,
    'step3': Step3
  },
  data(){
    return {
      step: 'step1',
      img: null
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({
        path: path
      });
    },
    nextStep(img, step) {
      this.step = step;
      this.img = img;
    },
    lastStep(){
      this.step = 'step3';
    }
  },
};
</script>

<style lang="css">
  .holder {
    padding: 50px;
    box-sizing: border-box;
    background-color: #f7f7f7;
    position: relative;
    z-index: 1;
  }

  .card {
    height: 731px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 30px;
    -webkit-box-shadow: 5px 8px 16px -8px #000000;
    box-shadow: 5px 8px 16px -8px #000000;
    background-image: url(/img/bgGradient.27ab5048.png);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  video {
    margin-top: 50px;
  }

  .countdown_holder {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    top: 207px;
  }

  .countdown {
    font-size: 0;
    color: white;
    position: absolute;
    font-weight: bold;
    left: 50%;
    opacity: 0;
    transition: font-size .5s, opacity .5s;
    transform: translateX(-50%);
  }

  .countdown.zoom {
    font-size: 400px;
    opacity: 1;
  }

  .flash {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .loader {
    height: 200px;
  }

  canvas {
    position: absolute;
    top: 100px;
    z-index: -10;
    height: 480px;
    width: 640px;
  }

  .final_img {
    width: 640px;
    height: 480px;
  }

  .final_btn {
    margin-bottom: 20px;
  }

  .btn {
    padding: 20px 100px;
    border: none;
    border-radius: 40px;
    font-family: "Libre Franklin", sans-serif;
    padding: 27px 100px;
    font-size: 33px;
    font-weight: bold;
    color: #ffffff;
    background: #00306c;
    -webkit-box-shadow: 5px 8px 16px -8px #000000;
    box-shadow: 5px 8px 16px -8px #000000;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }

  .btn.text_btn {
    background-color: transparent;
    padding: 0;
    text-decoration: underline;
    text-underline-position: under;
    box-shadow: none;
    margin-top: 0;
    font-size: 25px;
  }

  .holder input {
    padding: 15px 30px;
    font-size: 32px;
  }

  h1 {
    margin-bottom: 60px;
  }

</style>
