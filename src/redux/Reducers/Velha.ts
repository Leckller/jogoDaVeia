import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface VelhaState {
  boxes: string[],
  player: boolean,
}

const initialState: VelhaState = {
  boxes: ['', '', '', '', '', '', '', '', ''],
  player: false,
};

export const VelhaSlice = createSlice({
  name: 'Velha',
  initialState,
  reducers: {
    play(state, action: PayloadAction<number>) {
      state.boxes[+action.payload] = state.player ? 'X' : 'O';
      state.player = !state.player;
    },
  },
});

export const { play } = VelhaSlice.actions;
export default VelhaSlice.reducer;
