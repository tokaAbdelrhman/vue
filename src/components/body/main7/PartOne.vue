<template>
  <div class="part1">
    <div class="top">
      <h3>Statistics</h3>
      <div class="today">today</div>
    </div>
    <div class="sec">
      <div>
        <img src="@/assets/download.png" alt="#" />
      </div>
      <div class="Daily">
        <p>Daily Artwork Statistics</p>
        <ul>
          <li>
            <span class="blue"></span>
            Total Sold : 140
          </li>
          <li>
            <span class="pink"></span>
            Total Cancel : 12
          </li>
          <li>
            <span class="yellow"></span>
            Total Panding : 60
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.part1 .top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

.part1 .top .today {
  padding-right: 20px;
}
.part1 .Daily ul {
  list-style: none;
  margin-left: -30px;
  flex-direction: column;
  display: flex;
  padding: 0 32px;
  gap: 15px;
}
.part1 .Daily ul li {
  display: flex;
  gap: 10px;
  color: rgb(185, 183, 183);
}
.part1 .blue {
  background-color: #7b7efc;
  border-radius: 100%;
  width: 15px;
  height: 15px;
}
.part1 .pink {
  background-color: pink;
  border-radius: 100%;
  width: 15px;
  height: 15px;
}
.part1 .yellow {
  background-color: yellow;
  border-radius: 100%;
  width: 15px;
  height: 15px;
}

.sec {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.part1 {
  width: 480px;
  margin-right: 20px;
  padding-left: 20px;
}
</style>
