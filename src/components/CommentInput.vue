<template>
  <div>
    <div class="deactiveComment" v-if="!isShowTextarea">
      <input
        v-model="comment"
        type="text"
        placeholder="评论"
        @click="showTextarea"
      />
      <span class="iconfont iconpinglun-">
        <span class="amount">102</span>
      </span>
      <span class="iconfont iconshoucang"></span>
      <span class="iconfont iconfenxiang"></span>
    </div>
    <div class="activeComment" v-if="isShowTextarea">
      <textarea
        v-if="nickname"
        name=""
        id=""
        rows="6"
        ref="textarea"
        @blur="hideTextarea"
        v-model="comment"
        :placeholder="'@' + nickname + ':'"
      ></textarea>
      <textarea
        v-else
        name=""
        id=""
        rows="6"
        ref="textarea"
        @blur="hideTextarea"
        v-model="comment"
        placeholder="请输入评论哦"
      ></textarea>
      <div class="send">
        <img src="../assets/哆啦A梦.png" alt="" />
        <div class="sendComment" @click="sendComment">发送</div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "../utils/eventBus.js";
export default {
  data() {
    return {
      isShowTextarea: false,
      comment: "",
      commentId: "",
      nickname: "",
    };
  },
  created() {
    eventBus.$on("sendMsg", (msg) => {
      this.commentId = msg.id;
      this.nickname = msg.nickname;
      this.showTextarea();
    });
  },
  destroyed() {
    eventBus.$off("sendMsg");
  },
  methods: {
    showTextarea() {
      this.isShowTextarea = true;
      this.$emit("showTextarea", this.isShowTextarea);
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    hideTextarea() {
      setTimeout(() => {
        if (!this.comment) {
          this.commentId = "";
        }
        this.isShowTextarea = false;
        this.nickname = "";
        this.$emit("showTextarea", this.isShowTextarea);
      }, 100);
    },
    sendComment() {
      this.$axios({
        method: "post",
        url: "/post_comment/" + this.$route.params.id,
        data: {
          content: this.comment,
          parent_id: this.commentId,
        },
      }).then((res) => {
        this.comment = "";
        this.$emit("isComment");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.deactiveComment {
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  left: 0;
  height: 50 / 360 * 100vw;
  width: 100vw;
  background-color: #fff;
  input {
    width: 46vw;
    padding-left: 14 / 360 * 100vw;
    background-color: #ddd;
    border: none;
    outline: none;
    height: 30 / 360 * 100vw;
    border-radius: 15 / 360 * 100vw;
    &::-webkit-input-placeholder {
      font-size: 12 / 360 * 100vw;
      color: #666;
    }
  }
  .iconfont {
    font-size: 20/ 360 * 100vw;
    &.iconpinglun- {
      position: relative;
      .amount {
        position: absolute;
        top: -4 / 360 * 100vw;
        right: -20 / 360 * 100vw;
        background-color: rgb(255, 46, 92);
        color: #fff;
        font-size: 10 / 360 * 100vw;
        padding: 0 2vw;
        height: 16 / 360 * 100vw;
        line-height: 16 / 360 * 100vw;
        border-radius: 8 / 360 * 100vw;
      }
    }
  }
}
.activeComment {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 38vw;
  display: flex;
  align-items: center;
  background-color: #fff;
  textarea {
    background-color: #ddd;
    border: none;
    outline: none;
    width: 70vw;
    font-size: 14 / 360 * 100vw;
    border-radius: 10 / 360 * 100vw;
    resize: none;
    padding: 10 / 360 * 100vw;
    box-sizing: border-box;
  }
  .send {
    position: relative;
    img {
      width: 30vw;
    }
    .sendComment {
      position: absolute;
      left: 9.3vw;
      top: 24vw;
      background: rgb(255, 46, 92);
      border: 1 / 360 * 100vw solid #000;
      height: 20 / 360 * 100vw;
      line-height: 20 / 360 * 100vw;
      border-radius: 10 / 360 * 100vw;
      width: 38 / 360 * 100vw;
      text-align: center;
      color: #fff;
      font-size: 10 / 360 * 100vw;
    }
  }
}
</style>