import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import calculateWinner from '../../utils/calculateWinner';

interface VelhaState {
  boxes: (string | null)[],
  player: boolean,
  moves: number,
  history: (string | null)[][],
}

const initialState: VelhaState = {
  boxes: [null, null, null, null, null, null, null, null, null],
  moves: 0,
  player: false,
  history: [],
};

export const VelhaSlice = createSlice({
  name: 'Velha',
  initialState,
  reducers: {
    play(state, action: PayloadAction<number>) {
      state.boxes[+action.payload] = state.player ? 'X' : 'O';
      state.moves++;

      if (calculateWinner(state.boxes)) {
        state.history.push(state.boxes);
        state.boxes = initialState.boxes;
        state.moves = initialState.moves;
        console.log(`Vitoria do jogador ${state.player ? 'X' : 'O'}`);
        return;
      }

      if (state.moves >= 9) {
        state.boxes = initialState.boxes;
        state.moves = initialState.moves;
        console.log('Velha!');
        return;
      }

      state.player = !state.player;
    },
  },
});

export const { play } = VelhaSlice.actions;
export default VelhaSlice.reducer;
