<template>
  <div>
    <text-field :model="product.title"/>
    <category-selection
      :category="product.categoryId"
      :subCategory="product.subCategoryId"
    />
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
  async mounted() {
    this.product = await getProduct(1);
  },
};
</script>
