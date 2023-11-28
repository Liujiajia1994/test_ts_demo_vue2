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
import { defineComponent } from 'vue';
import route from '../../router'

export default defineComponent({
  data() {
    return {
      time: 1,
    }
  },
  created() {
    console.log('11111')
    this.goHome()
  },
  methods: {
    goHome(): void {
      setInterval(() => {
        this.time--
        if (this.time === 0) {
          route.push('/')
        }
      }, 1000)
    }
  },
})
</script>
