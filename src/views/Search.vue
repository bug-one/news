<template>
  <div id="search">
    <div class="searchModule">
      <span class="iconfont iconjiantou2"> </span>
      <div class="search">
        <span class="iconfont iconsearch"></span>
        <input type="text" name="" id="" placeholder="嘻嘻嘻" />
      </div>
      <div class="btn">搜索</div>
    </div>
    <div class="history">
      <div class="title">历史记录</div>
      <ul class="historyList">
        <li>哈哈</li>
      </ul>
    </div>
    <div class="hotSearch">
      <div class="title">热门搜索</div>
      <ul class="hotList">
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
        <li>哈哈</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#search {
  background-color: #f2f2f2;
  min-height: 100vh;
  padding: 0 14 / 360 * 100vw;
}
.searchModule {
  display: flex;
  align-items: center;
  height: 50 / 360 * 100vw;
  .iconjiantou2 {
    padding-right: 12 / 360 * 100vw;

    font-size: 16 / 360 * 100vw;
    color: #aaa;
  }
  .search {
    display: flex;
    align-items: center;
    flex: 1;
    height: 30 / 360 * 100vw;
    border-radius: 15 / 360 * 100vw;
    border: 1px solid #aaa;
    .iconsearch {
      font-size: 16 / 360 * 100vw;
      color: #aaa;
      padding: 0 10 / 360 * 100vw;
    }
    input {
      font-size: 14/ 360 * 100vw;
      flex: 1;
      margin-right: 12 / 360 * 100vw;
      background-color: transparent;
      color: #333;
      border: none;
      outline: none;
    }
  }
  .btn {
    font-size: 14 / 360 * 100vw;
    color: #333;
    padding-left: 12 / 360 * 100vw;
  }
}
.history {
  font-size: 14 / 360 * 100vw;

  .title {
    color: #333;
    font-weight: 600;
    padding: 10/ 360 * 100vw 0;
  }
  .historyList {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10 / 360 * 100vw;

    li {
      font-size: 14 / 360 * 100vw;
      padding-bottom: 6 / 360 * 100vw;
      margin-right: 6 / 360 * 100vw;
      color: #555;
    }
  }
}
.hotSearch {
  margin-top: 6 / 360 * 100vw;
  font-size: 14 / 360 * 100vw;

  .title {
    color: #333;
    font-weight: 600;
    padding: 10/ 360 * 100vw 0;
  }
  .hotList {
    display: flex;
    flex-wrap: wrap;

    li {
      font-size: 14 / 360 * 100vw;
      padding-bottom: 6 / 360 * 100vw;
      margin-right: 6 / 360 * 100vw;
      color: #555;
    }
  }
}
</style>