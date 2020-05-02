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
  methods: {
    produce() {
      return this.lazyValue;
    }
  },
  watch: {
    value(value) {
      this.lazyValue = value;
    },
  },
};
</script>
