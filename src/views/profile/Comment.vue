<template>
  <div id="myComment">
    <headerTemplate title="我的跟帖" />
    <div class="commentList">
      <div class="item" v-for="msg in commentList" :key="msg.id">
        <div class="date">2019-10-10 10:25</div>
        <div class="parent" v-if="msg.parent">
          <div class="name">回复: {{ msg.parent.user.nickname }}</div>
          <div class="content">
            {{ msg.parent.content }}
          </div>
        </div>
        <div class="content">{{ msg.content }}</div>
        <div class="source">
          <div class="title">原文: {{ msg.post.title }}</div>
          <span class="iconfont iconjiantou1"></span>
        </div>
      </div>
      <div class="moreComment" @click="moreComment" v-if="isMoreComment">
        更多跟帖
      </div>
      <div class="unMoreComment" @click="moreComment" v-else>
        没有更多了哦！
      </div>
    </div>
  </div>
</template>

<script>
import headerTemplate from "../../components/HeaderTemplate";
export default {
  data() {
    return {
      commentList: [],
      pageIndex: 1,
      pageSize: 10,
      isMoreComment: true,
    };
  },
  components: {
    headerTemplate,
  },
  created() {
    this.loadComment();
  },
  methods: {
    loadComment() {
      this.$axios({
        url: "/user_comments",
        params: { pageIndex: this.pageIndex, pageSize: this.pageSize },
      }).then((res) => {
        if (res.status == 200) {
          this.commentList = [...this.commentList, ...res.data.data];
          if (res.data.data.length < this.pageSize) {
            console.log(1);
            this.isMoreComment = false;
          }
          console.log(this.isMoreComment);
        }
      });
    },
    moreComment() {
      this.pageIndex++;
      this.loadComment();
    },
  },
};
</script>
<style lang="less" scoped>
#myComment {
  background-color: #f2f2f2;
  min-height: 100vh;
  overflow: hidden;
}
.commentList {
  .item {
    padding: 10 / 360 * 100vw 0;
    border-bottom: 1px solid #ccc;
    .date {
      margin: 0 14 / 360 * 100vw;
      font-size: 12 / 360 * 100vw;
      color: #aaa;
      line-height: 24 / 360 * 100vw;
    }
    .parent {
      margin: 0 14 / 360 * 100vw;

      background-color: #e6e6e6;
      color: #999;
      font-size: 12 / 360 * 100vw;
      line-height: 20 / 360 * 100vw;
      padding: 10 / 360 * 100vw;
      .content {
        color: #999;
        font-size: 12 / 360 * 100vw;
        line-height: 20 / 360 * 100vw;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .content {
      margin: 0 14 / 360 * 100vw;

      line-height: 24 / 360 * 100vw;
      font-size: 14 / 360 * 100vw;
      color: #333;
    }
    .source {
      margin: 0 14 / 360 * 100vw;

      display: flex;
      justify-content: space-between;
      line-height: 24 / 360 * 100vw;

      .title {
        width: 80vw;
        font-size: 12 / 360 * 100vw;
        color: #aaa;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .iconjiantou1 {
        font-size: 12 / 360 * 100vw;
        color: #aaa;
      }
    }
  }
}
.moreComment {
  margin: 20 / 360 * 100vw auto;
  text-align: center;
  font-size: 14 / 360 * 100vw;
  color: #666;
  width: 100 / 360 * 100vw;
  height: 30 / 360 * 100vw;
  line-height: 30 / 360 * 100vw;
  border: 1px solid #666;
  border-radius: 15 / 360 * 100vw;
}

.unMoreComment {
  margin: 20 / 360 * 100vw auto;
  text-align: center;
  font-size: 14 / 360 * 100vw;
  color: #aaa;
  width: 100 / 360 * 100vw;
  height: 30 / 360 * 100vw;
  line-height: 30 / 360 * 100vw;
}
</style>