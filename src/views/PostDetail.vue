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
    </div>
    <likeButton :postData="postData" />
    <h2 class="comment">精彩跟贴</h2>
    <commentMain
      :commentData="comment"
      v-for="comment in commentList"
      :key="comment.id"
    />
    <div class="unMoreComment" v-if="commentList.length < 3">
      没有更多评论啦
    </div>
    <div
      :class="{
        moreComment: true,
        isShowTextarea: isShowTextarea,
      }"
      v-if="commentList.length == 3"
      @click="$router.push('/moreComment/' + $route.params.id)"
    >
      更多跟帖
    </div>
    <commentInput @showTextarea="showTextarea" @isComment="loadComment" />
  </div>
</template>

<script>
import followButton from "../components/FollowButton";
import likeButton from "../components/LikeButton";
import commentMain from "../components/comment/Main";
import commentInput from "../components/CommentInput";
export default {
  components: {
    followButton,
    likeButton,
    commentMain,
    commentInput,
  },
  data() {
    return {
      postData: {},
      commentList: [],
      isShowTextarea: false,
    };
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.params.id,
    }).then((res) => {
      if (res.status == 200) {
        this.postData = res.data.data;
      }
    });
    this.loadComment();
  },
  methods: {
    loadComment() {
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
      }).then((res) => {
        if (res.data.data.length > 3) {
          res.data.data.length = 3;
        }
        this.commentList = res.data.data;
      });
    },
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
    showTextarea(val) {
      this.isShowTextarea = val;
    },
  },
};
</script>

<style lang="less" scoped>
#postDetail {
  background-color: #f2f2f2;
  min-height: 100vh;
  overflow: hidden;

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
  .comment {
    font-weight: normal;
    font-size: 16 / 360 * 100vw;
    text-align: center;
    border-top: 4 / 360 * 100vw solid #dfdfdf;
    line-height: 60 / 360 * 100vw;
  }
  .unMoreComment {
    text-align: center;
    color: #999;
    font-size: 12 / 360 * 100vw;
    margin: 10 / 360 * 100vw 0;
  }
  .moreComment {
    text-align: center;
    font-size: 16 / 360 * 100vw;
    width: 100 / 360 * 100vw;
    height: 30 / 360 * 100vw;
    border-radius: 15 / 360 * 100vw;
    line-height: 30 / 360 * 100vw;
    border: 1px solid #999;
    color: #666;
    margin: 20 / 360 * 100vw auto 68 / 360 * 100vw;
    &.isShowTextarea {
      margin: 20 / 360 * 100vw auto 160 / 360 * 100vw;
    }
  }
}
</style>