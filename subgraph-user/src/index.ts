export const getUser = async (event: any) => {
  console.log('get request', event);
  return { id: '001', name: 'user1' };
};
