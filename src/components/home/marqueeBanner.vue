<template>
  <div class="marqueeBanner">
    <div class="topbannerBack">
      <div class="topbannerBackMid">
        <marquee-text class="marqueeText" :repeat="5" :duration="30">
          {{ marqueeTopText }}
      </marquee-text>
      </div>
    </div>
    <img  class="topbannerIcon" :src="imgSrc"/>
  </div>
</template>
<script lang="ts">
import MarqueeText from "vue-marquee-text-component";
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {
    MarqueeText,
  }
})
export default class marqueeBanner extends Vue {
  @Prop(String) imgSrc: string = ''
  @Prop(String) marqueeTopText: string = ''
};
</script>
<style lang="scss" scoped>

// @import "../../style/util.scss";
.marqueeBanner {
  // position: relative;
  // width: 100%;
  // height: 100%;

  .topbannerBack {
      position: absolute;
      top: 14px;
      left: 13px;
      width: 100%;
      height: 25px;
      background: #E6FFF9;
      border-radius: 0px 67px 67px 0px;
      padding-right: 10px;
  }
  .topbannerIcon{
      position: absolute;
      width: 27px;
      height: 27px;
      top: 13px;
  }
  .topbannerBackMid{
      margin-left: 18px;
  }

.marqueeText {
     padding-top: 4px;
      height: 18px;
      font-size: 11px;
      font-weight: bold;
      color: #22A491;
      line-height: 18px;
}
}
.marquee-text-text {
  animation-delay: 2s;
  padding-right: pxToVw(54);
  animation-duration: 30s !important;
}
</style>
