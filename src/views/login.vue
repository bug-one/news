<template>
  <div id="login">
    <div class="title">
      <span class="close iconfont iconicon-test"></span>
    </div>
    <span class="logo iconfont iconnew"></span>
    <div class="userMessage">
      <inputTemplate
        tips="请输入用户名"
        @get-value="getUserName"
      ></inputTemplate>
      <inputTemplate
        type="password"
        tips="请输入密码"
        @get-value="getPassWord"
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
import inputTemplate from "../components/inputTemplate";
import buttonTemplate from "../components/buttonTemplate";
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
      console.log(this.userName, this.passWord);
    },
  },
};
</script>

<style lang="less">
#login {
  width: 100vw;
  height: 100vh;
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