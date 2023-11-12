<template>
  <div class="main4">
    <PartOne />
    <PartTwo />
  </div>
</template>
<script>
import PartOne from "@/components/body/main5/PartOne.vue";
import PartTwo from "@/components/body/main5/PartTwo.vue";
export default {
  components: {
    PartOne,
    PartTwo,
  },
};
</script>
<style>
.main4 {
  margin-top: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.main4 div {
  background-color: white;
  border-radius: 20px;
  margin-bottom: 10px;
}
</style>
