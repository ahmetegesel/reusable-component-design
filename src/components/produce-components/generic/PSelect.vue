<template>
  <select v-model="lazyValue" @change="onChanged">
    <option v-for="(item, index) in items" :key="generateKey(index)"
            v-bind:value="getValue(item)">
      {{getName(item)}}
    </option>
  </select>
</template>

<script>
const prepareGenerateDateKey = () => {
  const date = new Date().getTime().toString().substring(0, 6);

  return function (index) {
    const name = this.$options.name.toLowerCase();

    return `${name}${date}-${index}`;
  };
};

export default {
  name: 'PSelect',
  props: {
    value: {
      type: [String, Number, Object]
    },
    items: {
      type: Array,
      default: () => []
    },
    itemName: {
      type: String,
      default: 'name'
    },
    itemValue: {
      type: String,
      default: 'value'
    }
  },
  data() {
    return {
      lazyValue: undefined
    };
  },
  methods: {
    produce() {
      return this.lazyValue;
    },
    generateKey: prepareGenerateDateKey(),
    getValue(item) {
      return typeof item === 'object' ? item[this.itemValue] : item;
    },
    getName(item) {
      return typeof item === 'object' ? item[this.itemName] : item;
    },
    onChanged(event) {
      this.lazyValue = event.target.value;
      this.$emit('change', event.target.value);
    }
  },
  watch: {
    value(value) {
      this.lazyValue = value;
    }
  }
};
</script>

<style scoped>

</style>
