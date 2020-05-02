<template>
  <div>
    <text-field v-model="product.title"/>
    <category-selection v-model="categories"
    />
    <hr/>
    <p>Data:</p>
    <p>{{product}}</p>
  </div>
</template>

<script>
import { getProduct } from '../../../lib/mockApi';

import TextField from '../../components/v-model-components/TextField';
import CategorySelection from '../../components/v-model-components/CategorySelection';

export default {
  name: 'ProductVModel',
  components: {
    TextField,
    CategorySelection,
  },
  data() {
    return {
      product: {},
    };
  },
  computed: {
    categories: {
      get() {
        return {
          category: this.product.categoryId,
          subCategory: this.product.subCategoryId
        };
      },
      set(value) {
        this.product.categoryId = value.category;
        this.product.subCategoryId = value.subCategory;
      }
    },
  },
  async mounted() {
    this.product = await getProduct(1);
  },
};
</script>
