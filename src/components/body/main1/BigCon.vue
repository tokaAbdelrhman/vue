<template>
  <div class="contain-big">
    <div class="contain">
      <div class="part1">
        <p>Current Bid</p>
        <h3>75320 ETH</h3>
        <p>773.69 USD</p>
      </div>
      <div class="middle"></div>
      <div class="part2">
        <p>Remaing Time</p>
        <h3>02:12:50</h3>
        <span> Hrs Min Sec </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.contain-big {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #7b7efc;
  width: 400px;
  border-radius: 20px;
  height: 150px;
}

.contain-big .contain {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 35px;
  margin-bottom: 15px;
  width: 100%;
}

.contain-big .contain .middle {
  background: #7b7efc;
  width: 1px;
  height: 100%;
}

.contain-big .contain p {
  margin: 1px;
  padding: 1px;
}

.contain-big .contain h3 {
  margin: 1px;
  padding: 1px;
}
</style>
