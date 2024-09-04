import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import calculateWinner from '../../utils/calculateWinner';

interface VelhaState {
  boxes: (string | null)[],
  player: boolean,
  moves: number,
  history: (string | null)[][],
  status: string,
  disable: boolean,
}

const initialState: VelhaState = {
  boxes: [null, null, null, null, null, null, null, null, null],
  moves: 0,
  player: false,
  history: [],
  status: 'Vez do O',
  disable: false,
};

export const VelhaSlice = createSlice({
  name: 'Velha',
  initialState,
  reducers: {
    play(state, action: PayloadAction<number>) {
      state.boxes[+action.payload] = state.player ? 'X' : 'O';
      state.status = state.player ? 'Vez do X' : 'Vez do O';
      state.moves++;

      if (calculateWinner(state.boxes)) {
        state.disable = true;
        state.history.push(state.boxes);
        state.status = state.player ? 'Vitoria do X' : 'Vitoria do O';
        state.boxes = initialState.boxes;
        state.moves = initialState.moves;
        return;
      }

      if (state.moves >= 9) {
        state.disable = true;
        state.history.push(state.boxes);
        state.status = 'Velha!!';
        state.player = !state.player;
        state.boxes = initialState.boxes;
        state.moves = initialState.moves;
        return;
      }

      state.player = !state.player;
    },
    reiniciar(state) {
      state.status = state.player ? 'Vez do X' : 'Vez do O';
      state.disable = false;
    },
  },
});

export const { play, reiniciar } = VelhaSlice.actions;
export default VelhaSlice.reducer;
