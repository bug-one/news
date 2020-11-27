<template>
  <div id="star">
    <headerTemplate title="我的收藏" />
    <postList :list="list" v-for="list in postList" :key="list.id" />
  </div>
</template>

<script>
import headerTemplate from "../../components/HeaderTemplate";
import postList from "../../components/PostList";

export default {
  data() {
    return {
      postList: [],
    };
  },
  components: {
    headerTemplate,
    postList,
  },
  created() {
    this.$axios({
      url: "/user_star",
    }).then((res) => {
      if (res.status == 200) {
        this.postList = res.data.data;
      }
    });
  },
};
</script>

<style lang="less" scoped>
#star {
  background-color: #f2f2f2;
  min-height: 100vh;
}
</style>