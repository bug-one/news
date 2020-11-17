<template>
  <div id="register">
    <div class="title">
      <span class="close iconfont iconicon-test"></span>
    </div>
    <span class="logo iconfont iconnew"></span>
    <div class="userMessage">
      <inputTemplate
        placeholder="请输入用户名"
        errMes="用户名不符合，请输入3-8位字符"
        :rule="/^.{3,8}$/"
      ></inputTemplate>
      <inputTemplate
        placeholder="设置昵称"
        errMes="昵称不符合，请输入3-8位字符"
        :rule="/^.{3,8}$/"
      ></inputTemplate>
      <inputTemplate
        placeholder="请输入密码"
        errMes="密码不符合，请输入8-16位字符"
        :rule="/^.{8,16}$/"
        type="password"
      ></inputTemplate>
    </div>
    <buttonTemplate class="toLogin" value="注册"></buttonTemplate>
  </div>
</template>

<script>
import inputTemplate from "../components/InputTemplate";
import buttonTemplate from "../components/ButtonTemplate";
export default {
  components: {
    inputTemplate,
    buttonTemplate,
  },
};
</script>

<style lang="less" scoped>
#register {
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