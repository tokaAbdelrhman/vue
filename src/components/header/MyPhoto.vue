<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Open+Sans:ital,wght@0,300;1,300&family=Work+Sans:ital,wght@0,200;0,400;0,900;1,300;1,500;1,600;1,700&display=swap"
    rel="stylesheet"
  />
  <div class="rigth3">
    <div class="im"><img src="@/assets/profile-pic.png" alt="" /></div>
    <div class="ps">
      <h4>Mr John Wick</h4>
      <p>johnwick@75</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.rigth3 {
  display: flex;
  flex-direction: row;
}
rigth3 .im img {
  width: 52px;
  height: 52px;
}

.right .rigth3 {
  gap: 10px;
}

.rigth3 .ps p {
  margin-top: -20px;
  color: grey;
}
</style>
