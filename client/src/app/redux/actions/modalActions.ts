import { OPEN_MODAL, CLOSE_MODAL } from '../types/modalTypes';

export function openModal() {
  return { type: OPEN_MODAL };
}

export function closeModal() {
  return { type: CLOSE_MODAL };
}
