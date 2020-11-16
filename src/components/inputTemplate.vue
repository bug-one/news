<template>
  <div>
    <input type="text" v-model="value" :placeholder="tips" />
    <button @click="$emit('send-value', value)">提交</button>
  </div>
</template>

<script>
export default {
  props: ["tips"],
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style>
</style>