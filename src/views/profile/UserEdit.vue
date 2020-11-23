<template>
  <div id="userEdit">
    <headerTemplate title="编辑资料" />
    <div class="userPic">
      <img v-if="userInfo.head_img == ''" src="@/assets/默认头像.png" alt="" />
      <img v-else :src="$axios.defaults.baseURL + userInfo.head_img" alt="" />
    </div>
    <toSetTemplate
      title="昵称"
      :description="userInfo.nickname"
      @click.native="show = true"
    />
    <toSetTemplate title="密码" description="******" />
    <toSetTemplate
      title="性别"
      :description="userInfo.gender == 1 ? '男孩子' : '女孩子'"
    />
    <van-dialog
      v-model="show"
      title="修改昵称"
      show-cancel-button
      @confirm="changeNickName"
    >
      <van-cell-group>
        <van-field
          v-model="value"
          placeholder="输入昵称"
          maxlength="8"
          input-align="center"
        />
      </van-cell-group>
    </van-dialog>
  </div>
</template>

<script>
import headerTemplate from "@/components/HeaderTemplate";
import toSetTemplate from "@/components/ToSetTemplate";
export default {
  data() {
    return {
      userInfo: {},
      show: false,
      value: "",
    };
  },
  components: {
    headerTemplate,
    toSetTemplate,
  },
  methods: {
    getUserInfo() {
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
    changeNickName() {
      if (this.value == "") {
        this.$toast({
          message: "想个名字吧！",
          position: "bottom",
        });
        return;
      }
      const id = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      this.$axios({
        method: "post",
        headers: { authorization: token },
        url: "/user_update/" + id,
        data: { nickname: this.value },
      }).then((res) => {
        this.getUserInfo();
      });
    },
  },
  created() {
    this.getUserInfo();
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