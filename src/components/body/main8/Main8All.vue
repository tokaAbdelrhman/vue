<template>
  <div class="main8">
    <div class="part1">
      <MyFor />
    </div>
    <div class="part2">
      <MyPart2Vue />
    </div>
  </div>
</template>
<script>
import MyFor from "@/components/body/main8/part1/MyFor.vue";
import MyPart2Vue from "@/components/body/main8/part22/MyPart2.vue";
export default {
  components: { MyPart2Vue, MyFor },
};
</script>
<style scoped>
.main8 div {
  margin-top: 20px;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 10px;
}
.main8 {
  margin-top: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
}
.main8 .part1,
.main8 .part2 {
  width: 480px;
  margin-right: 20px;
  padding-left: 20px;
}
</style>
