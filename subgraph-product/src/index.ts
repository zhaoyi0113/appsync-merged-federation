export const getProduct = async (event: any) => {
  console.log('get request', event);
  return { id: '001', name: 'product-001', inStock: true };
};
