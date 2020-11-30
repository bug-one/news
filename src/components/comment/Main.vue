<template>
  <div class="commentList">
    <div class="top">
      <img
        class="avatar"
        v-if="commentData.user.head_img"
        :src="commentData.user.head_img | srcUrl"
        alt=""
      />
      <img class="avatar" v-else src="../../assets/默认头像.png" alt="" />
      <div class="userInfo">
        <div class="name">{{ commentData.user.nickname }}</div>
        <div class="date">2小时前</div>
      </div>
      <div class="reply">回复</div>
    </div>
    <commentParent
      v-if="commentData.parent"
      :commentData="commentData.parent"
    />
    <div class="content">{{ commentData.content }}</div>
  </div>
</template>

<script>
import commentParent from "../comment/Parent";
export default {
  props: ["commentData"],
  components: {
    commentParent,
  },
};
</script>

<style lang="less" scoped>
.commentList {
  padding: 0 10 / 360 * 100vw;
  border-bottom: 1px solid #bfbfbf;
  .top {
    display: flex;
    align-items: center;
    padding: 12 / 360 * 100vw 0;
    .avatar {
      width: 36 / 360 * 100vw;
      height: 36 / 360 * 100vw;
      border-radius: 18 / 360 * 100vw;
      margin-right: 6 / 360 * 100vw;
      object-fit: cover;
    }
    .userInfo {
      flex: 1;
      .name {
        font-size: 14 / 360 * 100vw;
      }
      .date {
        font-size: 12 / 360 * 100vw;
        color: #888;
      }
    }
    .reply {
      font-size: 12 / 360 * 100vw;
      color: #666;
    }
  }
  .content {
    font-size: 14 / 360 * 100vw;
    color: #333;
    padding: 10 / 360 * 100vw 0;
  }
}
</style>