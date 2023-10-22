<template>
  <MyLogeVue />
  <div>
    <h2>Menu</h2>
    <AllConVue />
  </div>
</template>
<script>
import AllConVue from "@/components/aside/AllCon.vue";
import MyLogeVue from "@/components/aside/MyLoge.vue";
export default {
  components: { MyLogeVue, AllConVue },
};
</script>
<style scoped>
h2 {
  color: blue;
  cursor: pointer;
  padding-bottom: 0px;
  margin-left: -170px;
}
</style>
