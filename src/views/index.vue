<template>
  <div class="index">
    <IndexHeader />
    <van-tabs
      v-model="active"
      background="#e9e9e9"
      class="nav"
      line-width="8vw"
    >
      <van-tab :title="item.name" v-for="item in categoryList" :key="item.id">
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
          <PostList v-for="list in item.postList" :key="list.id" :list="list" />
        </van-list>
      </van-tab>
      <div class="mask">
        <div class="iconfont iconjiantou"></div>
      </div>
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
    };
  },
  methods: {
    toUser() {
      this.$router.push("user").catch((err) => {});
    },
    getPostList() {
      const cateGory = this.categoryList[this.active];
      this.$axios({
        url: "/post",
        params: {
          category: cateGory.id,
          pageIndex: cateGory.pageIndex,
          pageSize: cateGory.pageSize,
        },
      }).then((res) => {
        if (res.status == 200) {
          cateGory.postList = [...cateGory.postList, ...res.data.data];
          cateGory.loading = false;
          if (res.data.data.length < cateGory.pageSize) {
            cateGory.finished = true;
          }
        }
      });
    },
    onLoad() {
      const cateGory = this.categoryList[this.active];
      cateGory.pageIndex += 1;
      this.getPostList();
    },
  },
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      if (res.status == 200) {
        this.categoryList = res.data.data.map((item) => {
          return {
            ...item,
            postList: [],
            pageIndex: 1,
            pageSize: 6,
            loading: false,
            finished: false,
          };
        });
        // console.log(this.categoryList);
        this.getPostList();
      }
    });
  },
  watch: {
    active(newActive) {
      if (this.categoryList[this.active].postList.length == 0) {
        this.getPostList();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.index {
  min-height: 100vh;
  background-color: #f2f2f2;
}
/deep/ .van-tabs--line .van-tabs__wrap {
  height: 10vw;
  .van-tab__text {
    font-size: 12 / 360 * 100vw;
  }
}
.mask {
  position: absolute;
  top: 0;
  right: 0;
  width: 20vw;
  height: 10vw;
  overflow: hidden;
}
.iconjiantou {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12 / 360 * 100vw;
  color: #777;
  transform: rotate(-90deg);
  background-color: #e9e9e9;
  width: 10vw;
  height: 10vw;
  line-height: 10vw;
  text-align: center;
  box-shadow: 0vw -3vw 5vw 7px #e9e9e9;
}
</style>