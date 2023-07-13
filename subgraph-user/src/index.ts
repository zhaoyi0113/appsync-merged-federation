export const getUser = async (event: any, context: any) => {
  console.log('get request', event, context);
  return { id: 'user-001', name: 'user1' };
};

export const getUserPurchasesDateTimeHandler = async (event: any) => {
  console.log('get request', event);
  return new Date();
};
