<template>
  <div id="userEdit">
    <headerTemplate title="编辑资料" />
    <div class="userPic">
      <img v-if="userInfo.head_img == ''" src="@/assets/默认头像.png" alt="" />
      <img v-else :src="$axios.defaults.baseURL + userInfo.head_img" alt="" />
    </div>
    <toSetTemplate title="昵称" :description="userInfo.nickname" />
    <toSetTemplate title="密码" description="******" />
    <toSetTemplate
      title="性别"
      :description="userInfo.gender == 1 ? '男孩子' : '女孩子'"
    />
  </div>
</template>

<script>
import headerTemplate from "@/components/HeaderTemplate";
import toSetTemplate from "@/components/ToSetTemplate";
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  components: {
    headerTemplate,
    toSetTemplate,
  },
  methods: {},
  created() {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    this.$axios({
      method: "get",
      headers: { authorization: token },
      url: `/user/${id}`,
    })
      .then((res) => {
        if (res.data.message == "获取成功") {
          this.userInfo = res.data.data;
        }
      })
      .catch((err) => {
        this.$toast({
          message: "服务器繁忙，请稍后再试哦！",
          position: "bottom",
        });
      });
  },
};
</script>

<style lang="less" scoped>
#userEdit {
  background-color: #f2f2f2;
  min-height: 100vh;
  .userPic {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 35 / 360 * 100vw;
    margin: 12vw auto;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>