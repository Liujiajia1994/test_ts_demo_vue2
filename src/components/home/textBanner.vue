<template>
  <div class="newtopbanner" @click.stop="topBannerClick">
        <div class="topbannerBack">
            <p
                class="topbannertitle"
                :class="{
                    topbannertitle1: bannerInfo && bannerInfo.bannerType === 'telemarketing',
                }"
                v-html="bannerInfo.bannerText"
            ></p>
        </div>
        <img
            v-if="bannerInfo && bannerInfo.bannerType === 'telemarketing'"
            class="topbannerIcon"
            src="./images/topbanner_telemarketing_new@2x.png"
        />
        <img v-else class="topbannerIcon" src="./images/topbanner_tip_new@2x.png" />
        <img
            v-if="showArrow"
            class="topbannerArrowIcon"
            src="./images/topbanner_arrow_new@2x.png"
        />
        <div
            v-if="bannerInfo && bannerInfo.bannerType === 'miniCompanyAuth'"
            class="topbanner_btn"
        >
            领额度
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class textBanner extends Vue {
  @Prop(Object) bannerInfo: any = {}
  // 计算属性
  get showArrow(): Boolean {
    let isShowArrow = false;
    if (this.bannerInfo.bannerUrl || this.bannerInfo.bannerType === 'trainAmount') {
        isShowArrow = true;
    }
    return isShowArrow;
  }
  // 方法
  topBannerClick(): void {
    const isShowArrow = this.showArrow;
    if (isShowArrow) {
      const link = this.bannerInfo.bannerUrl;
      if (link) {
        if (window.PPDWebUI && window.PPDWebUI.os.inApp) {
          window.PPDWebUI.CommonService.openUrl({ url: link });
        } else {
          window.location.href = link;
        }
      } else if (this.bannerInfo.bannerType === 'trainAmount') {
        this.$emit('topBannerClick', this.bannerInfo.showVideo);
      }
    }
  }
}
</script>