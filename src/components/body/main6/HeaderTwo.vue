<template>
  <div class="r">
    <h4 class="pro">All Products</h4>
    <h4>Value</h4>
    <h4>USD</h4>
    <h4>24H%</h4>
    <h4 class="sp">Bids</h4>
    <h4>Time</h4>
    <h4 class="pro2">Status</h4>
  </div>
</template>
<script>
export default {};
</script>
<style>
.r {
  display: flex;
  flex-flow: row wrap;
  color: gray;
  border-bottom: 1px solid blue;
  margin-top: 5px;
}
.r h4 {
  padding-left: 50px;
}
.r .pro2 {
  width: 10%;
  margin-left: 48px;
}
.r .pro {
  margin-left: -40px;
  width: 20%;
}
.r .sp {
  padding-left: 50px;
}
</style>
