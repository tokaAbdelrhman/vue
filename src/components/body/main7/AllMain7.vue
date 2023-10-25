<template>
  <div class="main7">
    <PartOne />
    <PartTwo />
  </div>
</template>
<script>
import PartOne from "@/components/body/main7/PartOne.vue";
import PartTwo from "@/components/body/main7/ParTwo.vue";
export default {
  components: {
    PartOne,
    PartTwo,
  },
};
</script>
<style scoped>
.main7 div {
  margin-top: 20px;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 10px;
}

.main7 {
  margin-top: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
}
</style>
