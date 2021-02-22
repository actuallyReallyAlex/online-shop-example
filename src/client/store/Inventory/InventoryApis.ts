export const fetchInventory = async (): Promise<any> => {
  try {
    const response = await fetch("/getInventory");
    console.log(`fetchInventory() APIs`);
    console.log({ response });
    return response;
  } catch (error) {
    console.error(error);
  }
};
