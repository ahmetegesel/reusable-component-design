export const prepareBasicProduce = (options) => function () {
  return Object.keys(options).reduce((objectToProduce, key) => {
    const value = options[key];
    let producedValue;

    if (typeof value === 'object') {
      producedValue = Object.keys(value).length === 1 && Object.keys(value)[0] === 'ref'
        ? this.$refs[value.ref].produce()
        : prepareBasicProduce(value).bind(this)();
    } else {
      producedValue = value;
    }

    return {
      ...objectToProduce,
      [key]: producedValue
    };
  }, {});
};
