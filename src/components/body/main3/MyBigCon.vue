<template>
  <div class="con-big">
    <div class="con">
      <div class="par1">
        <p>cuttent Bid</p>
        <h4>123456</h4>
      </div>
      <div class="middle"></div>
      <div class="part2">
        <p>Remaing Time</p>
      </div>
    </div>
    <div class="middle"></div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.con-big {
  width: 215px;
  border-radius: 8px;
  border: 1px solid rgb(223, 221, 221);
}
.con-big .con {
  display: flex;
  flex-direction: row;
  font-size: 15px;
}
.con-big .middle {
  margin-left: 15px;
  width: 1px;
  background-color: rgb(223, 221, 221);
}
.con-big .con h4 {
  margin-top: 0px;
}
</style>
