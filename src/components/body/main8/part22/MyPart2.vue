<template>
  <div>
    <MyOne />
  </div>
  <div class="two">
    <div v-for="a in all" :key="a.id">
      <img :src="a.img" alt="#" />

      <div class="ps">
        <h4>{{ a.text }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
import MyOne from "@/components/body/main8/part22/MyOne.vue";
export default {
  components: { MyOne },
  data() {
    return {
      all: [
        {
          id: 1,
          img: require("@/assets/platform-1.png"),
          text: "Open Sea",
        },
        {
          id: 2,
          img: require("@/assets/platform-2.png"),
          text: "Ralible",
        },
        {
          id: 3,
          img: require("@/assets/platform-3.png"),
          text: "Myth",
        },
        {
          id: 4,
          img: require("@/assets/platform-4.png"),
          text: "KnownOrgin",
        },
      ],
    };
  },
};
</script>
<style scoped>
.two img {
  width: 40px;
  height: 41px;
  margin-top: 5px;
}
.two div {
  flex-direction: row;
  display: flex;
  justify-content: start;
  gap: 10px;
}
.two {
  margin-top: 30px;
}
.two .ps {
  color: grey;
  margin-top: 0px;
}
</style>
