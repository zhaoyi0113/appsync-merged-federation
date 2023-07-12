export const getUser = async (event: any) => {
  console.log('get request', event);
  return { id: '001', name: 'user1', purchases: [{ id: '001', name: 'product-001', dateTime: new Date() }] };
};

export const getUserPurchasesHandler = async (event: any) => {
  console.log('get request', event);
  return [{ id: '001', name: 'product-001', dateTime: new Date() }];
};
