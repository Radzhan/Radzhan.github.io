import {configureStore} from "@reduxjs/toolkit";
import {compasReducer} from '../store/compasSlice';

export const store = configureStore({
	reducer: {
		compas: compasReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;