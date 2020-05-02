const products = [
  {
    id: '1',
    title: 'Example Product',
    categoryId: '2',
    subCategoryId: '50',
  },
  {
    id: '2',
    title: 'Example Product 2',
    categoryId: '1',
    subCategoryId: '40',
  },
];

const categories = [
  {
    id: '1',
    name: 'Accessories',
  },
  {
    id: '2',
    name: 'Sports',
  },
  {
    id: '40',
    parent: '1',
    name: 'Watches',
  },
  {
    id: '41',
    parent: '1',
    name: 'Rings',
  },
  {
    id: '49',
    parent: '2',
    name: 'Football',
  },
  {
    id: '50',
    parent: '2',
    name: 'Basketball',
  },
];

export {
  products,
  categories,
};
