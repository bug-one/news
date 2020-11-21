<template>
  <div id="myFocus">
    <headerTemplate title="我的关注" @click="back" />
    <focusUserTemplate nickName="流连忘返" />
  </div>
</template>

<script>
import headerTemplate from "@/components/HeaderTemplate";
import focusUserTemplate from "@/components/FocusUserTemplate";
export default {
  components: {
    headerTemplate,
    focusUserTemplate,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
#myFocus {
  background-color: #f2f2f2;
  min-height: 100vh;
}
</style>