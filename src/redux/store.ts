import { configureStore } from '@reduxjs/toolkit';
// Essa aqui é aquela exportação default do reducer
import VelhaReducer from './Reducers/Velha';

// Para adicionar novos reducers basta adicionar uma chave com o nome e o reducer como valor. Siga o exemplo abaixo!
export const store = configureStore({
  reducer: {
    Velha: VelhaReducer,
  },
});

// Esses tipos servem para criar os hooks do redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
