/// 123 / 456 / 789 / lado
/// 147 / 258 / 369 / topo
/// 159 / 357 / diagonal

import { ST } from '../types';

// receber um array com as possibilidades f atuais e as v atuais //
export function brainDEFESA(arrV: ST[]) {
  const V = arrV.filter(({ v }) => v === true);
  const F = arrV.filter(({ v }) => v === false);
  return [[...V], [...F]];
}

function analises(vS: [ST[], ST[]]) {
  // index 0 = v true / index 1 = v false //
  function teste1() {
    const fil = vS[0].filter(({ id }) => id === 1 || id === 2 || id === 3);
    const vFill = fil.length === 2;
    if (vFill && fil.some(({ id }) => id === 1) && fil.some(({ id }) => id === 2)) {
      return 3;
    }
    if (vFill && fil.some(({ id }) => id === 3) && fil.some(({ id }) => id === 2)) {
      return 1;
    }
    if (vFill && fil.some(({ id }) => id === 1) && fil.some(({ id }) => id === 3)) {
      return 2;
    }
  }
}
