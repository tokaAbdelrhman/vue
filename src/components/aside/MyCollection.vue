<template>
  <div>
    <span>
      <span class="b5">
        <i class="fa-solid fa-star"></i>
      </span>
      <span> <h3>My Collection</h3> </span>
    </span>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
div {
  margin-left: 30px;
}
span {
  display: inline-block;
  color: gray;
  margin-left: 10px;
}

span h3:hover {
  color: blue;
}
.b5 .fa-star {
  width: 15px;
  height: 15px;
}
.b5:hover {
  background-color: #5356fb;
  fill: white;
}
.b5 {
  background-color: #eee;
  border-radius: 100%;
  padding: 8px;
}
</style>
