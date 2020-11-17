<template>
  <div>
    <input
      :class="{ error: !isOk }"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
      @change="$emit('get-value', value)"
      @blur="tips"
    />
  </div>
</template>

<script>
export default {
  props: ["placeholder", "type", "rule", "errMes"],
  data() {
    return {
      value: "",
      isOk: true,
    };
  },
  methods: {
    tips() {
      if (!this.isOk) {
        alert(this.errMes);
      }
    },
  },
  watch: {
    value(newValue) {
      const pattern = this.rule;
      if (pattern.test(newValue)) {
        console.log("合法");
        this.isOk = true;
      } else {
        console.log(this.errMes);
        this.isOk = false;
      }
      if (newValue.length == 0) {
        console.log(1);
        this.isOk = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
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
.error {
  box-shadow: 0 0 9px -1px rgb(255, 46, 92);
}

input::-webkit-input-placeholder {
  color: rgb(185, 185, 185);
}
</style>