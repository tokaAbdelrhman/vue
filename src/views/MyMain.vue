<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Open+Sans:ital,wght@0,300;1,300&family=Work+Sans:ital,wght@0,200;0,400;0,900;1,300;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  />
  <div class="main">
    <div class="aside">
      <MenuBar />
    </div>
    <div class="section">
      <div><MyMainHeader /></div>
      <div><MuMain1 /></div>
      <div><MainCoVue /></div>
      <div>
        <MyMain3Vue />
        <MuTempVue />
      </div>
      <div>
        <AllMain />
      </div>
      <div><AllMain6Vue /></div>
      <div>
        <AllMain7 />
      </div>
      <div><Main8All /></div>
    </div>
  </div>
</template>
<script>
import MyMain3Vue from "@/components/body/main3/MyMain3.vue";
import MainCoVue from "@/components/body/main2/MainCon.vue";
import MyMainHeader from "@/components/header/MyMainHeader.vue";
import MenuBar from "@/components/aside/MenuBar.vue";
import MuMain1 from "@/components/body/main1/MuMain1.vue";
import MuTempVue from "@/components/body/main3/MuTemp.vue";
import AllMain from "@/components/body/main4/AllMain4.vue";
import AllMain6Vue from "@/components/body/main6/AllMain6.vue";
import AllMain7 from "@/components/body/main7/AllMain7.vue";
import Main8All from "@/components/body/main8/Main8All.vue";
export default {
  components: {
    Main8All,
    MyMain3Vue,
    MyMainHeader,
    MenuBar,
    MuMain1,
    MainCoVue,
    MuTempVue,
    AllMain,
    AllMain6Vue,
    AllMain7,
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 0px; */
  color: #374557;
  background-color: #ebe2fd;
}
.main {
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: 280px auto;
}

.section {
  padding-left: 20px;
  padding-right: 20px;
  margin: 0px;
  height: 100%;
}
.aside {
  padding: 10px;
  background-color: white;
  cursor: pointer;
}
</style>
