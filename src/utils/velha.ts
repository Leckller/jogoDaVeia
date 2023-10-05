/// 123 / 456 / 789 / lado
/// 147 / 258 / 369 / topo
/// 159 / 357 / diagonal

import { ST } from '../types';

function isVelha(state: { ClickReducer: { game: ST[] } }) {
  const arrays = [1, 2, 3, 4, 5, 6, 7, 8];
  function verifyVelha(id: number[]) {
    const s1 = state.ClickReducer.game.find((e) => e.id === id[0]);
    const s2 = state.ClickReducer.game.find((e) => e.id === id[1]);
    const s3 = state.ClickReducer.game.find((e) => e.id === id[2]);
    const s4 = state.ClickReducer.game.find((e) => e.id === id[3]);
    const s5 = state.ClickReducer.game.find((e) => e.id === id[4]);
    const s6 = state.ClickReducer.game.find((e) => e.id === id[5]);
    const s7 = state.ClickReducer.game.find((e) => e.id === id[6]);
    const s8 = state.ClickReducer.game.find((e) => e.id === id[7]);
    const test = (s1?.v
       && s2?.v && s3?.v && s4?.v && s5?.v && s6?.v && s7?.v && s8?.v);
    return test;
  }
  return verifyVelha(arrays);
}

export function velha(state: { ClickReducer: { game: ST[] } }) {
  function verifyById(id:number[]) {
    const s1 = state.ClickReducer.game.find((e) => e.id === id[0]);
    const s2 = state.ClickReducer.game.find((e) => e.id === id[1]);
    const s3 = state.ClickReducer.game.find((e) => e.id === id[2]);
    const test = (s1?.img === s2?.img && s1?.img === s3?.img
      && s2?.img === s3?.img && s1?.v && s2?.v && s3?.v);
    return { test, winner: s1?.player };
  }
  function winObj(
    vBD: (
      p: number[]) => { test: boolean | undefined, winner: number | undefined },
    ar: number[],
  ) {
    return { victory: true,
      winner: vBD(ar).winner };
  }
  function allTests() {
    if (verifyById([1, 2, 3]).test) return winObj(verifyById, [1, 2, 3]);
    if (verifyById([4, 5, 6]).test) return winObj(verifyById, [4, 5, 6]);
    if (verifyById([7, 8, 9]).test) return winObj(verifyById, [7, 8, 9]);
    if (verifyById([1, 4, 7]).test) return winObj(verifyById, [1, 4, 7]);
    if (verifyById([2, 5, 8]).test) return winObj(verifyById, [2, 5, 8]);
    if (verifyById([3, 6, 9]).test) return winObj(verifyById, [3, 6, 9]);
    if (verifyById([1, 5, 9]).test) return winObj(verifyById, [1, 5, 9]);
    if (verifyById([3, 5, 7]).test) return winObj(verifyById, [3, 5, 7]);
    return { victory: !isVelha(state), winner: 'draw' };
  }
  return allTests();
}

// export function pcBrain(state: { ClickReducer: { game: ST[] } }) {
//   // gera um nmr aleatório de acordo com a quantidade de espaços disponiveis
//   // para marcar.
//   const filterNoMarc = state.ClickReducer.game.filter((e) => e.v === false);
//   return filterNoMarc;
// }
