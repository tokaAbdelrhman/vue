<template>
  <MyData />
  <div class="big-div">
    <div v-for="data in MyDatacon" :key="data.id">
      <div class="img1">
        <img :src="data.img" />
      </div>
      <div class="mg2">
        <img :src="data.OnImg" />
      </div>
      <div class="tex1">
        <p>
          owened By <strong>{{ data.name }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MyData from "@/components/body/main3/MyDat.vue";
export default {
  components: { MyData },
};
</script>
<style>
.big-div {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
</style>
