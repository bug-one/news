<template>
  <div id="userEdit">
    <headerTemplate title="编辑资料" />
    <div class="userPic">
      <img src="@/assets/默认头像.png" alt="" />
    </div>
    <toSetTemplate title="昵称" description="火星网友" />
    <toSetTemplate title="密码" description="******" />
    <toSetTemplate title="性别" description="男" />
  </div>
</template>

<script>
import headerTemplate from "@/components/HeaderTemplate";
import toSetTemplate from "@/components/ToSetTemplate";
export default {
  components: {
    headerTemplate,
    toSetTemplate,
  },
  methods: {},
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