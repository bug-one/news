<template>
  <div id="register">
    <div class="title">
      <span class="close iconfont iconicon-test" @click="close"></span>
    </div>
    <span class="logo iconfont iconnew"></span>
    <div class="userMessage">
      <inputTemplate
        placeholder="请输入用户名"
        errMes="用户名不符合，请输入3-8位字符"
        :rule="/^.{3,8}$/"
        @get-value="getUserName"
        @legal="getUserNameLegal"
      ></inputTemplate>
      <inputTemplate
        placeholder="设置昵称"
        errMes="昵称不符合，请输入3-8位字符"
        :rule="/^.{3,8}$/"
        @get-value="getNickName"
        @legal="getNickNameLegal"
      ></inputTemplate>
      <inputTemplate
        placeholder="请输入密码"
        errMes="密码不符合，请输入3-16位字符"
        :rule="/^.{3,16}$/"
        type="password"
        @get-value="getPassWord"
        @legal="getPassWordLegal"
      ></inputTemplate>
    </div>
    <buttonTemplate
      class="toLogin"
      value="注册"
      @click.native="register"
    ></buttonTemplate>
  </div>
</template>

<script>
import inputTemplate from "../components/InputTemplate";
import buttonTemplate from "../components/ButtonTemplate";
export default {
  data() {
    return {
      username: "",
      nickname: "",
      password: "",
      userNameLegal: "",
      nickNameLegal: "",
      passWordLegal: "",
    };
  },
  components: {
    inputTemplate,
    buttonTemplate,
  },
  methods: {
    getUserName(val) {
      this.username = val;
    },
    getNickName(val) {
      this.nickname = val;
    },
    getPassWord(val) {
      this.password = val;
    },
    getUserNameLegal(val) {
      this.userNameLegal = val;
    },
    getNickNameLegal(val) {
      this.nickNameLegal = val;
    },
    getPassWordLegal(val) {
      this.passWordLegal = val;
    },
    register() {
      if (this.username == "") {
        this.$toast("用户名不能为空");
        return false;
      }
      if (this.nickname == "") {
        this.$toast("昵称不能为空");
        return false;
      }
      if (this.password == "") {
        this.$toast("密码不能为空");
        return false;
      }
      if (this.userNameLegal && this.nickNameLegal && this.passWordLegal) {
        this.$axios({
          method: "post",
          url: "/register",
          data: {
            username: this.username,
            password: this.password,
            nickname: this.nickname,
          },
        }).then((res) => {
          if (res.data.message == "注册成功") {
            this.$toast({
              message: res.data.message,
              position: "bottom",
            });
            this.$router.push("/login");
          }
        });
      } else {
        this.$toast({
          message: "不合法输入!",
          position: "bottom",
        });
        return false;
      }
    },
    close() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
#register {
  width: 100vw;
  min-height: 100vh;
  background-color: #eee;
  .title {
    width: 100vw;
    .close {
      display: inline-block;
      margin: 7vw;
      font-size: 9vw;
    }
  }
  .logo {
    display: block;
    text-align: center;
    color: rgb(255, 46, 92);
    font-size: 30vw;
  }
  .userMessage {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 50vw;
    margin-top: 10vw;
  }
  .toLogin {
    width: 80vw;
    // display: block;
    margin: 80px auto;
  }
}
</style>