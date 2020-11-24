<template>
  <div class="title">
    <div class="logo">
      <i class="iconfont iconnew"></i>
    </div>
    <div class="search"><i class="iconfont iconsearch"></i>搜索新闻</div>
    <div class="user" @click="$router.push('user')">
      <i class="iconfont iconwode"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50 / 360 * 100vw;
  background: rgb(255, 46, 92);
  .logo {
    height: 50 / 360 * 100vw;
    padding: 0 2vw;
    i {
      color: #fff;
      line-height: 50 / 360 * 100vw;
      font-size: 54 / 360 * 100vw;
    }
  }
  .search {
    flex: 1;
    background-color: rgba(255, 255, 255, 0.5);
    height: 34 / 360 * 100vw;
    border-radius: 17 / 360 * 100vw;
    text-align: center;
    line-height: 34 / 360 * 100vw;
    font-size: 14 / 360 * 100vw;
    color: #fff;
    i {
      font-size: 14 / 360 * 100vw;
    }
  }
  .user {
    height: 50 / 360 * 100vw;
    padding: 0 6vw;
    i {
      color: #fff;
      line-height: 50 / 360 * 100vw;
      font-size: 20 / 360 * 100vw;
    }
  }
}
</style>