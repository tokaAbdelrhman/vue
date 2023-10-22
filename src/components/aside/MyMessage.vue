<template>
  <div>
    <span class="b8">
      <i class="fa-solid fa-envelope"></i>
    </span>
    <span> <h3>Message</h3> </span>
    <span class="la8">32</span>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
  margin-left: 20px;
}
span {
  display: inline-block;
  color: gray;
  margin-left: 10px;
}
span h3:hover {
  color: blue;
}
.fa-envelope {
  width: 15px;
  height: 15px;
}
.b8:hover {
  background-color: #5356fb;
  fill: white;
}
.b8 {
  background-color: #eee;
  border-radius: 100%;
  padding: 8px;
  fill: black;
}
.la8 {
  margin: 10px;
  color: white;
  line-height: 20px;
  text-align: center;
  font-size: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: pink;
}
</style>
