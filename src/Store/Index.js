import { createSlice, configureStore } from '@reduxjs/toolkit'

const detailViewInitialState = {showDetailView: false}
const rubricViewInitialState = {showRubricView: false}

const detailViewSlice = createSlice({
    name: "detailView",
    initialState: detailViewInitialState,
    reducers: {
        setFalse(state){
            state.showDetailView = false
        },
        setTrue(state){
            state.showDetailView = true
        }
    }
});

const rubricViewSlice = createSlice({
    name: "rubricView",
    initialState: rubricViewInitialState,
    reducers: {
        setFalse(state){
            state.showRubricView = false
        },
        setTrue(state){
            state.showRubricView = true
        }
    }
})

const store = configureStore({
    reducer: {
        detailView: detailViewSlice.reducer,
        rubricView: rubricViewSlice.reducer,
    }
});

export const detailViewActions = detailViewSlice.actions;
export const rubricViewActions = rubricViewSlice.actions;
export default store;