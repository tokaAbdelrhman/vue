<template>
  <div class="lastElem">
    <button>Place a Bid</button>
    <a href="#"> view Art Work</a>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.lastElem {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;
}
.lastElem button {
  color: white;
  background-color: #f539f8;
  width: fit-content;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 20px;
}
.lastElem a {
  color: black;
  padding-left: 10px;
}
.lastElem a:hover {
  content: "";
  color: #f539f8;
}
</style>
