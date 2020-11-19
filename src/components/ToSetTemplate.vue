<template>
  <div class="set">
    <div class="left">{{ title }}</div>
    <div class="right">
      {{ description }}
      <i class="iconfont iconjiantou1"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description"],
};
</script>

<style lang="less" scoped>
.set {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  margin-left: 4vw;
  padding: 4vw 2vw 4vw 0vw;
  .left,
  .right,
  i {
    font-size: 13 / 360 * 100vw;
  }
  .right {
    color: #888;
  }
  i {
    color: #aaa;
    margin-left: 2vw;
  }
}
</style>