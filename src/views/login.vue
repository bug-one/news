<template>
  <div>
    <inputTemplate @send-value="getValue" tips="用户名"></inputTemplate>
    <inputTemplate @send-value="getValue" tips="密码"></inputTemplate>
  </div>
</template>

<script>
import inputTemplate from "../components/inputTemplate";
export default {
  components: {
    inputTemplate,
  },
  methods: {
    getValue(val) {
      console.log(val);
    },
  },
};
</script>

<style>
</style>