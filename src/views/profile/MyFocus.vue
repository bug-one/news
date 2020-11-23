<template>
  <div id="myFocus">
    <headerTemplate title="我的关注" />
    <div class="focusUser" v-for="(item, index) in followInfo" :key="index">
      <div class="userPic">
        <img
          v-if="followInfo.head_img != ''"
          :src="$axios.defaults.baseURL + item.head_img"
          alt=""
        />
        <img v-else src="@/assets/默认头像.png" alt="" />
      </div>
      <div class="userMes">
        <div class="nickName">{{ item.nickname }}</div>
        <div class="date">2019-10-10</div>
      </div>
      <div class="cancelBtn" @click="unfollow(item.id)">取消关注</div>
    </div>
  </div>
</template>

<script>
import headerTemplate from "@/components/HeaderTemplate";
export default {
  data() {
    return {
      followInfo: [],
    };
  },
  components: {
    headerTemplate,
  },
  methods: {
    unfollow(id) {
      this.$axios({
        url: "/user_unfollow/" + id,
      }).then((res) => {
        if (res.data.message == "取消关注成功") {
          this.$toast({
            message: res.data.message,
            position: "bottom",
          });
          this.loadPage();
        }
      });
    },
    loadPage() {
      this.$axios({
        url: "/user_follows",
      }).then((res) => {
        this.followInfo = res.data.data;
      });
    },
  },
  created() {
    this.loadPage();
  },
};
</script>

<style lang="less" scoped>
#myFocus {
  background-color: #f2f2f2;
  min-height: 100vh;
}
.focusUser {
  display: flex;
  align-items: center;
  padding: 20 / 360 * 100vw;
  border-bottom: 1px solid #ddd;

  .userPic {
    width: 40 / 360 * 100vw;
    height: 40 / 360 * 100vw;
    background-color: #ccc;
    border-radius: 20 / 360 * 100vw;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .userMes {
    flex: 1;
    margin-left: 14 / 360 * 100vw;
    .userName {
      font-size: 14 / 360 * 100vw;
    }
    .date {
      color: #aaa;
      font-size: 12 / 360 * 100vw;
      margin-top: 4 / 360 * 100vw;
    }
  }
  .cancelBtn {
    font-size: 12 / 360 * 100vw;
    line-height: 26 / 360 * 100vw;
    height: 26 / 360 * 100vw;
    border-radius: 26 / 360 * 100vw;
    padding: 0 12 / 360 * 100vw;
    background-color: #ddd;
  }
}
</style>