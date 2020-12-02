<template>
  <div @click="$router.push('postDetail/' + list.id)">
    <div
      v-if="list.type == 1 && list.cover.length > 0 && list.cover.length < 3"
      class="siggleType"
    >
      <div class="left">
        <div class="title">{{ list.title }}</div>
        <div class="userMes">
          <span class="user">{{ list.user.nickname }}</span>
          <span class="des">{{ list.comment_length }}跟帖</span>
        </div>
      </div>
      <img :src="list.cover[0].url | srcUrl" alt="" />
    </div>

    <div v-if="list.type == 1 && list.cover.length >= 3" class="multipleType">
      <div class="title">
        {{ list.title }}
      </div>
      <div class="pic">
        <img :src="list.cover[0].url | srcUrl" alt="" />
        <img :src="list.cover[1].url | srcUrl" alt="" />
        <img :src="list.cover[2].url | srcUrl" alt="" />
      </div>
      <div class="userMes">
        <span class="user">{{ list.user.nickname }}</span>
        <span class="des">{{ list.comment_length }}跟帖</span>
      </div>
    </div>

    <div v-if="list.type == 2 && list.cover.length > 0" class="videoType">
      <div class="title">{{ list.title }}</div>
      <div class="video">
        <img :src="list.cover[0].url | srcUrl" alt="" />
        <span class="iconfont iconshipin"></span>
      </div>
      <div class="userMes">
        <span class="user">{{ list.user.nickname }}</span>
        <span class="des">{{ list.comment_length }}跟帖</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style lang="less" scoped>
.siggleType {
  display: flex;
  justify-content: space-between;
  padding: 3vw 3vw 2vw 3vw;
  border-bottom: 1px solid #ddd;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-right: 2vw;
    .title {
      font-size: 14 / 360 * 100vw;
    }
    .userMes {
      font-size: 12 / 360 * 100vw;
      color: #888;
      .user {
        margin-right: 3vw;
      }
    }
  }
  img {
    width: 121 / 360 * 100vw;
    height: 75 / 360 * 100vw;
    object-fit: cover;
  }
}
.multipleType {
  padding: 3vw 3vw 2vw 3vw;
  border-bottom: 1px solid #ddd;
  .title {
    font-size: 14 / 360 * 100vw;
    margin-bottom: 1vw;
  }
  .pic {
    display: flex;
    justify-content: space-between;
    img {
      width: 100 / 360 * 100vw;
      height: 74 / 360 * 100vw;
      object-fit: cover;
    }
  }
  .userMes {
    font-size: 12 / 360 * 100vw;
    margin-top: 3vw;
    color: #888;
    .user {
      margin-right: 3vw;
    }
  }
}

.videoType {
  padding: 3vw 3vw 2vw 3vw;
  border-bottom: 1px solid #ddd;
  .title {
    font-size: 14 / 360 * 100vw;
    margin-bottom: 1vw;
  }
  .video {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      width: 340 / 360 * 100vw;
      height: 170 / 360 * 100vw;
      object-fit: cover;
    }
    .iconshipin {
      color: #fff;
      width: 40 / 360 * 100vw;
      height: 40 / 360 * 100vw;
      line-height: 40 / 360 * 100vw;
      background-color: rgba(0, 0, 0, 0.3s);
      border-radius: 20 / 360 * 100vw;
      position: absolute;
      font-size: 30 / 360 * 100vw;
      text-align: center;
    }
  }
  .userMes {
    font-size: 12 / 360 * 100vw;
    margin-top: 3vw;
    color: #888;
    .user {
      margin-right: 3vw;
    }
  }
}
</style>