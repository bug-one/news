<template>
  <div class="comment">
    <parent v-if="commentData.parent" :commentData="commentData.parent" />

    <div class="userInfo">
      <div class="name">{{ commentData.user.nickname }}</div>
      <div class="date">2小时前</div>
      <div class="reply">回复</div>
    </div>
    <div class="content">
      {{ commentData.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "parent",
  props: ["commentData"],
};
</script>

<style lang="less" scoped>
.comment {
  border: 1px solid #d4d4d4;
  padding: 0 8 / 360 * 100vw;
  margin: 10 / 360 * 100vw 0;
  .userInfo {
    display: flex;
    padding-top: 10 / 360 * 100vw;

    .name {
      font-size: 14 / 360 * 100vw;
    }
    .date {
      flex: 1;
      font-size: 12 / 360 * 100vw;
      color: #888;
      margin-left: 8 / 360 * 100vw;
    }
    .reply {
      font-size: 12 / 360 * 100vw;
      color: #666;
    }
  }
  .content {
    font-size: 14 / 360 * 100vw;
    color: #333;
    padding: 14 / 360 * 100vw 0;
  }
}
</style>