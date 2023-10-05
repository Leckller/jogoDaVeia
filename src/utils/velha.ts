/// 123 / 456 / 789 / lado
/// 147 / 258 / 369 / topo
/// 159 / 357 / diagonal

import { ST } from '../types';

function isVelha(state: { ClickReducer: { game: ST[] } }) {
  const FILTER = state.ClickReducer.game.filter((e) => e.v === true);
  const allV = FILTER.length === 9;
  return allV;
}

export function velha(state: { ClickReducer: { game: ST[] } }) {
  function verifyById(id:number[]) {
    if (id === undefined) return;
    const s1 = state.ClickReducer.game.find((e) => e.id === id[0]);
    const s2 = state.ClickReducer.game.find((e) => e.id === id[1]);
    const s3 = state.ClickReducer.game.find((e) => e.id === id[2]);
    const test = (s1?.img === s2?.img && s1?.img === s3?.img
      && s2?.img === s3?.img && s1?.v && s2?.v && s3?.v);
    return { test, winner: s1?.player };
  }
  function winObj(
    vBD = verifyById,
    ar: number[],
  ) {
    return { victory: true,
      winner: vBD(ar)?.winner };
  }
  const testes = [[1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  function allTests() {
    if (testes.some((e) => verifyById(e)?.test === true)) {
      const array = testes.find((e) => verifyById(e)?.test);
      return winObj(verifyById, array as number[]);
    }
    return { victory: !isVelha(state), winner: 'draw' };
  }
  return allTests();
}
