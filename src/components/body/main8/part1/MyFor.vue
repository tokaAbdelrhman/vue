<template>
  <div><MyHead /></div>
  <div class="two">
    <div v-for="person in persons" :key="person.id">
      <span>
        <img :src="person.img" alt="" />

        <div class="ps">
          <h4>{{ person.t1 }}</h4>
          <p>{{ person.t2 }}</p>
        </div>
      </span>
      <div>
        <PesonIaVue />
      </div>
    </div>
  </div>
</template>
<script>
import MyHead from "@/components/body/main8/part1/MyHead.vue";
import PesonIaVue from "@/components/body/main8/part1/MyPerson.vue";
export default {
  data() {
    return {
      persons: [
        {
          id: 1,
          img: require("../../../../assets/creator-1.png"),
          t1: "Alpert Flores",
          t2: "broklnsimons_445",
        },
        {
          img: require("../../../../assets/creator-2.png"),
          t1: "Alpert Flores",
          t2: "broklnsimons_56",
          id: 2,
        },
        {
          img: require("../../../../assets/creator-3.png"),
          t1: "Alpert Flores",
          t2: "broklnsimons_77",
          id: 3,
        },
        {
          img: require("../../../../assets/creator-4.png"),
          t1: "Alpert Flores",
          t2: "broklnsimons_72",
          id: 4,
        },
      ],
    };
  },
  components: { PesonIaVue, MyHead },
};
</script>
<style scoped>
.two {
  margin-top: 30px;
}
span {
  display: flex;
  flex-direction: row;
}
.two div {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 10px;
}
.two img {
  width: 38px;
  height: 38px;
  margin-top: 10px;
}
.two .ps {
  padding-left: 10px;
  flex-direction: column;
  display: flex;
  margin-top: -5px;
}
.two .ps p {
  font-size: 12px;
  margin-top: -20px;
}
</style>
