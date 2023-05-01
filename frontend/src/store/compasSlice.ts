import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {NamesI} from '../types';
import {RootState} from '../app/store';

interface CompasSlice {
	namesArray: NamesI[]
}

const initialState: CompasSlice = {
	namesArray: []
};

export const getNames = createAsyncThunk<NamesI[]>('compas/Name', async () => {
	const names = await axiosApi.get('products');
	
	return names.data;
});

export const compasSlice = createSlice({
	name: "compas",
	initialState,
	reducers: {
	},
	extraReducers: (builder) => {
		builder.addCase(getNames.fulfilled, (state, action) => {
			state.namesArray = action.payload;
		});
	},
});

export const compasReducer = compasSlice.reducer;
export const arrayNames = (state: RootState) => state.compas.namesArray;

