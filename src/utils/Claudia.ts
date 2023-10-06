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

function testeLinhaAndColuna(vA: number[], vST: ST[][]) {
  const fil = vST[0].filter(({ id }) => id === vA[0] || id === vA[1] || id === vA[2]);
  const fil1 = vST[1].filter(({ id }) => id === vA[0] || id === vA[1] || id === vA[2]);
  const vFill = fil.length === 2;
  if (vFill) {
    if (fil.some(({ id }) => id === vA[0]) && fil
      .some(({ id }) => id === vA[1]) && !fil1
      .filter((e) => e.id === vA[2])[0].v && fil
      .filter(({ player }) => player === 1).length === 2) {
      return { get: true, id: vA[2] };
    }
    if (fil.some(({ id }) => id === vA[2]) && fil
      .some(({ id }) => id === vA[1]) && !fil1
      .filter((e) => e.id === vA[0])[0].v && fil
      .filter(({ player }) => player === 1).length === 2) {
      return { get: true, id: vA[0] };
    }
    if (fil.some(({ id }) => id === vA[0]) && fil
      .some(({ id }) => id === vA[2]) && !fil1
      .filter((e) => e.id === vA[1])[0].v && fil
      .filter(({ player }) => player === 1).length === 2) {
      return { get: true, id: vA[1] };
    }
  }
  return { get: false, id: 100 };
}

export function analises(vS: ST[][]) {
  // index 0 = v true / index 1 = v false //
  const Linhas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const Colunas = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
  const Diagonais = [[1, 5, 9], [3, 5, 7]];
  const endL = {
    one: testeLinhaAndColuna(Linhas[0], vS),
    two: testeLinhaAndColuna(Linhas[1], vS),
    three: testeLinhaAndColuna(Linhas[2], vS),
    four: testeLinhaAndColuna(Colunas[0], vS),
    five: testeLinhaAndColuna(Colunas[1], vS),
    six: testeLinhaAndColuna(Colunas[2], vS),
    seven: testeLinhaAndColuna(Diagonais[0], vS),
    eight: testeLinhaAndColuna(Diagonais[1], vS),
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
  if (endL.four.get) {
    return endL.four;
  }
  if (endL.five.get) {
    return endL.five;
  }
  if (endL.six.get) {
    return endL.six;
  }
  if (endL.seven.get) {
    return endL.seven;
  }
  if (endL.eight.get) {
    return endL.eight;
  }
  return { get: false, id: 100 };
}
