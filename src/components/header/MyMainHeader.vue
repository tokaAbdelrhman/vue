<template>
  <div class="head-con">
    <div class="head">
      <MySearchVue />
      <MyPlusVue />
      <MyBell />
      <MyPhotoVue />
    </div>
  </div>
</template>
<script>
import MySearchVue from "@/components/header/MySearch.vue";
import MyBell from "@/components/header/MyBell.vue";
import MyPhotoVue from "@/components/header/MyPhoto.vue";
import MyPlusVue from "@/components/header/MyPlus.vue";
export default {
  components: {
    MySearchVue,
    MyPhotoVue,
    MyPlusVue,
    MyBell,
  },
};
</script>
<style scoped>
.head-con {
  padding-top: 30px;
  position: sticky;
  display: flex;
  align-items: center;
  z-index: 5000;
  border-bottom: 1px solid rgba(142, 130, 235, 0.6);
  top: 0px;
}
.head {
  gap: 50px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
</style>
