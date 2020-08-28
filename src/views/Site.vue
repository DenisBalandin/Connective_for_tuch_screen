<template>
  <div class="site">
    <Header />
    <iframe src="https://connectcause.com/"></iframe>
  </div>
</template>
<script type="text/javascript">
import Header from "@/components/Header.vue";

export default {
  name: "site",
  components: {
    Header
  }
};
</script>

<style scoped lang="css">
iframe {
  width: 1920px;
  height: 829px;
}
</style>
