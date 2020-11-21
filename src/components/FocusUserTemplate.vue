<template>
  <div>
    <div class="focusUser">
      <div class="userPic">
        <img src="@/assets/默认头像.png" alt="" />
      </div>
      <div class="userMes">
        <div class="nickName">{{ nickName }}</div>
        <div class="date">2019-10-10</div>
      </div>
      <div class="btn toFocus">关注</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nickName"],
};
</script>

<style lang="less" scoped>
.focusUser {
  display: flex;
  align-items: center;
  padding: 20 / 360 * 100vw;
  border-bottom: 1px solid #ddd;

  .userPic {
    width: 40 / 360 * 100vw;
    height: 40 / 360 * 100vw;
    background-color: #ccc;
    border-radius: 20 / 360 * 100vw;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .userMes {
    flex: 1;
    margin-left: 14 / 360 * 100vw;
    .userName {
      font-size: 14 / 360 * 100vw;
    }
    .date {
      color: #aaa;
      font-size: 12 / 360 * 100vw;
      margin-top: 4 / 360 * 100vw;
    }
  }
  .btn {
    font-size: 12 / 360 * 100vw;
    line-height: 26 / 360 * 100vw;
    height: 26 / 360 * 100vw;
    border-radius: 26 / 360 * 100vw;
    padding: 0 10 / 360 * 100vw;
  }
  .cancelFocus {
    background-color: #ddd;
  }

  .toFocus {
    color: #fff;
    background-color: rgb(255, 46, 92);
  }
}
</style>