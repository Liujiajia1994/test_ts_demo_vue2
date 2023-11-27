<template>
  <div class="home">
    <!-- top_banner -->
    <top-banner></top-banner>
    <!-- 输入框 -->
    <div class="input">输入框</div>
    <!-- <van-cell-group inset>
      <van-field v-model="text" label="文本" placeholder="请输入用户名" />
    </van-cell-group> -->
    <!-- 期限&二选一  -->
    <div class="menu_select">期限&二选一产品</div>
    <!-- 功能banner-1 -->
    <div class="middle_banner">功能banner-middle </div>
    <!-- 列表 -->
    <div class="main_list">列表</div>
    <!-- 功能banner-2 -->
    <div class="bottom_banner">功能banner-down </div>
    <!-- 底部区间（营销&底部按钮） -->
    <div class="footer">底部区间（营销&底部按钮） </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import topBanner from "@/components/home/topBanner/index.vue"; // @ is an alias to /src
// import { ref } from 'vue';
@Component({
  components: {
    topBanner,
  },
})
export default class HomeView extends Vue {
  message: string = "hello vue";
  text: string = "";
  // topBannerType: string = "common"
  onClick(): void {
    window.alert(this.message)
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
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

