<template>
  <ul>
    <li>
      <DashBar />
    </li>
    <li>
      <ActiveBids />
    </li>

    <li>
      <MarketPlaceVue />
    </li>
    <li>
      <MyWallet />
    </li>
    <li><MyCollectionVue /></li>
    <li><MySellVue /></li>
    <li><MySaved /></li>
    <li><MyMessage /></li>
  </ul>
</template>
<script>
import DashBar from "@/components/aside/DashBar.vue";
import ActiveBids from "@/components/aside/ActiveBids.vue";
import MarketPlaceVue from "@/components/aside/MarketPlace.vue";
import MyWallet from "@/components/aside/MyWallet.vue";
import MyCollectionVue from "@/components/aside/MyCollection.vue";
import MySellVue from "@/components/aside/MySell.vue";
import MySaved from "@/components/aside/MySaved.vue";
import MyMessage from "@/components/aside/MyMessage.vue";
export default {
  components: {
    ActiveBids,
    DashBar,
    MarketPlaceVue,
    MyWallet,
    MyCollectionVue,
    MySellVue,
    MySaved,
    MyMessage,
  },
};
</script>
<style>
ul li {
  list-style: none;
  margin-left: -170px;
}
</style>
