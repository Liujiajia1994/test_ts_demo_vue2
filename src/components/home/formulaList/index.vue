<template>
  <div class="list_container">
    <div
      v-for="(item, index) in formulaList"
      :key="index"
      class="item"
      @click="jumpToCalculator(item)"
    >
      <span>{{ item.name }}</span>
      <img src="@/assets/arrow.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
interface Formula {
  name: string
  id: number
}
// interface FormulaList {
//   [index: number]: Formula
// }
export default defineComponent({
  data() {
    return {
      formulaList: [
        {
          name: '等额本息',
          id: 1,
        },
        {
          name: '等额本金',
          id: 2,
        },
        {
          name: '先息后本',
          id: 3,
        },
        {
          name: '先本后息',
          id: 4,
        },
      ]
    }
  },
  methods: {
    jumpToCalculator(item: Formula): void {
      let id: string = String(item.id)
      this.$router.push({ name: 'calculator', params: { id } })
    }
  }
})
</script>

<style lang="scss" scoped>
.list_container {
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  margin-right: 18px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 0px 20px 0px rgba(77, 94, 111, 0.13);
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 18px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 14px;
    border-bottom: 1px solid #f7f7f7;
    > img {
      width: 8px;
      height: 8px;
    }
    > span {
      flex: 1;
    }
  }
}
</style>
