<template>
  <div class="header">
    <div @click="goBack" class="back_btn">
      <img src="../assets/icons/Asset-back-arrow.png" alt="Arrow Back" />
    </div>
    <div @click="goHome">
      <img
        class="main-logo"
        alt="Connect logo"
        src="../assets/LogoConnect.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 1fr;
  align-self: stretch;
  justify-self: stretch;
  position: relative;
  z-index: 3;
  border-bottom: 1px solid #eaeaea;

}
.main-logo {
  padding: 40px;
  max-width: 508px;
  height: 163px;
}
.header .back_btn {
  backface-visibility: visible;
  position: fixed;
  display: inline-block;
  font-size: 60px;
  color: #00b8b0;
  left: 100px;
  top: 80px;
}
</style>
