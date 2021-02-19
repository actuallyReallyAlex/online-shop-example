export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_RECEIVE = "GET_DATA_RECEIVE";
export const INCREMENT = "INCREMENT";
export const INCREMENT_REQUEST = "INCREMENT_REQUEST";

export interface Action {
  type: string;
  payload?: unknown;
}
