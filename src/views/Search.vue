<template>
  <div id="search">
    <div class="searchModule">
      <span class="iconfont iconjiantou2" @click="goback"> </span>
      <div class="search" @click="focus">
        <span class="iconfont iconsearch"></span>
        <input
          type="text"
          name=""
          id=""
          :placeholder="placeholder"
          ref="input"
          v-model="keyword"
        />
      </div>
      <div class="btn" @click="postSearch()">搜索</div>
    </div>
    <postList :list="post" v-for="post in postList" :key="post.id" />
    <div class="unsearch" v-if="postList.length == 0 && keyword && isSearch">
      未搜索到文章哦~
    </div>
    <div
      class="history"
      v-if="postList.length == 0 && !keyword && historyList.length > 0"
    >
      <div class="title">历史记录</div>
      <ul class="historyList">
        <li
          v-for="(history, index) in historyList"
          :key="index"
          @click="historySearch(history)"
        >
          {{ history }}
        </li>
      </ul>
    </div>
    <div
      class="hotSearch"
      v-if="postList.length == 0 && !keyword && hotList.length > 0"
    >
      <div class="title">热门搜索</div>
      <ul class="hotList">
        <li
          v-for="(hot, index) in hotList"
          :key="index"
          @click="hotSearch(hot)"
        >
          {{ hot }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import postList from "../components/PostList";
export default {
  components: {
    postList,
  },
  data() {
    return {
      keyword: "",
      postList: [],
      isSearch: false,
      placeholder: "关晓彤",
      historyList: [],
      hotList: [
        "尤雨溪",
        "尤雨溪是神",
        "vue作者",
        "vue与react",
        "vue源码",
        "花旦",
      ],
    };
  },
  created() {
    if (JSON.parse(localStorage.getItem("historySearch"))) {
      this.historyList = JSON.parse(localStorage.getItem("historySearch"));
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
      this.isSearch = false;
    },
    goback() {
      if (this.keyword) {
        this.keyword = "";
      } else {
        this.$router.back();
      }
    },
    postSearch() {
      if (!this.keyword) {
        this.keyword = this.placeholder;
      }
      this.$axios({
        url: "/post_search",
        params: { keyword: this.keyword },
      }).then((res) => {
        if (res.status == 200) {
          this.postList = res.data.data;
          this.isSearch = true;
          for (let i = 0; i < this.historyList.length; i++) {
            if (this.historyList[i] == this.keyword) {
              this.historyList.splice(i, 1);
              break;
            }
          }
          this.historyList.unshift(this.keyword);
        }
      });
    },
    hotSearch(hot) {
      this.keyword = hot;
      this.postSearch();
    },
    historySearch(history) {
      this.keyword = history;
      this.postSearch();
    },
  },
  watch: {
    keyword(val) {
      if (val.length == 0) {
        this.postList = [];
      }
    },
    historyList(val) {
      localStorage.setItem("historySearch", JSON.stringify(val));
    },
  },
};
</script>

<style lang="less" scoped>
#search {
  background-color: #f2f2f2;
  min-height: 100vh;
  padding: 0 14 / 360 * 100vw;
}
.searchModule {
  display: flex;
  align-items: center;
  height: 50 / 360 * 100vw;
  .iconjiantou2 {
    padding-right: 12 / 360 * 100vw;

    font-size: 16 / 360 * 100vw;
    color: #aaa;
  }
  .search {
    display: flex;
    align-items: center;
    flex: 1;
    height: 30 / 360 * 100vw;
    border-radius: 15 / 360 * 100vw;
    border: 1px solid #aaa;
    .iconsearch {
      font-size: 16 / 360 * 100vw;
      color: #aaa;
      padding: 0 10 / 360 * 100vw;
    }
    input {
      font-size: 14/ 360 * 100vw;
      flex: 1;
      margin-right: 12 / 360 * 100vw;
      background-color: transparent;
      color: #333;
      border: none;
      outline: none;
    }
  }
  .btn {
    font-size: 14 / 360 * 100vw;
    color: #333;
    padding-left: 12 / 360 * 100vw;
  }
}
.unsearch {
  color: #666;
  text-align: center;
  margin-top: 40vh;
  font-size: 14 / 360 * 100vw;
}
.history {
  font-size: 14 / 360 * 100vw;

  .title {
    color: #333;
    font-weight: 600;
    padding: 10/ 360 * 100vw 0;
  }
  .historyList {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10 / 360 * 100vw;

    li {
      font-size: 14 / 360 * 100vw;
      padding-bottom: 6 / 360 * 100vw;
      margin-right: 6 / 360 * 100vw;
      color: #555;
    }
  }
}
.hotSearch {
  margin-top: 6 / 360 * 100vw;
  font-size: 14 / 360 * 100vw;

  .title {
    color: #333;
    font-weight: 600;
    padding: 10/ 360 * 100vw 0;
  }
  .hotList {
    display: flex;
    flex-wrap: wrap;

    li {
      font-size: 14 / 360 * 100vw;
      padding-bottom: 6 / 360 * 100vw;
      margin-right: 6 / 360 * 100vw;
      color: #555;
    }
  }
}
</style>