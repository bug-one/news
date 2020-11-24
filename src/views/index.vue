<template>
  <div class="index">
    <IndexHeader />
    <van-tabs v-model="active">
      <van-tab :title="item.name" v-for="item in categoryList" :key="item.id">
        <PostList :postList="postList" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import IndexHeader from "../components/IndexHeader";
import PostList from "../components/PostList";
export default {
  components: {
    IndexHeader,
    PostList,
  },
  data() {
    return {
      active: 0,
      categoryList: [],
      postList: [],
    };
  },
  methods: {
    toUser() {
      this.$router.push("user").catch((err) => {});
    },
  },
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      if (res.status == 200) {
        this.categoryList = res.data.data;
      }
    });
    this.$axios({
      url: "/post",
    }).then((res) => {
      if (res.status == 200) {
        this.postList = res.data.data;
      }
    });
  },
};
</script>

<style lang="less" scoped>
</style>