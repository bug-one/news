<template>
  <div class="header">
    <div class="back" @click="$emit('click')">
      <i class="iconfont iconjiantou"></i>
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  padding: 4vw;
  .back {
    position: absolute;
    font-weight: 700;
    color: #aaa;
    top: 4.5vw;
  }
  .title {
    text-align: center;
    font-size: 13 / 360 * 100vw;
  }
}
</style>