<template>
  <div class="one">
    <div class="texts">
      <h4>Sell History</h4>
      <div class="blue">
        <div class="blue1"></div>
        <div class="blue2">Avg: Sell Price</div>
      </div>
      <div class="pink">
        <div class="pink1"></div>
        <div class="pink2">Total Sell</div>
      </div>
      <div class="Current">Current Week</div>
    </div>

    <div class="download">
      <img src="@/assets/d1.png" alt="#" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.one {
  width: 440px;
  margin-right: 20px;
  padding-left: 20px;
}
.one .texts {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
.one .texts .blue {
  color: gray;
  font-size: 13px;
  margin-top: 22px;
  display: flex;
  flex-direction: row;
}
.one .texts .blue .blue1 {
  margin-right: 6px;
  border-radius: 100%;
  background-color: blue;
  height: 15px;
  width: 15px;
}
.one .texts .pink {
  color: gray;
  font-size: 13px;
  margin-top: 22px;
  display: flex;
  flex-direction: row;
}
.one .texts .pink .pink1 {
  margin-right: 6px;
  border-radius: 100%;
  background-color: #f539f8;
  height: 15px;
  width: 15px;
}
.one .texts .Current {
  color: #f539f8;
  font-size: 13px;
  margin-top: 22px;
}
</style>
