<template>
  <div class="part2">
    <div class="ETHrate">
      <!-- <img src=" @/assets/eth-icon.png" alt="" /> -->
      <h3>ETHrate</h3>
    </div>
    <h3>$7473.67 USD</h3>
    <div class="gre">+324.75 (11.5%)</div>
    <div>
      <img src="@/assets/d2.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.part2 {
  width: 480px;
  margin-right: 20px;
  padding-left: 20px;
}
.part2 .gre {
  color: green;
}
.part2 h3:hover {
  color: blue;
}
.part2 .ETHrate {
  display: flex;
  flex-direction: row;
}
.part2 .ETHrate img {
  border-radius: 100%;
  height: 50px;
  width: 50px;
}
</style>
