import { configureStore } from "@reduxjs/toolkit";
import RootLayout from '../app/layout';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import counterReducer from './counter/counterSlice'
import pokemonsReducer from './pokemons/pokemonsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    pokemons: pokemonsReducer
  },
});

// Infer the `RootState` and `AppDispatch` types fron store itself
export type RootState= ReturnType<typeof store.getState>

// Infer type: {post: PostsState, comments: CommentsState, users:UsersSTate}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector