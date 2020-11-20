<template>
  <div>
    <input
      v-if="use == 'login'"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
    />
    <input
      v-else
      :class="{ error: !isOk }"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
      @blur="tips"
    />
  </div>
</template>

<script>
export default {
  props: ["placeholder", "type", "rule", "errMes", "use"],
  data() {
    return {
      value: "",
      isOk: true,
    };
  },
  methods: {
    tips() {
      if (!this.isOk) {
        this.$toast({
          message: this.errMes,
          position: "bottom",
        });
      }
    },
  },
  watch: {
    value(newValue) {
      this.$emit("get-value", newValue);
      const pattern = this.rule;
      if (pattern.test(newValue)) {
        this.isOk = true;
      } else {
        this.isOk = false;
      }
      if (newValue.length == 0) {
        this.isOk = true;
      }
    },
    isOk(newValue) {
      this.$emit("legal", newValue);
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
  transition: all 1s;
}
.error {
  box-shadow: 0 0 9px -1px rgb(255, 46, 92);
}

input::-webkit-input-placeholder {
  color: rgb(185, 185, 185);
}
</style>