<template>
  <div id="login">
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
        use="login"
      ></inputTemplate>
      <inputTemplate
        type="password"
        placeholder="请输入密码"
        errMes="密码不符合，请输入3-16位字符"
        :rule="/^.{3,16}$/"
        @get-value="getPassWord"
        use="login"
      ></inputTemplate>
    </div>
    <buttonTemplate
      @click.native="login"
      class="toLogin"
      value="登录"
    ></buttonTemplate>
  </div>
</template>

<script>
import inputTemplate from "../components/InputTemplate";
import buttonTemplate from "../components/ButtonTemplate";
import { Toast } from "vant";
export default {
  components: {
    inputTemplate,
    buttonTemplate,
  },
  data() {
    return {
      userName: "",
      passWord: "",
    };
  },
  methods: {
    getUserName(val) {
      this.userName = val;
    },
    getPassWord(val) {
      this.passWord = val;
    },
    login() {
      if (this.userName == "" || this.passWord == "") {
        this.$toast({
          message: "用户名或密码为空",
          position: "bottom",
        });
        return false;
      }
      this.$axios({
        method: "post",
        url: "http://157.122.54.189:9083/login",
        data: {
          username: this.userName,
          password: this.passWord,
        },
      }).then((res) => {
        if (res.status === 200) {
          this.$toast({
            message: res.data.message,
            position: "bottom",
          });
        }
        if (res.data.message == "登录成功") {
          const { token, user } = res.data.data;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", user.id);
          this.$router.push("/index");
        }
      });
    },
    close() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
#login {
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
    height: 30vw;
    margin-top: 10vw;
  }
  .toLogin {
    width: 80vw;
    // display: block;
    margin: 80px auto;
  }
}
</style>