<template>
  <div>
    <input type="text" v-model="value" />
    <button @click="$emit('send-value', value)">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style>
</style>