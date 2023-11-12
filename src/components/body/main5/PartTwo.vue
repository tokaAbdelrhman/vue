<template>
  <div class="part2Main5">
    <h3>Top Buyer</h3>

    <div class="desc-person">
      <div class="person1">
        <img class="imga" src="@/assets/seller-1.png" alt="" />
        <img class="varify" src="@/assets/verfify-sign.png" alt="" />

        <p class="p1">Brkon Somin</p>
        <p class="p2">@brkonSomin_75</p>
        <div class="doms">
          <img class="dom" src="@/assets/diamond-icon.png" alt="#" />
          <p class="p3">7453 Items</p>
        </div>
      </div>
      <div class="person2">
        <img class="imga" src="@/assets/seller-2.png" alt="" />
        <img class="varify" src="@/assets/verfify-sign.png" alt="" />
        <p class="p1">Brkon Somin</p>
        <p class="p2">@brkonSomin_75</p>
        <div class="doms">
          <img class="dom" src="@/assets/diamond-icon.png" alt="#" />
          <p class="p3">7453 Items</p>
        </div>
      </div>
      <div class="person3">
        <img class="imga" src="@/assets/seller-4.png" alt="" />
        <img class="varify" src="@/assets/verfify-sign.png" alt="" />
        <p class="p1">Brkon Somin</p>
        <p class="p2">@brkonSomin_75</p>
        <div class="doms">
          <img class="dom" src="@/assets/diamond-icon.png" alt="#" />
          <p class="p3">7453 Items</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.desc-person {
  width: fit-content;
}
.desc-person p {
  margin-bottom: 1px;
  margin-top: 0px;
}

.part1Main5 {
  width: 480px;
  margin-right: 20px;
  padding-left: 20px;
}
.desc-person {
  gap: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.desc-person .imga img {
  width: 54px;
  height: 54px;
}
.desc-person .varify img {
  width: 18px;
  height: 17px;
  margin-left: -100px;
}
.desc-person .varify {
  margin-left: -20px;
  margin-bottom: 40px;
}
.desc-person .p1 {
  font-weight: bold;
  font-size: 13px;
}
.desc-person .p2 {
  font-size: 14px;
  color: gray;
}
.desc-person .p3 {
  font-size: 13px;
  color: blue;
}
.desc-person .doms {
  display: flex;
  flex-direction: row;
}
.desc-person .dom img {
  width: 5px;
  height: 5px;
}
</style>
