<template>
  <div class="main3">
    <div class="btn">
      <div>
        <button class="Prev slick-arrow" style="" @click="deleteSlide()">
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
        <button class="Next slick-arrow" @click="slide()">
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
    <div class="big-div">
      <div
        v-for="data in MyDatacon.slice(
          pageNum * pageItemsCount,
          (pageNum + 1) * pageItemsCount
        )"
        :key="data.id"
        class="imp"
      >
        <div class="img1">
          <img :src="data.img" />
        </div>
        <div class="img2">
          <img :src="data.OnImg" :alt="data.id" />
        </div>
        <div class="tex1">
          <p>
            owened By <strong>{{ data.name }}</strong>
          </p>
          <p class="im">
            {{ data.par }}
          </p>
        </div>
        <MyBig />
        <LastELem />
      </div>
    </div>
  </div>
</template>

<script>
import LastELem from "@/components/body/main3/LastElemet.vue";
import MyBig from "@/components/body/main3/MyBigCon.vue";
export default {
  components: {
    LastELem,
    MyBig,
  },
  mounted() {},
  methods: {
    slide() {
      this.pageNum++;
      if (this.pageNum * this.pageItemsCount >= this.MyDatacon.length) {
        this.pageNum = 0;
      }
    },

    deleteSlide() {
      this.pageNum--;
      if (this.pageNum < 0) {
        this.pageNum = 0;
      }
    },
  },
  data() {
    return {
      MyDatacon: [
        {
          id: 1,
          img: require("@/assets/trending-img-3.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 2,
          img: require("@/assets/trending-img-2.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Brokin sominal",
          par: "Interconnected Planes",
        },
        {
          id: 3,
          img: require("@/assets/trending-img-3.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 4,
          img: require("@/assets/trending-img-4.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Interconnected Planes",
        },
        {
          id: 5,
          img: require("@/assets/trending-img-2.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 6,
          img: require("@/assets/trending-img-2.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Brokin sominal",
          par: "Interconnected Planes",
        },
        {
          id: 7,
          img: require("@/assets/trending-img-4.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 8,
          img: require("@/assets/trending-img-3.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Interconnected Planes",
        },
        {
          id: 9,
          img: require("@/assets/trending-img-2.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 10,
          img: require("@/assets/trending-img-2.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Brokin sominal",
          par: "Interconnected Planes",
        },
        {
          id: 11,
          img: require("@/assets/trending-img-3.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 12,
          img: require("@/assets/trending-img-2.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Interconnected Planes",
        },
        {
          id: 13,
          img: require("@/assets/trending-img-3.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 14,
          img: require("@/assets/trending-img-2.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Brokin sominal",
          par: "Interconnected Planes",
        },
        {
          id: 15,
          img: require("@/assets/trending-img-3.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 16,
          img: require("@/assets/trending-img-3.png"),
          OnImg: require("@/assets/author-pic.png"),
          name: "Biloat Jasmin",
          par: "Interconnected Planes",
        },
      ],
      pageNum: 0,
      pageItemsCount: 4,
    };
  },
};
</script>
<style scoped>
.main3 .big-div .img1 img {
  width: 220px;
}
.main3 .big-div .img2 img {
  width: 38px;
  height: 38px;
  margin-top: -40px;
  margin-left: 20px;
}
.main3 {
  display: grid;
  grid-template-rows: auto;
}
.big-div {
  display: grid;
  grid-template-columns: repeat(8, 252px);
  overflow: hidden;
}
.big-div div {
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-flow: column wrap;
  margin-left: 10px;
  margin-bottom: 20px;
}
.big-div .im:hover {
  content: "";
  color: #7b7efc;
}
.big-div .tex1 strong {
  color: #7b7efc;
}
.big-div .tex1 p {
  color: gray;
}
.big-div .tex1 strong:hover {
  content: "";
  color: gray;
}
.btn {
  display: flex;
  flex-direction: row;
  margin-left: 700px;
}
</style>
