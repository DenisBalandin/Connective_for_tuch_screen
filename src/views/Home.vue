<template>
  <div class="home">
    <header>
      <a href="#"
        ><img
          class="main-logo"
          alt="Connect logo"
          src="../assets/LogoConnect.png"
      /></a>
    </header>
    <div class="service">
      <div class="container">
        <img
          id="hand_tap"
          class="tap"
          src="../assets/icons/Asset-tap.png"
          alt="Finger"
        />
        <img
          id="hand_two"
          class="tap"
          src="../assets/icons/Asset-tap.png"
          alt="Finger"
        />
        <img
          id="hand_three"
          class="tap"
          src="../assets/icons/Asset-tap.png"
          alt="Finger"
        />
        <img
          id="hand_four"
          class="tap"
          src="../assets/icons/Asset-tap.png"
          alt="Finger"
        />
        <div class="side-left">
          <div @click="goTo('/about')" value="about" class="item1 card-inside">
            <h3>ABOUT US</h3>
            <p>Your Cause. Our Mission.</p>
          </div>
          <div @click="showMemory = true" class="item2 span-col-2">
            <div class="wheel">
              <img
                class="card-puzzle"
                src="../assets/icons/Asset-puzzle.png"
                alt="Puzzle"
              />
            </div>
            <div class="finger"></div>
            <div class="grid-container-wider">
              <h2>MATCH TO WIN</h2>
            </div>
          </div>
        </div>

        <div class="side-right">
          <div @click="goTo('/selfie')" class="item3 span-col-2">
            <div class="card-content">
              <img
                class="card-camera"
                src="../assets/icons/Asset-camera.png"
                alt="Camera"
              />
              <h2>TAKE A SELFIE</h2>
            </div>
          </div>
          <div @click="goTo('/price-build')" class="item4 card-inside">
            <h3>BUILD AND PRICE</h3>
            <p>Get an idea of what you'd be paying.</p>
          </div>
        </div>
      </div>
    </div>

    <memory :showMemory='showMemory'></memory>
  </div>
</template>

<script>
import Memory from "@/components/Memory.vue";


export default {
  name: "home",
  methods: {
    goTo(path) {
      this.$router.push({
        path: path
      });
    }
  },
  data(){
    return {
        showMemory: false,
    }
  },
  components: {
    'memory': Memory
  }
};
</script>

<style scoped lang="css">
.main-logo {
  padding: 40px;
  max-width: 508px;
  height: 163px;
}

.service {
  padding: 30px;
  background: rgb(223, 224, 224);
  background: linear-gradient(
    180deg,
    rgba(223, 224, 224, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}

h1 {
  font-size: 74px;
}

h2 {
  font-size: 60px;
  font-weight: 800;
}

h3 {
  font-size: 60px;
  margin-bottom: 30px;
  font-weight: 800;
}

h4 {
  font-size: 36px;
}

p {
  font-size: 2rem;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  align-self: stretch;
  justify-self: stretch;
}

.side-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.item1 {
  margin-bottom: 30px;
}

.item2 {
  background: rgb(0, 184, 176);
  background: linear-gradient(
    90deg,
    rgba(0, 184, 176, 1) 0%,
    rgba(157, 210, 156, 1) 100%
  );
}
.item3 {
  margin-bottom: 30px;
  background-image: linear-gradient(
      rgba(9, 37, 42, 0.45),
      rgba(9, 37, 42, 0.45)
    ),
    url("../assets/Asset-selfie-bg.png");
}

.layer {
  background-color: rgba(75, 86, 160, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/*.item3 img { opacity: 0.2; }*/
.side-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.card-inside {
  background-color: #00468b;
  height: 260px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.span-col-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 440px;
  border-radius: 20px;
}

.grid-container-wider {
}

#hand_tap {
  position: absolute;
  height: 150px;
  top: 750px;
  left: 250px;
  z-index: 9;
  -webkit-animation: hand_tap 13s infinite;
}

@-webkit-keyframes hand_tap {
  0%,
  2%,
  20%,
  100% {
    margin-top: 50px;
    opacity: 0;
  }
  7%,
  15% {
    margin-top: 0;
    opacity: 1;
  }
  9% {
    -webkit-transform: scale(1);
  }
  11% {
    -webkit-transform: scale(0.7);
  }
  13% {
    -webkit-transform: scale(1);
  }
}

#hand_two {
  position: absolute;
  height: 150px;
  top: 400px;
  right: 650px;
  z-index: 5;
  -webkit-animation: hand_two 13s infinite;
  animation-delay: 2.6s;
}

@-webkit-keyframes hand_two {
  0%,
  2%,
  20%,
  100% {
    margin-top: 50px;
    opacity: 0;
  }
  7%,
  15% {
    margin-top: 0;
    opacity: 1;
  }
  9% {
    -webkit-transform: scale(1);
  }
  11% {
    -webkit-transform: scale(0.7);
  }
  13% {
    -webkit-transform: scale(1);
  }
}

#hand_three {
  position: absolute;
  height: 150px;
  top: 340px;
  left: 200px;
  z-index: 8;
  -webkit-animation: hand_two 13s infinite;
  animation-delay: 5.2s;
}

#hand_four {
  position: absolute;
  height: 150px;
  top: 820px;
  right: 800px;
  z-index: 7;
  -webkit-animation: hand_two 13s infinite;
  animation-delay: 7.8s;
}

.tap {
  opacity: 0;
}

.tap {
  /*width: 100px;*/
  /*height: 160px;*/
}

.card-puzzle {
  max-width: 225px;
  height: 150px;
  margin-bottom: 20px;
}

.card-camera {
  max-width: 220px;
  height: 150px;
  margin-bottom: 20px;
}

</style>
