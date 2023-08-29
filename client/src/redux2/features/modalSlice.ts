import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false
    },
    reducers: {
      toggleModal: (state) => {
        console.log('Before:', state.isOpen);
        state.isOpen = !state.isOpen;
        console.log('After:', state.isOpen);
    },
    },
})


export const {toggleModal} = modalSlice.actions
export default modalSlice.reducer