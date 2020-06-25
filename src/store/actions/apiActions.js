import * as types from "./actionTypes";

export const apiAction = ({
  url = "",
  method = "GET",
  data = null,
  onSuccess = "",
  onError = "",
  onStart = "",
}) => ({
  type: types.API_CALL_START,
  payload: {
    url,
    method,
    data,
    onSuccess,
    onError,
    onStart,
  },
});
