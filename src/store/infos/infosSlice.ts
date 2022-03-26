import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfosState, Infos } from "./types";
import { RootState } from "../store";

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
            state.status = "succeeded"
        } 
    }
})

export const selectState = (state: RootState) => state.infos.data
export const selectCoords = (state: RootState) => state.infos.data.coords
export const selectStatus = (state: RootState) => state.infos.status
export const { dataAdded } = infosSlice.actions
export default infosSlice.reducer