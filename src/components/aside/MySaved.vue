<template>
  <span class="b7">
    <i class="fa-regular fa-heart"></i>
  </span>
  <span> <h3>Saved</h3> </span>
  <span class="la7">32</span>
</template>
<script>
export default {};
</script>
<style scoped>
span {
  display: inline-block;
  color: gray;
  margin-left: 10px;
}
span h3:hover {
  color: blue;
}
.nftmax-svg-icon {
  width: 15px;
  height: 15px;
}
.b7:hover {
  background-color: #5356fb;
  fill: white;
}
.b7 {
  background-color: #eee;
  border-radius: 100%;
  padding: 8px;
}
.la7 {
  margin: 10px;
  color: white;
  line-height: 20px;
  text-align: center;
  font-size: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(172, 46, 46);
}
</style>
