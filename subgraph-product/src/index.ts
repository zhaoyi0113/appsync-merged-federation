export const getProduct = async (event: any, context: any) => {
  console.log('get request', event, context);
  return { id: 'prod-001', name: 'product-001', inStock: true };
};

export const getPurchases = async (event: any) => {
  console.log('get purchases', event);
  return [{ id: 'prod-001', name: 'product-001', inStock: true }];
};
