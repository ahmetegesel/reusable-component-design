<template>
  <fragment>
    <slot></slot>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
  name: 'PField',
  components: {
    Fragment
  },
  props: {
    field: {
      type: String,
      required: true
    }
  },
  methods: {
    produce() {
      return {
        [this.field]: this.$slots.default[0].componentInstance.produce()
      };
    }
  }
};
</script>
