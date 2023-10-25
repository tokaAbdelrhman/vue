<template>
  <div class="one">
    <div class="NFTSUpdate">
      <h3>All NFTS Update</h3>
      <div class="pink">435</div>
    </div>
    <div class="Categories">All Categories</div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.one {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 35px;
}
.one .NFTSUpdate {
  display: flex;
  flex-direction: row;
}
.one .Categories {
  margin-top: 20px;
  color: rgb(170, 168, 168);
}
.one .NFTSUpdate .pink {
  margin-right: 6px;
  border-radius: 100%;
  background-color: #f539f8;
  width: 28px;
  height: 28px;
  text-align: center;
  color: white;
  font-size: 12px;
  margin-top: 10px;
  margin-left: 10px;
  line-height: 28px;
}
</style>
