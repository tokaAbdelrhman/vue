<template>
  <router-view />
  <MyMainVue />
</template>
<script>
import MyMainVue from "@/views/MyMain.vue";
export default {
  components: {
    MyMainVue,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: rgb(185, 14, 43);
    }
  }
}
</style>
