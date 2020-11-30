<template>
  <div id="moreComment">
    <headerTemplate title="精彩跟帖" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <commentMain
        :commentData="comment"
        v-for="comment in commentList"
        :key="comment.id"
      />
    </van-list>
  </div>
</template>

<script>
import headerTemplate from "../components/HeaderTemplate";
import commentMain from "../components/comment/Main";
export default {
  components: {
    headerTemplate,
    commentMain,
  },
  data() {
    return {
      commentList: [],
      loading: false,
      finished: false,
      pageIndex: 1,
      pageSize: 6,
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      this.$axios({
        url: "/post_comment/" + this.$route.params.id,
        params: { pageIndex: this.pageIndex, pageSize: this.pageSize },
      }).then((res) => {
        this.commentList = [...this.commentList, ...res.data.data];
        this.loading = false;
        if (res.data.data.length < this.pageSize) {
          this.finished = true;
        }
      });
    },
    onLoad() {
      this.pageIndex++;
      this.getComment();
    },
  },
};
</script>

<style lang="less" scoped>
#moreComment {
  background-color: #f2f2f2;
  min-height: 100vh;
}
</style>