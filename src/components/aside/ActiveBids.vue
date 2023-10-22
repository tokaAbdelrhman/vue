<template>
  <div>
    <span>
      <span class="b2">
        <img src="@/assets/funfact-icon-2.png" alt="#" />
      </span>
      <span> <h3>Active Bids</h3> </span>
      <span class="la">19</span>
    </span>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
  margin-left: 25px;
}
span {
  display: inline-block;
  color: gray;
  margin-left: 10px;
}
span h3:hover {
  color: blue;
}
img {
  width: 15px;
  height: 15px;
}
.b2 {
  background-color: #eee;
  border-radius: 100%;
  padding: 8px;
}
.la {
  color: white;
  line-height: 20px;
  text-align: center;
  font-size: 15px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(
    134.38deg,
    #f539f8 0%,
    #c342f9 43.55%,
    #5356fb 104.51%
  );
}
.b2:hover {
  background-color: #5356fb;
  fill: white;
}
</style>
