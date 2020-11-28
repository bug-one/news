<template>
  <div class="share">
    <span
      :class="{
        iconfont: true,
        icondianzan: true,
        like: postData.has_like,
      }"
      @click="like"
      ><span :class="{ like: postData.has_like }">{{
        postData.like_length
      }}</span></span
    >
    <span class="iconfont iconweixin"> <span>微信</span></span>
  </div>
</template>

<script>
export default {
  props: ["postData"],
  methods: {
    like() {
      this.$axios({
        url: "/post_like/" + this.$route.params.id,
      }).then((res) => {
        if (res.data.message == "点赞成功") {
          this.postData.has_like = !this.postData.has_like;
          this.postData.like_length++;
          this.$toast({
            message: "已点赞 ♥",
            position: "bottom",
          });
        } else {
          this.postData.has_like = !this.postData.has_like;
          this.postData.like_length--;
          this.$toast({
            message: "取消点赞",
            position: "bottom",
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.share {
  display: flex;
  justify-content: space-evenly;
  padding: 20 / 360 * 100vw 0;
  .icondianzan,
  .iconweixin {
    display: inline-block;
    border: 1px solid #444;
    font-size: 16 / 360 * 100vw;
    height: 24 / 360 * 100vw;
    line-height: 24 / 360 * 100vw;
    padding: 0 14 / 360 * 100vw;
    border-radius: 12 / 360 * 100vw;
    span {
      margin-left: 4 / 360 * 100vw;
      color: #333;
      font-size: 12 / 360 * 100vw;
      &.like {
        color: #fff;
      }
    }
    &.like {
      color: #fff;
      background-color: rgb(255, 46, 92);
    }
  }
  .iconweixin {
    color: #03c903;
  }
}
</style>