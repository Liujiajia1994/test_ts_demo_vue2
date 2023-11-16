<template>
  <div class="container">
    <template v-if="type === 'marquee'">
      {{ type }}
    </template>
    <template v-else>
      
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  
})
export default class topBanner extends Vue {
  @Prop(String) type: string = "marquee"
  private created() {

  }

}

</script>
<style lang="scss">
</style>