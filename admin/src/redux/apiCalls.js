import { publicRequest, userRequest } from "../requestMethods";
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from "./productRedux";
import { loginFail, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const response = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFail());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const response = await publicRequest.get("/products");
    dispatch(getProductSuccess(response.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());

  try {
    const response = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};
