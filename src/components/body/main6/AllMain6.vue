<template>
  <div class="main6">
    <MyHeadOne />
    <div class="two">
      <HeaderTwo />
      <MyActiveVue />
      <MyCompleteVue />
      <MyActiveVue />
      <MyCompleteVue />
      <MyActiveVue />
      <MyCompleteVue />
    </div>
  </div>
</template>
<script>
import MyHeadOne from "@/components/body/main6/MyHeadOne.vue";
import HeaderTwo from "@/components/body/main6/HeaderTwo.vue";
import MyCompleteVue from "@/components/body/main6/MyComplete.vue";
import MyActiveVue from "@/components/body/main6/MyActive.vue";
export default {
  components: { MyHeadOne, HeaderTwo, MyCompleteVue, MyActiveVue },
};
</script>
<style scoped>
.main6 .two {
  display: grid;
  grid-template-rows: repeat(6, auto);
}
.main6 {
  background-color: white;
  border-radius: 20px;
  padding: 10px;
}
</style>
