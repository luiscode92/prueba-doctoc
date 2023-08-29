export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

interface OpenModalAction {
  type: typeof OPEN_MODAL;
}

interface CloseModalAction {
  type: typeof CLOSE_MODAL;
}

export type ModalActionTypes = OpenModalAction | CloseModalAction;
