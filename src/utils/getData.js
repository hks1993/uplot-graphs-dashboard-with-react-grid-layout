import Prando from "prando";
const random1 = new Prando("first");
const random2 = new Prando("second");
export function getPoints(startIndex, chunkSize) {
  const indexArr = [];
  const firstArr = [];
  const secondArr = [];

  for (let i = startIndex; i < startIndex + chunkSize; i++) {
    indexArr.push(i);
    firstArr.push(random1.nextInt(0, 100));
    secondArr.push(random2.nextInt(0, 100));
  }

  return [indexArr, firstArr, secondArr];
}
