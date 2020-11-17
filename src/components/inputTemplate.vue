<template>
  <div>
    <input
      :type="type"
      :placeholder="tips"
      v-model="value"
      @change="$emit('get-value', value)"
    />
  </div>
</template>

<script>
export default {
  props: ["tips", "type"],
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped>
input {
  font-size: 4vw;
  width: 80vw;
  height: 10vw;
  padding-left: 4vw;
  color: rgb(255, 46, 92);
  border: 1px solid rgb(255, 46, 92);
  background-color: rgb(255, 248, 250);
  outline: none;
}
</style>