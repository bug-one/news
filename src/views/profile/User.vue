<template>
  <div id="user">
    <div class="toEdit" @click="toEdit">
      <div class="userPic">
        <img v-if="userMes.head_img == ''" src="@/assets/默认头像.png" alt="" />
        <img v-else :src="$axios.defaults.baseURL + userMes.head_img" alt="" />
      </div>
      <div class="userMes">
        <div class="name">
          <i v-if="userMes.gender === 1" class="iconfont iconxingbienan"></i>
          <i v-else class="iconfont iconxingbienv"></i>
          {{ userMes.nickname }}
        </div>
        <div class="date">2019-10-10</div>
      </div>
      <div class="jump">
        <i class="iconfont iconjiantou1"></i>
      </div>
    </div>
    <toSetTemplate
      title="我的关注"
      description="关注的用户"
      @click.native="toMyFous"
    />
    <toSetTemplate title="我的跟帖" description="跟帖/回复" />
    <toSetTemplate title="我的收藏" description="文章/视频" />
    <toSetTemplate title="设置" />
    <toSetTemplate title="退出" @click.native="logout" />
  </div>
</template>

<script>
import toSetTemplate from "@/components/ToSetTemplate";
import MyFocusVue from "./MyFocus.vue";
export default {
  data() {
    return {
      userMes: {},
    };
  },
  components: {
    toSetTemplate,
  },
  mounted() {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    this.$axios({
      method: "get",
      headers: { authorization: token },
      url: `/user/${id}`,
    })
      .then((res) => {
        if (res.data.message == "获取成功") {
          this.userMes = res.data.data;
        } else {
          this.$toast({
            message: "验证失败，请重新登录哦！",
            position: "bottom",
          });
          this.$router.replace("login");
        }
      })
      .catch((err) => {
        this.$toast({
          message: "服务器繁忙，请稍后再试哦！",
          position: "bottom",
        });
      });
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      this.$toast({
        message: "已退出登录",
        position: "bottom",
      });
      this.$router.replace("index");
    },
    toEdit() {
      this.$router.push("userEdit");
    },
    toMyFous() {
      this.$router.push("myFocus");
    },
  },
};
</script>

<style lang="less" scoped>
#user {
  background-color: #f2f2f2;
  min-height: 100vh;
}
.toEdit {
  display: flex;
  align-items: center;
  height: 100 / 360 * 100vw;
  padding: 3vw;
  background-color: #f2f2f2;
  border-bottom: 1.5vw solid #ddd;
  .userPic {
    width: 70 / 360 * 100vw;
    height: 70 / 360 * 100vw;
    border-radius: 35 / 360 * 100vw;
    margin: 0 2vw;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .userMes {
    flex: 1;
    .name,
    .date {
      padding: 0.5vw 1vw;
      font-size: 12 / 360 * 100vw;
    }
    .date {
      color: #aaa;
    }
    .iconxingbienan {
      font-size: 14 / 360 * 100vw;
      color: #6cf;
    }
    .iconxingbienv {
      color: rgb(255, 145, 255);
    }
  }
  .jump {
    i {
      font-size: 17 / 360 * 100vw;
      color: #aaa;
    }
  }
}
</style>