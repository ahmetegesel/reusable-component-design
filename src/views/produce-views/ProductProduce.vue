<template>
  <div>
    <p-field ref="title" :field="'title'">
      <p-text :value="product.title"/>
    </p-field>
    <category-selection ref="categorySelection"
      :category="product.categoryId"
      :subCategory="product.subCategoryId"
    />
    <button @click="getDataClicked">Get Data</button>
    <hr/>
    <p>Data:</p>
    <p>{{product}}</p>
  </div>
</template>

<script>
import { getProduct } from '../../../lib/mockApi';

import PText from '../../components/produce-components/generic/PText';
import CategorySelection from '../../components/produce-components/CategorySelection';
import PField from '../../components/produce-components/generic/base/PField';

export default {
  name: 'ProductProduce',
  components: {
    PField,
    PText,
    CategorySelection,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getDataClicked() {
      this.product = {
        ...this.product,
        ...this.$refs.title.produce(),
        ...this.$refs.categorySelection.produce()
      };
    }
  },
  async mounted() {
    this.product = await getProduct('1');
  },
};
</script>
