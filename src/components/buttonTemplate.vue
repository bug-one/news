<template>
  <div>
    <button>{{ value }}</button>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style lang="less" scoped>
button {
  width: 80vw;
  height: 12vw;
  background-color: rgb(255, 46, 92);
  border: 0;
  border-radius: 6vw;
  color: #fff;
  outline: none;
  font-size: 4vw;
}
</style>