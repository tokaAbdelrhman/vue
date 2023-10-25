<template>
  <div class="main4">
    <MyOne />
    <MyTwo />
  </div>
</template>
<script>
import MyOne from "@/components/body/main4/MyOne.vue";
import MyTwo from "@/components/body/main4/MyTwwo.vue";
export default {
  components: {
    MyOne,
    MyTwo,
  },
};
</script>
<style scoped>
.main4 div {
  background-color: white;
  border-radius: 20px;
  margin-bottom: 10px;
  justify-content: space-between;
}
.main4 {
  margin-top: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
