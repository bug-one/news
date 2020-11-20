<template>
  <div class="index">
    <div class="title">
      <div class="logo">
        <i class="iconfont iconnew"></i>
      </div>
      <div class="search"><i class="iconfont iconsearch"></i>搜索新闻</div>
      <div class="user" @click="toUser">
        <i class="iconfont iconwode"></i>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li>新闻</li>
        <li>qwe阿萨大eqe</li>
        <li>qweeqe</li>
        <li>新闻</li>
        <li>qwe阿萨大eqe</li>
        <li>qweeqe</li>
        <li>新闻</li>
        <li>qwe阿萨大eqe</li>
        <li>qweeqe</li>
        <li>新闻</li>
        <li>qwe阿萨大eqe</li>
        <li>qweeqe</li>
        <li>新闻</li>
        <li>qwe阿萨大eqe</li>
        <li>qweeqe</li>
        <li>新闻</li>
        <li>qwe阿萨大eqe</li>
        <li>qweeqe</li>
        <li>新闻</li>
        <li>qwe阿萨大eqe</li>
        <li>qweeqe</li>
        <li>新闻</li>
        <li>qwe阿萨大eqe</li>
        <li>qweeqea啊萨达萨达</li>
        <li></li>
      </ul>
      <div class="setNav">
        <i class="iconfont iconjiantou1"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toUser() {
      this.$router.push("user").catch((err) => {});
      if (localStorage.getItem("token") == null) {
        this.$toast({
          message: "请先登录哦",
          position: "bottom",
        });
      }
    },
  },
};
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
.nav {
  display: flex;
  justify-content: space-between;
  height: 43 / 360 * 100vw;
  background-color: #e4e4e4;
  overflow: hidden;

  ul {
    display: flex;
    width: 317 / 360 * 100vw;
    overflow-x: auto;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      font-size: 14 / 360 * 100vw;
      line-height: 43 / 360 * 100vw;
      padding: 0 4vw;
    }
  }
  .setNav {
    height: 43 / 360 * 100vw;
    line-height: 43 / 360 * 100vw;
    transform: rotate(90deg);
    width: 43 / 360 * 100vw;
    text-align: center;
    border-left: 1px solid #e4e4e4;
    box-shadow: 5vw -2vw 7vw 10vw #e4e4e4;
    i {
      font-size: 20 / 360 * 100vw;
    }
  }
}
.index {
  height: 200vh;
}
</style>