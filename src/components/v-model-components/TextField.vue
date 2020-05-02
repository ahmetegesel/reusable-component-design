<template>
  <div>
    <input type="text" v-model="lazyValue"/>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      lazyValue: '',
    };
  },
  watch: {
    value(value) {
      this.lazyValue = value;
    },
    lazyValue(value) {
      this.$emit('input', value);
    }
  },
};
</script>
