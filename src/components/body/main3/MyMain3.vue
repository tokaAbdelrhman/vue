<template>
  <div class="main3">
    <h1>Tradding Action</h1>
    <div class="btn">
      <div>
        <button class="Prev slick-arrow" style="">
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.09766 1.1499L1.13307 9.11449L9.09766 17.0791"
              stroke="url(#paint0_linear_220_23410)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_220_23410"
                x1="9.09766"
                y1="1.1499"
                x2="-4.2474"
                y2="7.96749"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F539F8"></stop>
                <stop offset="0.416763" stop-color="#C342F9"></stop>
                <stop offset="1" stop-color="#5356FB"></stop>
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button class="Next slick-arrow">
          <svg
            width="11"
            height="19"
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.34766 17.0801L9.31224 9.11549L1.34766 1.15091"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.main3 {
  display: flex;
  flex-direction: row;
}
h1 {
  margin-bottom: -30px;
}
.btn {
  display: flex;
  flex-direction: row;
  margin-left: 700px;
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>
