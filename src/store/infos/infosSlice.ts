import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfosState, Infos } from "./types";

const initialState = {
    status: "idle",
    error: "",
    data: {}
} as InfosState


const infosSlice = createSlice({
    name: 'infos',
    initialState,
    reducers: {
        dataAdded(state, action: PayloadAction<Infos>) {
            state.data = action.payload
        } 
    }
})

export const { dataAdded } = infosSlice.actions
export default infosSlice.reducer