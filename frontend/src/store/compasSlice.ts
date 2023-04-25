import {createSlice} from '@reduxjs/toolkit';

interface CompasSlice {
}

const initialState: CompasSlice = {
};

export const compasSlice = createSlice({
	name: "compas",
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
	},
});

export const compasReducer = compasSlice.reducer;

