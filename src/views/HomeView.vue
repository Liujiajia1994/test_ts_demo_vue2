<template>
  <div class="home">
    <!-- top_banner -->
    <top-banner></top-banner>
    <formula-list></formula-list>
    <!-- <van-button type="default">默认按钮</van-button> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import topBanner from "@/components/home/topBanner/index.vue"; // @ is an alias to /src
import formulaList from "@/components/home/formulaList/index.vue";

@Component({
  components: {
    topBanner,
    formulaList,
  },
})
export default class HomeView extends Vue {
  message: string = "hello vue";
  text: string = "";
  onClick(): void {
    window.alert(this.message)
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #edf3f9 50%,  #fff 100%)
}
.top_banner {
  width: 100%;
  height: 25px;
  background-color: aquamarine;
}
.input {
  width: 100%;
  height: 128px;
  background-color: beige;
}
.menu_select {
  width: 100%;
  height: 150px;
  background-color:bisque;
}
.middle_banner {
  width: 100%;
  height: 100px;
  background-color: azure;
}
.main_list {
  width: 100%;
  height: 200px;
  background-color: antiquewhite;
}
.bottom_banner {
  width: 100%;
  height: 100px;
  background-color: azure;
}
.footer {
  width: 100%;
  height: 60px;
  background-color: cadetblue;
}
</style>

