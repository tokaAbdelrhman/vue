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
  <!-- <link rel="stylesheet" href="task3.css"> -->
  <div class="rigth2">
    <div class="i1"><i class="fa-solid fa-bell"></i></div>
    <div class="next">5</div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.fa-bell {
  font-size: 30px;
}
.rigth2 .i1 {
  padding: 10px;
  align-self: center;
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.rigth2 .next {
  margin-top: -40px;
  margin-left: 40px;
  color: white;
  line-height: 15px;
  font-size: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: linear-gradient(
    134.38deg,
    #f539f8 0%,
    #c342f9 43.55%,
    #5356fb 104.51%
  );
}
</style>
