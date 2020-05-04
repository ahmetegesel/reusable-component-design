<template>
  <div>
    <text-field v-model="product.title"/>
    <category-selection
      :category.sync="product.categoryId"
      :subCategory.sync="product.subCategoryId"
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
  async mounted() {
    this.product = await getProduct('1');
  },
};
</script>
