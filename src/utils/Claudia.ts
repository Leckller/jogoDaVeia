/// 123 / 456 / 789 / lado
/// 147 / 258 / 369 / topo
/// 159 / 357 / diagonal

import { ST } from '../types';

// receber um array com as possibilidades f atuais e as v atuais //
export function brainDEFESA(arrV: ST[]) {
  const V = arrV.filter(({ v }) => v === true);
  const F = arrV.filter(({ v }) => v === false);
  return [V, F];
}

export function analises(vS: ST[][]) {
  // index 0 = v true / index 1 = v false //
  const Linhas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  function testeLinha(vA: number[]) {
    const fil = vS[0].filter(({ id }) => id === vA[0] || id === vA[1] || id === vA[2]);
    const fil1 = vS[1].filter(({ id }) => id === vA[0] || id === vA[1] || id === vA[2]);
    const vFill = fil.length === 2;
    if (vFill && fil.some(({ id }) => id === vA[0]) && fil
      .some(({ id }) => id === vA[1]) && !fil1
      .filter((e) => e.id === vA[2])[0].v) {
      return { get: true, id: vA[2] };
    }
    if (vFill && fil.some(({ id }) => id === vA[2]) && fil
      .some(({ id }) => id === vA[1]) && !fil1
      .filter((e) => e.id === vA[0])[0].v) {
      return { get: true, id: vA[0] };
    }
    if (vFill && fil.some(({ id }) => id === vA[0]) && fil
      .some(({ id }) => id === vA[2]) && !fil1.filter((e) => e.id === vA[1])[0].v) {
      return { get: true, id: vA[1] };
    }
    return { get: false, id: 100 };
  }
  const endL = {
    one: testeLinha(Linhas[0]),
    two: testeLinha(Linhas[1]),
    three: testeLinha(Linhas[2]),
  };
  if (endL.one.get) {
    return endL.one;
  }
  if (endL.two.get) {
    return endL.two;
  }
  if (endL.three.get) {
    return endL.three;
  }
  return { get: false, id: 100 };
}
