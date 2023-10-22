<template>
  <div class="main3">
    <div class="big-div">
      <div v-for="data in MyDatacon" :key="data.id">
        <div class="img1">
          <img :src="data.img" />
        </div>
        <div class="mg2">
          <img :src="data.OnImg" />
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
  data() {
    return {
      MyDatacon: [
        {
          id: 1,
          img: "@/assets/img/trending-img-4.png",
          OnImg: "@/assets/author-pic.png",
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 2,
          img: "@/assets/trending-img-2.png",
          OnImg: "@/assets/author-pic.png",
          name: "Brokin sominal",
          par: "Interconnected Planes",
        },
        {
          id: 3,
          img: "@/assets/trending-img-3.png",
          OnImg: "@/assets/author-pic.png",
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 4,
          img: "@/assets/trending-img-4.png",
          OnImg: "@/assets/author-pic.png",
          name: "Biloat Jasmin",
          par: "Interconnected Planes",
        },

        {
          id: 5,
          img: "https://nftmaxl.quomodothemes.website/assets/img/trending-img-1.png",
          OnImg: "@/assets/author-pic.png",
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 6,
          img: "@/assets/trending-img-2.png",
          OnImg: "@/assets/author-pic.png",
          name: "Brokin sominal",
          par: "Interconnected Planes",
        },
        {
          id: 7,
          img: "@/assets/trending-img-3.png",
          OnImg: "@/assets/author-pic.png",
          name: "Biloat Jasmin",
          par: "Locked And Lob X Fixed",
        },
        {
          id: 8,
          img: "@/assets/trending-img-4.png",
          OnImg: "@/assets/author-pic.png",
          name: "Biloat Jasmin",
          par: "Interconnected Planes",
        },
      ],
    };
  },
};
</script>
<style scoped>
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
</style>
