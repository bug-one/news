<template>
  <div class="index">
    <IndexHeader />
    <van-tabs v-model="active">
      <van-tab
        :title="item.name"
        v-for="(item, index) in categoryList"
        :key="item.id"
        >内容{{ index + 1 }}</van-tab
      >
    </van-tabs>
  </div>
</template>

<script>
import IndexHeader from "../components/IndexHeader";
export default {
  components: {
    IndexHeader,
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
  },
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      if (res.status == 200) {
        this.categoryList = res.data.data;
        console.log(this.categoryList);
      }
    });
  },
};
</script>

<style lang="less" scoped>
</style>