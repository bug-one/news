<template>
  <div id="moreComment">
    <headerTemplate title="精彩跟帖" />
    <commentMain
      :commentData="comment"
      v-for="comment in commentList"
      :key="comment.id"
    />
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
    };
  },
  created() {
    this.$axios({
      url: "/post_comment/" + this.$route.params.id,
    }).then((res) => {
      this.commentList = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
#moreComment {
  background-color: #f2f2f2;
  min-height: 100vh;
}
</style>