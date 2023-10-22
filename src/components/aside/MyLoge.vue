<template>
  <div class="logo">
    <img src="@/assets/logo-white.png" alt="#" />
    <NextLogo />
  </div>
</template>
<script>
import NextLogo from "@/components/aside/NextLogo.vue";
export default {
  components: { NextLogo },
};
</script>
<style scoped>
.logo {
  display: flex;
  flex-flow: row wrap;
  cursor: pointer;
  justify-content: space-between;

  margin-top: 20px;
}
</style>
