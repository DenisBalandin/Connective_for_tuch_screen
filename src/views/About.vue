<template>
  <div class="about">
    <Header />
    <div class="about-inner">
      <div class="card1 description">
        <div class="description-text">
          <h2>
            Fighting for a Cause Has Never <br />
            Been Easier
          </h2>
          <h4>
            Connect Cause proactively monitors and manages your IT solutions so
            you can focus on what really matters.
          </h4>
          <p>
            Every second of your day – from the first cup of coffee to the moment you close your eyes – is spent thinking about your cause and the different ways to strengthen support, gain volunteers and build awareness. Wouldn’t it be great if you had a technology partner that was as committed to the performance of your IT as you are to your non-profit? With Connect Cause, you do.
          </p>
          <p>
            Our non-profit IT support focuses on providing a hands-free,
            seamless and secure technology experience, so you can spend more
            time gathering volunteers and spreading awareness and less time
            updating software and troubleshooting printer problems. From
            improving collaboration with Microsoft Office 365 to enhancing
            interactions with unified communications and VoIP, we’re here to
            support your organization.
          </p>
        </div>
        <!-- <div class="link">
          <p class="links"
          @click='goTo("/site")'>
            OUR WEBSITE <i class="fas fa-arrow-alt-circle-right"></i>
          </p>
        </div> -->
      </div>

      <div @click='goTo("/selfie")' class="card2 selfie-card">
        <img
          class="card-camera"
          src="../assets/icons/Asset-camera.png"
          alt="Camera"
        />
        <h3>TAKE A SELFIE</h3>
      </div>

      <div @click='showMemory = true' class="card3 match">
        <div class="wheel">
          <img
            class="card-puzzle"
            src="../assets/icons/Asset-puzzle.png"
            alt="Puzzle"
          />
        </div>
        <div class="grid-container-wider">
          <h3>MATCH TO WIN</h3>
        </div>
      </div>
    </div>
    <memory :showMemory='showMemory'></memory>
  </div>
</template>
<script type="text/javascript">
import Header from "@/components/Header.vue";
import Memory from "@/components/Memory.vue";

export default {
  name: "about",
  components: {
    Header,
    'memory': Memory
  },
  data(){
    return {
      showMemory: false,
    }
  },
  methods: {
    goTo(path) {
      this.$router.push({
        path: path
      });
    }
  },
};
</script>

<style scoped lang="css">
.about-inner {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  padding: 30px;
  background: rgb(223, 224, 224);
  background: linear-gradient(
    180deg,
    rgba(223, 224, 224, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
.card1 {
  height: 720px;
  grid-area: 1 / 1 / 3 / 2;
}
.card2 {
  grid-area: 1 / 2 / 2 / 3;
}
.card3 {
  grid-area: 2 / 2 / 3 / 3;
}
h2 {
   font-size: 2.2rem;
  margin-bottom: 30px;
}
h4 {
   font-size: 1.8rem;
  margin-bottom: 30px;
}
p {
  font-size: 1rem;
  margin-bottom: 30px;
}
.link {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: flex-end;
}
p .links {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-content: flex-end;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 5px 8px 16px -8px #000000;
  background: rgb(0, 184, 176);
  background: linear-gradient(
    90deg,
    rgba(0, 184, 176, 1) 0%,
    rgba(157, 210, 156, 1) 100%
  );
}

.fa-arrow-alt-circle-right {
  color: #00468b;
}

.selfie-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-image: linear-gradient(
      rgba(9, 37, 42, 0.45),
      rgba(9, 37, 42, 0.45)
    ),
    url("../assets/Asset-selfie-bg.png");
  background-size: cover;
}
.match {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00468b;
  border-radius: 20px;
}
img {
}
.card-puzzle {
  height: 100px;
  margin-bottom: 30px;
}

.card-camera {
  height: 100px;
  margin-bottom: 30px;
}

.links {
  color: #00468b;
  font-weight: bold;
  text-decoration: underline;
  text-underline-position: under;
}
</style>
