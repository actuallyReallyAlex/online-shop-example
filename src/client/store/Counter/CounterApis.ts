const apiExampleRequest = async (): Promise<Response> => {
  return await fetch("https://cat-fact.herokuapp.com/facts");
};

export default {
  apiExampleRequest,
};
