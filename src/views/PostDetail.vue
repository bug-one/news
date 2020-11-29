<template>
  <div id="postDetail">
    <div v-if="postData.type == 1" class="normalPost">
      <div class="header">
        <span class="iconfont iconjiantou2 back" @click="$router.go(-1)"></span>
        <span class="iconfont iconnew"></span>
        <followButton :postData="postData" />
      </div>
      <h2 class="title">
        {{ postData.title }}
      </h2>
      <div class="user">
        <div class="name">{{ postData.user.nickname }}</div>
        <div class="date">2019-10-10</div>
      </div>
      <div class="content" v-html="postData.content"></div>
      <likeButton :postData="postData" />
    </div>
    <div v-if="postData.type == 2" class="videoPost">
      <div class="video">
        <video
          ref="video"
          src="https://video.pearvideo.com/mp4/short/20170722/cont-1115809-10663719-hd.mp4"
          :poster="postData.cover[0].url | srcUrl"
          controls
          @pause="pauseVideo"
          @play="handleVideo"
        ></video>
        <span
          class="iconfont iconshipin"
          @click="playVideo"
          ref="videoBtn"
        ></span>
      </div>

      <div class="user">
        <img
          v-if="postData.user.head_img"
          class="avatar"
          :src="postData.user.head_img | srcUrl"
        />
        <img v-else class="avatar" src="../assets/默认头像.png" />
        <div class="name">{{ postData.user.nickname }}</div>
        <followButton :postData="postData" />
      </div>
      <div class="title">{{ postData.title }}</div>
      <likeButton :postData="postData" />
    </div>
  </div>
</template>

<script>
import followButton from "../components/FollowButton";
import likeButton from "../components/LikeButton";
export default {
  components: {
    followButton,
    likeButton,
  },
  data() {
    return {
      postData: {},
    };
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.params.id,
    }).then((res) => {
      if (res.status == 200) {
        this.postData = res.data.data;
        console.log(res.data.data);
      }
    });
  },
  methods: {
    playVideo() {
      this.$refs.video.play();
      this.$refs.videoBtn.classList.add("icon-zantingtingzhi");
      this.$refs.videoBtn.style.opacity = "0";
      setTimeout(() => {
        this.$refs.videoBtn.style.display = "none";
      }, 600);
    },
    pauseVideo() {
      this.$refs.videoBtn.classList.remove("icon-zantingtingzhi");
      this.$refs.videoBtn.style.display = "block";
      setTimeout(() => {
        this.$refs.videoBtn.style.opacity = "1";
      }, 100);
    },
    handleVideo() {
      this.$refs.videoBtn.classList.add("icon-zantingtingzhi");
      this.$refs.videoBtn.style.opacity = "0";
      setTimeout(() => {
        this.$refs.videoBtn.style.display = "none";
      }, 600);
    },
  },
};
</script>

<style lang="less" scoped>
#postDetail {
  background-color: #f2f2f2;
  min-height: 100vh;
}
.normalPost {
  padding: 0 14 / 360 * 100vw;
  .header {
    display: flex;
    align-items: center;
    .iconjiantou2 {
      color: #aaa;
    }
    .iconnew {
      flex: 1;
      color: #333;
      font-size: 46 / 360 * 100vw;
    }
  }
  .title {
    font-size: 16 / 360 * 100vw;
    color: #333;
  }
  .user {
    display: flex;
    align-items: center;

    padding: 4 / 360 * 100vw 0;
    .name,
    .date {
      font-size: 12 / 360 * 100vw;
      color: #aaa;
    }
    .date {
      margin-left: 16 / 360 * 100vw;
      padding-top: 2 / 360 * 100vw;
    }
  }
  .content {
    font-size: 12 / 360 * 100vw;
    color: #444;
    line-height: 24 / 360 * 100vw;
    padding: 16 / 360 * 100vw 0;
    /deep/ img {
      width: 100%;
    }
  }
}

.videoPost {
  .video {
    display: flex;
    justify-content: center;
    // align-items: center;
    position: relative;
    video {
      padding: 0;
      width: 100vw;
    }
    .iconfont {
      color: #fff;
      width: 40 / 360 * 100vw;
      height: 40 / 360 * 100vw;
      line-height: 40 / 360 * 100vw;
      background-color: rgba(0, 0, 0, 0.3s);
      border-radius: 20 / 360 * 100vw;
      position: absolute;
      top: 35%;
      font-size: 30 / 360 * 100vw;
      text-align: center;
      display: block;
      transition: all 0.6s;
      opacity: 1;
    }
    .icon-zantingtingzhi {
      font-size: 16 / 360 * 100vw;
    }
  }
  .user {
    display: flex;
    align-items: center;
    padding: 16 / 360 * 100vw 14 / 360 * 100vw;

    .avatar {
      width: 26 / 360 * 100vw;
      height: 26 / 360 * 100vw;
      border-radius: 13 / 360 * 100vw;
    }
    .name {
      flex: 1;
      font-size: 12 / 360 * 100vw;
      color: #aaa;
      margin-left: 10 / 360 * 100vw;
    }
  }
  .title {
    padding: 0 14 / 360 * 100vw;

    color: #333;
    font-size: 16 / 360 * 100vw;
    margin-bottom: 10 / 360 * 100vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>