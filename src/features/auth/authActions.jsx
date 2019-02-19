import { LOGIN_USER, SIGN_OUT_USER } from "./authConstants";
import { closeModal } from "../modals/modalsActions";

export const login = creds => dispatch => {
  dispatch({
    type: LOGIN_USER,
    payload: { creds }
  });

  dispatch(closeModal());
}

export const logout = () => ({
    type: SIGN_OUT_USER
  })