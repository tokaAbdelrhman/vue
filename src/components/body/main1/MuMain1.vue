<template>
  <div class="main1">
    <MyText1 />
    <MyText2Vue />
    <BigCon />
    <MyLastVue />
    <MyImageVue />
  </div>
</template>
<script>
import MyText1 from "@/components/body/main1/MyText1.vue";
import MyText2Vue from "@/components/body/main1/MyText2.vue";
import MyLastVue from "@/components/body/main1/MyLast.vue";
import BigCon from "@/components/body/main1/BigCon.vue";
import MyImageVue from "@/components/body/main1/MyImage.vue";
export default {
  components: { MyText1, MyText2Vue, MyLastVue, BigCon, MyImageVue },
};
</script>
<style scoped>
.main1 {
  padding: 30px;
  gap: 15px;
  display: flex;
  flex-flow: column wrap;
  color: white;
  background-image: url(@/assets/banner-bg.png);
  border-radius: 20px;
  margin-top: 30px;
}
</style>
