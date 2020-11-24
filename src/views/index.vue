<template>
  <div class="index">
    <IndexHeader />
  </div>
</template>

<script>
import IndexHeader from "../components/IndexHeader";
export default {
  components: {
    IndexHeader,
  },
  methods: {
    toUser() {
      this.$router.push("user").catch((err) => {});
    },
  },
};
</script>

<style lang="less" scoped>
</style>