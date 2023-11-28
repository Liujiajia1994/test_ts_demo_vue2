<template>
  <div class="container">
    <h3>公式</h3>
    每月还款：{{ formula }}
  </div>
</template>

<script lang="ts">
// import { number } from "mathjs";
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      formula: '1',
    }
  },
  created(): void {
    const formulaId = Number(this.$route.params.id)
    switch (formulaId) {
      case 1:
        this.formula = 'PMT1 = P * r * [ (1 + r)^n / (( 1 + r)^n - 1) ]'
        break
      case 2:
        this.formula = 'PMT2 = P * r * [ (1 + r)^n / (( 1 + r)^n - 1) ]'
        break
      case 3:
        this.formula = 'PMT3 = P * r * [ (1 + r)^n / (( 1 + r)^n - 1) ]'
        break
      case 4:
        this.formula = 'PMT4 = P * r * [ (1 + r)^n / (( 1 + r)^n - 1) ]'
        break
    }
  }
})
</script>

<style lang="scss" scoped></style>
