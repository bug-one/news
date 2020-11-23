<template>
  <div id="userEdit">
    <headerTemplate title="编辑资料" />
    <div class="pic">
      <van-uploader :after-read="afterRead">
        <img
          class="userPic"
          v-if="userInfo.head_img == ''"
          src="@/assets/默认头像.png"
          alt=""
        />
        <img
          class="userPic"
          v-else
          :src="$axios.defaults.baseURL + userInfo.head_img"
          alt=""
        />
      </van-uploader>
    </div>
    <toSetTemplate
      title="昵称"
      :description="userInfo.nickname"
      @click.native="isShowNickName = true"
    />
    <toSetTemplate
      title="密码"
      description="******"
      @click.native="isShowPassWord = true"
    />
    <toSetTemplate
      title="性别"
      :description="userInfo.gender == 1 ? '男孩子' : '女孩子'"
      @click.native="isShowGender = true"
    />
    <van-dialog
      v-model="isShowNickName"
      title="修改昵称"
      show-cancel-button
      @confirm="changeNickName"
    >
      <van-cell-group>
        <van-field
          v-model="newNickName"
          placeholder="输入昵称"
          maxlength="8"
          input-align="center"
        />
      </van-cell-group>
    </van-dialog>

    <van-dialog
      v-model="isShowPassWord"
      title="修改密码"
      show-cancel-button
      @confirm="changePassWord"
    >
      <van-cell-group>
        <van-field
          v-model="newPassWord"
          placeholder="输入密码"
          maxlength="8"
          input-align="center"
        />
      </van-cell-group>
    </van-dialog>
    <van-action-sheet
      cancel-text="取消"
      v-model="isShowGender"
      :actions="actions"
      @select="onSelect"
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
      isShowNickName: false,
      isShowPassWord: false,
      isShowGender: false,
      newNickName: "",
      newPassWord: "",
      actions: [
        { name: "男孩子", gender: "1" },
        { name: "女孩子", gender: "0" },
      ],
    };
  },
  components: {
    headerTemplate,
    toSetTemplate,
  },
  methods: {
    getUserInfo() {
      const id = localStorage.getItem("userId");
      this.$axios({
        method: "get",
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
    setRes(data) {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("userId"),
        data,
      }).then((res) => {
        this.getUserInfo();
      });
    },
    changeNickName() {
      const data = { nickname: this.newNickName };
      if (this.newNickName == "") {
        this.$toast({
          message: "想个名字吧！",
          position: "bottom",
        });
        return;
      }
      this.setRes(data);
      this.$toast({
        message: "修改昵称成功",
        position: "bottom",
      });
      this.newNickName = "";
    },
    changePassWord() {
      const pattern = /^.{3,16}$/;
      const data = { password: this.newPassWord };
      if (this.newPassWord == "") {
        this.$toast({
          message: "密码不能为空",
          position: "bottom",
        });
        return;
      }
      if (!pattern.test(this.newPassWord)) {
        this.$toast({
          message: "密码不符合，请输入3-16位字符",
          position: "bottom",
        });
        this.newPassWord = "";
        return;
      }
      this.setRes(data);
      this.$toast({
        message: "修改密码成功",
        position: "bottom",
      });
      this.newPassWord = "";
    },
    onSelect(obj) {
      const data = { gender: obj.gender };
      this.setRes(data);
      this.isShowGender = false;
    },
    afterRead(obj) {
      const formData = new FormData();
      formData.append("file", obj.file);
      this.$axios({
        method: "post",
        url: "/upload",
        data: formData,
      }).then((res) => {
        const data = { head_img: res.data.data.url };
        this.setRes(data);
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
  .pic {
    text-align: center;
    .userPic {
      text-align: center;
      width: 70 / 360 * 100vw;
      height: 70 / 360 * 100vw;
      border-radius: 35 / 360 * 100vw;
      margin: 12vw auto;
      object-fit: cover;
    }
  }
}
</style>