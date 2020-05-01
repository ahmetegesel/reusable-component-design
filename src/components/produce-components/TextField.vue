<template>
  <div>
    <input type="text" v-model="lazyModel"/>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    model: {
      type: String,
    },
  },
  data() {
    return {
      lazyModel: '',
    };
  },
  watch: {
    model(value) {
      this.lazyModel = value;
    },
  },
};
</script>
