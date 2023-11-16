<template>
  <div>
    <h1>404</h1>
    <p>
      页面将在{{ time }}秒后自动跳转到首页<br />
      您也可以点击这里跳转<a href="/" />首页
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import route from '../../router';

 // 及时没有组件，也要加上
@Component
export default class errorView extends Vue {
  private time: number = 1;
  private created() {
    console.log('11111')
    this.goHome();
  }
  private goHome(): void {
    setInterval(() => {
      this.time--;
      if (this.time === 0) {
        route.push('/');
      }
    },1000)
  }
}
</script>