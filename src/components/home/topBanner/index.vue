<template>
  <div class="container">
    <img :src="bannerData.url" />
    <div class="banner_text">{{ bannerData.text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      bannerData: {
        url: require('./images/tip@2x.png'),
        text: '这是一条横幅标语～',
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  background-color: white;
  margin-bottom: 10px;
  > img {
    width: 27px;
    height: 27px;
    z-index: 1;
  }
  .banner_text {
    width: 100%;
    height: 25px;
    margin-left: -10px;
    padding-left: 20px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    background-color: #fff5e5;
    color: #f68b00;
    font-weight: bold;
    font-size: 12px;
    line-height: 25px;
  }
}
</style>
