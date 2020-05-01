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

import TextField from '../../components/produce-components/TextField';
import CategorySelection from '../../components/produce-components/CategorySelection';

export default {
  name: 'ProductProduce',
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
