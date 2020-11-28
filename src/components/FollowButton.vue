<template>
  <div
    :class="{
      follow: true,
      unfollow: !postData.has_follow,
    }"
    @click="follow"
  >
    {{ postData.has_follow ? "已关注" : "关注" }}
  </div>
</template>

<script>
export default {
  props: ["postData"],
  methods: {
    follow() {
      if (this.postData.has_follow) {
        this.$axios({
          url: "/user_unfollow/" + this.postData.user.id,
        }).then((res) => {
          if (res.status == 200) {
            this.postData.has_follow = false;
            this.$toast({
              message: "取消关注",
              position: "bottom",
            });
          }
        });
      } else {
        this.$axios({
          url: "/user_follows/" + this.postData.user.id,
        }).then((res) => {
          if (res.status == 200) {
            this.postData.has_follow = true;
            this.$toast({
              message: "感谢关注",
              position: "bottom",
            });
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.follow {
  font-size: 10 / 360 * 100vw;
  border: 1px solid #ccc;
  color: #ccc;
  padding: 0 10 / 360 * 100vw;
  height: 18/ 360 * 100vw;
  line-height: 19 / 360 * 100vw;
  border-radius: 9 / 360 * 100vw;
  &.unfollow {
    background-color: rgb(255, 46, 92);
    border: 1px solid rgb(255, 46, 92);
    color: #fff;
  }
}
</style>