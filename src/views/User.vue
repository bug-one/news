<template>
  <div id="user">
    <div class="toEdit">
      <div class="userPic">
        <img src="../assets/默认头像.png" alt="" />
      </div>
      <div class="userMes">
        <div class="name">
          <i class="iconfont iconxingbienan"></i>
          蔡鹿晗
        </div>
        <div class="date">2019-10-10</div>
      </div>
      <div class="jump">
        <i class="iconfont iconjiantou1"></i>
      </div>
    </div>
    <toSetTemplate title="我的关注" description="关注的用户" />
    <toSetTemplate title="我的跟帖" description="跟帖/回复" />
    <toSetTemplate title="我的收藏" description="文章/视频" />
    <toSetTemplate title="设置" description="" />
  </div>
</template>

<script>
import toSetTemplate from "../components/ToSetTemplate";
export default {
  components: {
    toSetTemplate,
  },
};
</script>

<style lang="less" scoped>
#user {
  background-color: #f2f2f2;
  min-height: 100vh;
}
.toEdit {
  display: flex;
  align-items: center;
  height: 100 / 360 * 100vw;
  padding: 3vw;
  background-color: #f2f2f2;
  border-bottom: 1.5vw solid #ddd;
  .userPic {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 35 / 360 * 100vw;
    margin: 0 2vw;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .userMes {
    flex: 1;
    .name,
    .date {
      padding: 0.5vw 1vw;
      font-size: 13 / 360 * 100vw;
    }
    .date {
      color: #aaa;
    }
    .iconxingbienan {
      font-size: 14 / 360 * 100vw;
      color: #6cf;
    }
    .iconxingbienv {
      color: rgb(255, 145, 255);
    }
  }
  .jump {
    i {
      font-size: 17 / 360 * 100vw;
      color: #aaa;
    }
  }
}
</style>