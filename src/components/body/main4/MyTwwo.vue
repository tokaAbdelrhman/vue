<template>
  <div class="two">
    <div class="text">
      <h3 class="Market">Market Visitor</h3>
      <div class="lastweek">last 30 days</div>
    </div>
    <div class="download">
      <img img src="@/assets/sp.png" alt="#" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.two .text {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.two {
  width: 480px;
  margin-right: 20px;
  padding-left: 20px;
}
.two .text .lastweek {
  color: grey;
  margin-top: 20px;
  font-size: 13px;
  margin-right: 10px;
}
</style>
