import { ModalActionTypes, OPEN_MODAL, CLOSE_MODAL } from '../types/modalTypes';

// Define the state type
export interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false
};

export default function modalReducer(state = initialState, action: ModalActionTypes): ModalState {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: true };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}
