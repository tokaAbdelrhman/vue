<template>
  <div class="r">
    <div class="div1">
      <img src="@/assets/trending-img-4.png" alt="#" />
      <div class="text">
        <h4>Mullican Computer Joy</h4>
        <p>Owned by <span>Xoeyam</span></p>
      </div>
    </div>
    <div class="div2">
      <img src="@/assets/eth-icon.png" alt="#" />
      <p>7473 ETH</p>
    </div>
    <div class="div3">
      <img src="@/assets/usd-icon.png" alt="#" />
      <p>6392.99$</p>
    </div>
    <div class="div4">-24.75 (11.5%)</div>
    <div class="div5">343</div>
    <div class="div6">2Hours1min30s</div>
    <div class="div7">
      <input type="text" value="Active" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.r .div1 {
  display: flex;
  flex-flow: row wrap;
}
.r .div1 img {
  width: 48px;
  height: 48px;
  border-radius: 100%;
}
.r .text {
  margin-top: 30px;
  margin-left: -50px;
}
.r .div1 h4 {
  margin-bottom: 0px;
  margin-left: -42px;
}
.r .div1 p {
  margin-top: 0px;
}
.r .div1 span {
  color: blue;
}
.r .div2 {
  margin-top: 40px;
  margin-left: 70px;
}
.r .div2 img {
  width: 18px;
  height: 18px;
  border-radius: 100%;
}
.r .div2 p {
  font-size: 13px;
  margin-top: 0px;
  margin-left: -10px;
}
.r .div3 {
  margin-top: 40px;
  margin-left: 60px;
}
.r .div3 img {
  width: 18px;
  height: 18px;
  border-radius: 100%;
}
.r .div3 p {
  font-size: 13px;
  margin-top: 0px;
  margin-left: -10px;
}
.r .div4 {
  margin-top: 50px;
  margin-left: 20px;
  font-size: 13px;
  color: red;
}
.r .div5 {
  margin-top: 50px;
  margin-left: 30px;
  font-size: 13px;
}
.two .r .div6 {
  margin-top: 50px;
  margin-left: 40px;
  font-size: 13px;
}
.r .div7 input {
  margin-left: 50px;
  margin-top: 40px;
  border-radius: 20px;
  background-color: blue;
  border: none;
  outline: none;
  color: white;
  padding: 10px;
  width: 40px;
  font-weight: bolder;
}
</style>
