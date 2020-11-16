<template>
  <div>
    <inputTemplate @send-value="getValue"></inputTemplate>
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