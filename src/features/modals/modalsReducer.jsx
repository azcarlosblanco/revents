import { createReducer } from "../../app/common/util/reducerUtil";
import { MODAL_OPEN, MODAL_CLOSE } from "./modalsConstants";

const initialState = null;

export const openModal = (state, {modalType, modalProps}) => {
    return {modalType, modalProps};    
}

export const closeModal = (state, payload) => {
    return null;    
}

export default createReducer(initialState, {
    [MODAL_OPEN]: openModal,
    [MODAL_CLOSE]: closeModal
})



